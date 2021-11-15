import React from "react";
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ListTabs from "./ListTabs";
import ArticlesTabs from "./ArticlesTabs";
import "./G_Articles.css";



function G_Articles() {

      //Tab 관련
        const [value, setValue] = React.useState(0);
        const handleChange = (event, newValue) => {
            setValue(newValue);
        };

    return (
            <div className="div1">
                <div>
                    <div className="div2">
                    <AntTabs value={value} onChange={handleChange} aria-label="ant example">

                        <AntTab label="개인정보 처리방침"/>
                        <AntTab label="커뮤니티 운영원칙"/>
                        <AntTab label="프로젝트 심사 기준"/>
                        <AntTab label="프로젝트 선정 기준"/>
                    </AntTabs>
                    </div>
                </div>

                <br />
                <br />
                <ArticlesTabs value={value} setValue={setValue} />
            </div>
    )

}


// Tab styled component
const AntTabs = styled(Tabs)({
    transform: "skew(-0.1deg)",
    // borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
      backgroundColor: 'white',      
    },
  });
  
  const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    transform: "skew(-0.1deg)",
    textTransform: 'none',
    minWidth: 150,
    [theme.breakpoints.up('sm')]: {
      minWidth: 150,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: '#8bc34a',
    fontSize: '16px',
    fontFamily: [
      '"NanumSquareB"',
    ].join(','),
    '&:hover': {
      color: '#8bc34a',
      fontFamily: "NanumSquareEB",
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#33691e',
      fontFamily: "NanumSquareEB",
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#8bc34a',
    },
  }));

export default G_Articles;