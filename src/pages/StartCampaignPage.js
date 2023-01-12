import CampaignAddNew from "modules/campaign/CampaignAddNew";
import RequiredAuthPage from "./RequiredAuthPage";

const StartCampaignPage = () => {
  return (
    <RequiredAuthPage>
      <CampaignAddNew></CampaignAddNew>
    </RequiredAuthPage>
  );
};

export default StartCampaignPage;
