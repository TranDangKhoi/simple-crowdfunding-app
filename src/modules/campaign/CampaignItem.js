import LayoutGrid from "layout/LayoutGrid";
import CampaignAnalytics from "./parts/CampaignAnalytics";
import CampaignAuthor from "./parts/CampaignAuthor";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignDescription from "./parts/CampaignDescription";
import CampaignImage from "./parts/CampaignImage";
import CampaignTitle from "./parts/CampaignTitle";

const CampaignItem = () => {
  return (
    <div className="overflow-hidden bg-white shadow-softShadow rounded-2xl">
      <CampaignImage></CampaignImage>
      <div className="px-5 py-4">
        <CampaignCategory text="Education"></CampaignCategory>
        <CampaignTitle>Powered Kits Learning Boxes</CampaignTitle>
        <CampaignDescription>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampaignDescription>
        <LayoutGrid itemsPerRow={2} gapX={10} className="mb-5">
          <CampaignAnalytics size="normal"></CampaignAnalytics>
          <CampaignAnalytics size="normal"></CampaignAnalytics>
        </LayoutGrid>
        <CampaignAuthor></CampaignAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
