import { StarIcon } from "components/icon";
import { defaultAvatar } from "constants/global";

const CampaignViewAuthor = () => {
  return (
    <div className="flex items-center mb-8 gap-x-5">
      <img
        src={defaultAvatar}
        className="w-[60px] h-[60px] object-cover rounded-full"
        alt=""
      />
      <div className="flex flex-col flex-1 gap-y-1">
        <div className="flex items-center gap-x-2">
          <h3 className="text-lg font-medium">Saiful Islam</h3>
          <div className="flex items-center text-orange-400">
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <StarIcon key={index}></StarIcon>
              ))}
          </div>
        </div>
        <div className="flex items-center text-sm gap-x-2 text-text3">
          <strong className="text-sm font-semibold text-primary">
            02 Campaign
          </strong>
          <span className="w-[6px] h-[6px] rounded-full bg-text3"></span>
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>
    </div>
  );
};

export default CampaignViewAuthor;
