import { campaignsTable } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const campaign = await readBody(event);

  if (!campaign || !campaign.id || !campaign.userEmail) {
    throw createError({
      status: 400,
      message: "Missing required fields to update a campaign",
    });
  }

  const updatedCampaign = db
    .update(campaignsTable)
    .set({
      ...campaign,
    })
    .where(eq(campaignsTable.id, campaign.id))
    .returning()
    .then((camp) => {
      return camp[0];
    })
    .catch((err) => {
      console.error(`\n\n[ CAMPAIGN PUT ] Error updating campaign: ${err}\n\n`);
    });

  return updatedCampaign;
});
