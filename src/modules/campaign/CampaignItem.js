import { FolderIcon } from "components/icon";
import React from "react";
import { Link } from "react-router-dom";
import CampaignAnalytics from "./CampaignAnalytics";
import CampaignAuthor from "./CampaignAuthor";

const CampaignItem = () => {
  return (
    <div className="overflow-hidden bg-white shadow-softShadow rounded-2xl">
      <div className="h-[158px]">
        <img
          src="https://images.unsplash.com/photo-1672339040081-7c139055ada6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Campaign"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="px-5 py-4">
        <Link to="/" className="flex items-baseline mb-4 text-text3 gap-x-3">
          <FolderIcon></FolderIcon>
          <span className="text-sm font-medium text-text3">Education</span>
        </Link>
        <h3 className="mb-[5px] font-semibold text-text1">
          Powered Kits Learning Boxes
        </h3>
        <p className="mb-4 text-sm text-text3">
          Fun, durable and reusable boxes with eco-friendly options.
        </p>
        <CampaignAnalytics></CampaignAnalytics>
        <CampaignAuthor></CampaignAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
