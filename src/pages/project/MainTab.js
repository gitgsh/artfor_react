import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";

import "./MainTab.css";
import ProjectPlan from "./ProjectPlan";
import ProjectFundingPlan from "./ProjectFundingPlan";

const AntTabs = styled(Tabs)({
  maxWidth: "1080px",
  width: "100%",
  height: "100%",
  margin: "0 auto",
  "& .MuiTabs-indicator": {
    backgroundColor: "#F86453",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    //ANTTAB fontsize
    fontSize: "15px",
    marginRight: theme.spacing(1),
    color: "#bebebe",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#282828",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#282828",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export default function PlanTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  const [clickValue, setClickValue] = useState(<ProjectFundingPlan />);

  return (
    <div className="TabsAll_Project2">
      
        <Box sx={{ bgcolor: "#fff", height: "100%" }}>
     
          <div className="content_wrap" >
            <div className="pmImage"></div>
            <div className="pmTitle">wlgp****의 프로젝트 </div>
          </div>

          <AntTabs
            value={value}
            onChange={handleChange}
            aria-label="ant example"
            style={{ height: "100%" }}
          >
            <AntTab
              label="프로젝트 기획"
              style={{ fontFamily: "NanumSquareB" }}
              onClick={() => {
                setClickValue(<ProjectFundingPlan />);
              }}
            />
            <AntTab
              label="공개 예정"
              style={{ fontFamily: "NanumSquareB" }}
              onClick={() => {
                setClickValue(<ProjectPlan />);
              }}
            />
          </AntTabs>
        </Box>
        {clickValue}
      </div>
  );
}
