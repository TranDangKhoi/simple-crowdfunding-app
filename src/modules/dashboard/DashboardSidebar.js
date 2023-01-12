import { NavLink } from "react-router-dom";

import { CampaignIcon, PaymentIcon, ProfileIcon } from "components/icon";
import DarkLightIcon from "components/icon/DarkLightIcon";
import DashboardIcon from "components/icon/DashboardIcon";
import SignOutIcon from "components/icon/SignOutIcon";
import { useDispatch } from "react-redux";
import { authLogOut } from "store/auth/auth-slice";

const sidebarLinks = [
  {
    icon: <DashboardIcon></DashboardIcon>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <CampaignIcon></CampaignIcon>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <PaymentIcon></PaymentIcon>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <ProfileIcon></ProfileIcon>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <SignOutIcon></SignOutIcon>,
    title: "Log out",
    url: "/logout",
  },
  {
    icon: <DarkLightIcon></DarkLightIcon>,
    title: "Light/Dark",
    url: "/theme",
    onClick: () => {},
  },
];
const DashboardSidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="md:w-[76px] md:h-[673px] px-[14px] py-10 shadow-[10px_10px_20px_rgba(218,_213,_213,_0.3)] dark:shadow-sm rounded-3xl dark:bg-darkSecondary bg-white flex flex-col md:gap-y-[30px]">
      {sidebarLinks.map((link) => {
        if (link.url === "/logout") {
          return (
            <button
              className="flex md:rounded-xl md:w-12 md:h-12 items-center md:justify-center p-[2px] gap-x-5  dark:last:bg-darkSecondary last:bg-white last:shadow-softShadow text-text3"
              onClick={() => dispatch(authLogOut())}
              key={link.url}
            >
              <span>{link.icon}</span>
              <span className="md:hidden">{link.title}</span>
            </button>
          );
        }
        return (
          <NavLink
            to={link.url}
            className={({ isActive }) =>
              isActive
                ? "flex md:rounded-xl md:w-12 md:h-12 items-center md:justify-center p-[2px] gap-x-5 last-of-type:mt-auto dark:last:bg-darkSecondary last:bg-white last:shadow-softShadow text-primary bg-opacity-10 bg-primary"
                : "flex md:rounded-xl md:w-12 md:h-12 items-center md:justify-center p-[2px] gap-x-5 last-of-type:mt-auto dark:last:bg-darkSecondary last:bg-white last:shadow-softShadow text-text3"
            }
            key={link.title}
          >
            <span>{link.icon}</span>
            <span className="md:hidden">{link.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default DashboardSidebar;
