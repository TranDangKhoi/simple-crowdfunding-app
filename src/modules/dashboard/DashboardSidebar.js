import React from "react";
import { NavLink } from "react-router-dom";

import DashboardIcon from "components/icon/DashboardIcon";
import { CampaignIcon, PaymentIcon, ProfileIcon } from "components/icon";
import DarkLightIcon from "components/icon/DarkLightIcon";
import SignOutIcon from "components/icon/SignOutIcon";

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
    url: "#",
  },
  {
    icon: <SignOutIcon></SignOutIcon>,
    title: "Log out",
    url: "/sign-in",
    onclick: () => {},
  },
  {
    icon: <DarkLightIcon></DarkLightIcon>,
    title: "Light/Dark",
    url: "#",
    onClick: () => {},
  },
];
const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] md:h-[673px] px-[14px] py-10 shadow-[10px_10px_20px_rgba(218,_213,_213,_0.3)] rounded-3xl bg-white flex flex-col md:gap-y-[30px]">
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          className="flex text-text3 md:rounded-3xl md:w-12 md:h-12 items-center md:justify-center p-[2px] gap-x-5 last-of-type:mt-auto last:bg-white last:shadow-softShadow last:rounded-full"
          key={link.title}
        >
          <span>{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
