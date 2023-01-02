import { Button } from "components/button";
import Logo from "../../assets/images/Logo.png";
import DashboardFund from "./parts/DashboardFund";
import DashboardSearch from "./DashboardSearch";
import { useNavigate } from "react-router-dom";
const DashboardTopbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <img
          srcSet={`${Logo} 2x`}
          alt="Logo"
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="w-full max-w-[456px]">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFund></DashboardFund>
        <Button to={"/start-campaign"} className="text-white bg-secondary px-7">
          Start a campaign
        </Button>
        <img srcSet={`${Logo} 2x`} className="rounded-full" alt="Logo" />
      </div>
    </div>
  );
};

export default DashboardTopbar;
