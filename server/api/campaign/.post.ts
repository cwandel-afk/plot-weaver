import { campaignsTable } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const campaign = await readBody(event);

  if (!campaign || !campaign.id || !campaign.userEmail) {
    throw createError({
      status: 400,
      message: "Missing required fields to create a campaign",
    });
  }

  const insertedCampaign = await db
    .insert(campaignsTable)
    .values({
      id: campaign.id,
      userEmail: campaign.userEmail,
      name: campaign.name,
      description: campaign.description,
      notes: campaign.notes,
      documents: campaign.documents,
    })
    .returning()
    .then((camp) => {
      return camp[0];
    })
    .catch((err) => {
      console.error(`\n\n[ CAMPAIGN POST ] Error adding campaign: ${err}\n\n`);
    });

  return insertedCampaign;
});
