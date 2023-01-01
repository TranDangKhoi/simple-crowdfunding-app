const DashboardTotalResults = () => {
  return (
    <div className="flex items-center justify-between p-3 bg-graySoft">
      <span className="text-sm font-medium underline text-text1 decoration-text3">
        See all 10,124 fundraisier
      </span>
      <button className="text-xl font-medium w-[72px] flex items-center justify-center h-[50px] px-3 py-6 rounded-xl text-red-500 bg-red-100">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default DashboardTotalResults;
