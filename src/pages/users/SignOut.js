import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./Settings.css";
import SettingsTabdiv from './MySettings/SettingsTabdiv';

function SignOut(props) {
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
          <h2>회원 탈퇴</h2>
        </div>
      </div>
      <div style={{borderBottom:'1px solid #e8e8e8', marginTop:'135px'}}>
        {/* <div className="tab-box">
          <AntTabs value={value} onChange={handleChange} aria-label="ant example">
            <AntTab label="계정"/>
          </AntTabs>
        </div> */}
      </div>
      <br />
      <SettingsTabdiv value={value} setValue={setValue} />
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

export default SignOut;
