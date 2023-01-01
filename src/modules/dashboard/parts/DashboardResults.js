import DashboardResultList from "./DashboardResultList";
import DashboardTotalResults from "./DashboardTotalResults";

const DashboardResults = () => {
  return (
    <div className="w-[843px] z-50 absolute top-full left-0 bg-white translate-y-5 pb-6 rounded-2xl overflow-hidden">
      <DashboardTotalResults></DashboardTotalResults>
      <DashboardResultList></DashboardResultList>
    </div>
  );
};

export default DashboardResults;
