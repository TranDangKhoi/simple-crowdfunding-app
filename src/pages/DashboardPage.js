import Heading from "components/common/Heading";
import LayoutGrid from "layout/LayoutGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import CampaignMain from "modules/campaign/CampaignMain";
import { v4 } from "uuid";
const DashboardPage = () => {
  return (
    <>
      <Heading className="mb-5" campaignAmount={4}>
        Your Campaign
      </Heading>
      <CampaignMain></CampaignMain>
      <Heading className="mb-5">Popular Campaign</Heading>
      <LayoutGrid className="mb-5" gapX={8}>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </LayoutGrid>
      <Heading className="mb-5">Recent Campaign</Heading>
    </>
  );
};

export default DashboardPage;
