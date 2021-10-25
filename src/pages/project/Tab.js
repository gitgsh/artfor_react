import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { maxWidth } from "@mui/system";
import "./Tab.css";

const AntTabs = styled(Tabs)({
  maxWidth: "1080px",
  width: "100%",
  margin: "0 auto",

  "& .MuiTabs-indicator": {
    backgroundColor: "#282828",
  },
  borderBottom: "1px solid #e8e8e8",
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

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="projectTitle">프로젝트 기획</div>
      <Box sx={{ width: "100%", margin: "0 auto", maxWidth: "1080px" }}>
        <Box sx={{ bgcolor: "#fff" }}>
          <AntTabs
            value={value}
            onChange={handleChange}
            aria-label="ant example"
          >
            <AntTab label="펀딩 계획" />
            <AntTab label="프로젝트 계획" />
            <AntTab label="신뢰와 안전" />
          </AntTabs>

          <Box className="box1" sx={{ bgcolor: "black" }}>
            <div>dkssud</div>
            <Box sx={{ p: 50 }} />
          </Box>
        </Box>
        {/* #fff */}
      </Box>
    </div>
  );
}
