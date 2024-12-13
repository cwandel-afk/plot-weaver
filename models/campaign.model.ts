import type { InferSelectModel } from "drizzle-orm";
import type { campaignsTable } from "~/server/database/schema";

type CampaignType = InferSelectModel<typeof campaignsTable>;

export class Campaign implements CampaignType {
  id = "";
  userEmail: string = "";
  name = "";
  description = "";
  notes: string | null = null;
  documents: string | null = null;

  constructor(init?: Partial<Campaign>) {
    Object.assign(this, init);
  }
}
