import { Campaign } from "~/models/campaign.model";
import { campaignsTable } from "../database/schema";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { email } = query as { email: string };

  if (!email) {
    throw createError({
      status: 400,
      message: "No user email provided",
    });
  }
  const allCampaigns = await db
    .select()
    .from(campaignsTable)
    .where(eq(campaignsTable.userEmail, email))
    .then((rows) => {
      return rows.map(
        (row) =>
          new Campaign({
            ...row,
          })
      );
    })
    .catch((err) => {
      console.error(
        `\n\n[ CAMPAIGNS GET ] Error fetching campaigns: ${err}\n\n`
      );
    });
  return allCampaigns;
});
