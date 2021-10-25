import React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CustomizedTabs from "./Tab";

function FundingPlan(props) {
  CustomizedTabs();
  return (
    <div className="body">
      <CustomizedTabs />
    </div>
  );
}

export default FundingPlan;
