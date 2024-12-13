import { Campaign } from "~/models/campaign.model";

export const useCampaigns = () => {
  const _campaigns = useState<Campaign[]>(() => []);
  const campaigns = computed(() => _campaigns.value);

  const addCampaign = async (campaign: Campaign) => {
    const newID = crypto.randomUUID();
    await $fetch("/api/campaign", {
      method: "POST",
      body: {
        ...campaign,
        id: newID,
      },
    })
      .then((response) => {
        _campaigns.value.push(new Campaign(response));
      })
      .catch((error) => {
        console.error("ERROR [Campaign Add]", error);
      });
  };

  const removeCampaign = async (campaign: Campaign) => {
    await $fetch(`/api/campaign/${campaign.id}`, {
      method: "DELETE",
    })
      .then(() => {
        _campaigns.value = _campaigns.value.filter((c) => c.id !== campaign.id);
      })
      .catch((error) => {
        console.error("Error deleting campaign", error);
      });
  };

  const updateCampaign = async (campaign: Campaign) => {
    await $fetch("/api/campaign/", {
      method: "PUT",
      body: {
        ...campaign,
      },
    })
      .then(() => {
        const index = _campaigns.value.findIndex((c) => c === campaign);
        _campaigns.value[index] = campaign;
      })
      .catch((error) => {
        console.error("ERROR [Campaign Update]", error);
      });
  };

  const findCampaign = (id: string) => {
    return _campaigns.value.find((c) => c.id === id);
  };

  const getCampaigns = async (email: string) => {
    await $fetch(`/api/campaigns`, {
      method: "GET",
      params: {
        email,
      },
    })
      .then((response) => {
        _campaigns.value = response as Campaign[];
      })
      .catch((error) => {
        console.error("ERROR [Campaigns Get]", error);
      });
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
