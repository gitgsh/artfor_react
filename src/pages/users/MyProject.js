import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from "react-router-dom";
import "./Settings.css";
import { BsGear } from "react-icons/bs";
import ProjectTabdiv from './MyProject/ProjectTabdiv';

function MyProject(props) {
  console.log(props);
  const key = props.match.params.key;
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);

  return (
    <div className="setting-margin-box">
      <div className="setting-box-1" >
        <div className="myicon-box">
            <img src="/mygray.png" width="100px" />
        </div>
        <div className="myname-box">
          <h2>
            
            {/* {window.localStorage.getItem('user_id').slice(1,-1)} <span style={{ fontSize: "25px" }}>님</span> */}
            {window.localStorage.getItem('user_id')} <span style={{ fontSize: "25px" }}>님</span>
          </h2>
        </div>
        <div style={{position:'absolute', zIndex:'1', left:'670px', top:'150px'}}>
          <Link to="/users/mysettings">
          <BsGear size="30" color="#505050"/>
          </Link>
        </div>
      </div>
      <div style={{borderBottom:'1px solid #e8e8e8'}}>
        <div className="tab-box">
          <AntTabs value={value} onChange={handleChange} aria-label="ant example">
            <AntTab label="후원한 프로젝트"/>
            <AntTab label="올린 프로젝트"/>
            <AntTab label="찜한 프로젝트"/>
          </AntTabs>
        </div>
      </div>
      <br />
      <br />
      <ProjectTabdiv value={value} setValue={setValue} />
    </div>
  );
}

const AntTabs = styled(Tabs)({
  // borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#323232',
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: '#a0a0a0',
  fontSize: '20px',
  fontFamily: [
    '"NanumSquareB"',
  ].join(','),
  '&:hover': {
    color: '#323232',
    fontFamily: "NanumSquareEB",
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#323232',
    fontFamily: "NanumSquareEB",
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

export default MyProject;
