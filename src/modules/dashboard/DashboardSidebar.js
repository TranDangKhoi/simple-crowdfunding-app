import React from "react";
import { NavLink } from "react-router-dom";

import DashboardIcon from "components/icon/DashboardIcon";
import { CampaignIcon, PaymentIcon, ProfileIcon } from "components/icon";
import DarkLightIcon from "components/icon/DarkLightIcon";

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
    icon: <DarkLightIcon></DarkLightIcon>,
    title: "Light/Dark",
  },
];
const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] md:h-[733px] px-[14px] py-10 shadow-[10px_10px_20px_rgba(218,_213,_213,_0.3)] rounded-3xl bg-white flex flex-col md:gap-y-[30px]">
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          className="flex text-text3 items-center p-[2px] gap-x-5 last-of-type:mt-auto"
          key={link.title}
        >
          <span className="md:w-12 md:h-12 md:justify-center md:rounded-3xl">
            {link.icon}
          </span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
