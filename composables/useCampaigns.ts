import { campaignsTable } from "~/server/database/schema";
import { type InferSelectModel } from "drizzle-orm";
import { eq } from "drizzle-orm";

type CampaignType = InferSelectModel<typeof campaignsTable>;

export class Campaign implements CampaignType {
  id = "";
  name = "";
  description = "";
  notes: string | null = null;
  documents: string | null = null;

  constructor(init?: Partial<Campaign>) {
    Object.assign(this, init);
  }
}

export const useCampaigns = () => {
  const _campaigns = useState<Campaign[]>(() => []);
  const campaigns = computed(() => _campaigns.value);

  const db = useNeonDatabase();

  const addCampaign = async (campaign: Campaign) => {
    const insertedCampaign = await db
      .insert(campaignsTable)
      .values({
        ...campaign,
        documents: campaign.documents
          ? JSON.stringify(campaign.documents)
          : null,
      })
      .returning()
      .then(() => {
        _campaigns.value.push(campaign);
      })
      .catch((err) => {
        console.error(`[ useCampaigns ] Error adding campaign: ${err}`);
      });
    return insertedCampaign;
  };

  const removeCampaign = (campaign: Campaign) => {
    db.delete(campaignsTable)
      .where(eq(campaignsTable.id, campaign.id))
      .then(() => {
        _campaigns.value = _campaigns.value.filter((p) => p !== campaign);

        console.log(
          `[ useCampaigns ] Campaign with id ${campaign.id} removed successfully.`
        );
      })
      .catch((err) => {
        console.error(`[ useCampaigns ] Error removing campaign: ${err}`);
      });
  };

  const updateCampaign = (campaign: Campaign, updatedCampaign: Campaign) => {
    db.update(campaignsTable)
      .set({
        ...updatedCampaign,
        documents: updatedCampaign.documents
          ? JSON.stringify(updatedCampaign.documents)
          : null,
      })
      .where(eq(campaignsTable.id, campaign.id))
      .then(() => {
        const index = _campaigns.value.findIndex((p) => p === campaign);
        _campaigns.value[index] = updatedCampaign;
        console.log(
          `[ useCampaigns ] Campaign with id ${campaign.id} updated successfully.`
        );
      })
      .catch((err) => {
        console.error(`[ useCampaigns ] Error updating campaign: ${err}`);
      });
  };

  const findCampaign = (id: string) => {
    return _campaigns.value.find((p) => p.id === id);
  };

  const getCampaigns = async () => {
    const allCampaigns = await db
      .select()
      .from(campaignsTable)
      .then(
        (rows) =>
          (_campaigns.value = rows.map(
            (row) =>
              new Campaign({
                ...row,
                documents: row.documents ? JSON.parse(row.documents) : null,
              })
          ))
      );
    return allCampaigns;
  };

  return {
    _campaigns,
    campaigns,
    addCampaign,
    getCampaigns,
    removeCampaign,
    updateCampaign,
    findCampaign,
  };
};
