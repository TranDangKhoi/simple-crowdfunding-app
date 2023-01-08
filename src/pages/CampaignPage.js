import classNames from "classnames";
import { Button } from "components/button";
import { Heading } from "components/common";
import { PlusIcon } from "components/icon";
import LayoutGrid from "layout/LayoutGrid";
import CampaignMain from "modules/campaign/CampaignMain";
import { Link } from "react-router-dom";

const CampaignPage = () => {
  return (
    <>
      <div className="flex items-center justify-between px-10 py-8 mb-10 bg-white dark:bg-darkSecondary rounded-3xl">
        <div className="flex items-start gap-x-6">
          <div className="flex items-center justify-center text-white rounded-full w-14 h-14 bg-secondary bg-opacity-60">
            <PlusIcon></PlusIcon>
          </div>
          <div className="flex-1">
            <h1 className="text-[22px] dark:text-text4 font-semibold mb-2">
              Create Your Campaign
            </h1>
            <p className="mb-2 text-sm text-text3">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <Link href="/" className="text-sm text-primary">
              Need any help? Learn More...
            </Link>
          </div>
        </div>
        <Button
          className={classNames(
            "px-8 transition-all bg-opacity-20 text-secondary bg-secondary",
            "hover:text-white hover:bg-opacity-100"
          )}
          to={"/start-campaign"}
        >
          Create campaign
        </Button>
      </div>
      <Heading className="mb-4" campaignAmount={4}>
        Your Campaign
      </Heading>
      <LayoutGrid itemsPerRow={1} gapY={4}>
        <CampaignMain></CampaignMain>
        <CampaignMain></CampaignMain>
        <CampaignMain></CampaignMain>
      </LayoutGrid>
      <Button className="px-8 w-[200px] mx-auto transition-all bg-opacity-20 text-secondary text-opacity-90 bg-secondary hover:text-white hover:bg-opacity-100">
        See more+
      </Button>
    </>
  );
};

export default CampaignPage;
