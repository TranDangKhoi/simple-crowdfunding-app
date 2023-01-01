import DashboardRelatedResults from "./DashboardRelatedList";
import DashboardResultList from "./DashboardResultList";
import DashboardTotalResults from "./DashboardTotalResults";

const DashboardResults = () => {
  return (
    <div className="lg:w-[843px] w-full z-50 absolute top-full left-0 bg-white translate-y-5 rounded-2xl overflow-hidden">
      <div className="p-6">
        <DashboardTotalResults></DashboardTotalResults>
        <DashboardResultList></DashboardResultList>
        <DashboardRelatedResults></DashboardRelatedResults>
      </div>
    </div>
  );
};

export default DashboardResults;
