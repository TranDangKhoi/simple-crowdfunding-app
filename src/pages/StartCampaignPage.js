import CampaignAddNew from "modules/campaign/CampaignAddNew";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StartCampaignPage = () => {
  const { user } = useSelector((state) => state.auth);
  console.log("log ~ StartCampaignPage ~ user", user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || !user?.email) {
      navigate("/sign-in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <>
      <CampaignAddNew></CampaignAddNew>
    </>
  );
};

export default StartCampaignPage;
