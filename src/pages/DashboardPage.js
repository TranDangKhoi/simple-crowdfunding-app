import Heading from "components/common/Heading";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import LayoutGrid from "layout/LayoutGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import CampaignMain from "modules/campaign/CampaignMain";
import { useEffect } from "react";
import { v4 } from "uuid";
const DashboardPage = () => {
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    async function fetchCampaign() {
      try {
        const res = await axiosPrivate.get("/api/campaigns");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCampaign();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
