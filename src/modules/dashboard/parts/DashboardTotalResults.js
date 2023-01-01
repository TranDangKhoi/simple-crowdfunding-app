const DashboardTotalResults = () => {
  return (
    <div className="flex items-center justify-between bg-graySoft">
      <span className="text-sm font-medium underline text-text1 decoration-text3">
        See all 10,124 fundraisier
      </span>
      <button className="text-lg font-medium w-[62px] flex items-center justify-center h-[50px] rounded-xl text-red-500 bg-red-100">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default DashboardTotalResults;
