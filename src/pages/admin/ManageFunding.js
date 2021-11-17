import * as React from 'react';
import { useEffect, useMemo, useState } from "react";
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./AdminMain.css";
import { FcSalesPerformance } from "react-icons/fc";
import { inject, observer } from "mobx-react";
import FundingTable from './FundingTable';
import FundingTable_work from './FundingTable_work';

function ManageFunding(props) {

    const { fundingStore2 } = props;
    const { fundings, works  } = fundingStore2;

    //프로젝트 
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
      console.log("value 는>" , value)
    };

    useEffect(()=>{
        fundingStore2.fundingsRead2();
        fundingStore2.worksRead();
    },[fundingStore2]);

  

    const columns = useMemo(
        () => [
          {
            accessor: "funding_id",
            Header: "펀딩번호"
          },
          {
            accessor: "user_name",
            Header: "유저 이름"
          },
          {
            accessor: "user_email",
            Header: "유저 이메일"
          },
          {
            accessor: "work_no",
            Header: "작품 번호"
          },
          {
            accessor: "work_title",
            Header: "작품 제목"
          },
          {
            accessor: "funding_price",
            Header: "펀딩 금액"
          },
          {
            accessor: "funding_date",
            Header: "펀딩 일"
          }
        ],
        []
      );
    
      const data = fundings.map(function(data, i){
        return (
          data
        )
      })

      const columns_work = useMemo(
        () => [
          {accessor: "work_no",
            Header: "번호"},
          {accessor: "work_title",
            Header: "작품 제목"},
          // { accessor: "artist_id",
          //   Header: "작가 아이디" },
          {accessor: "artist_name",
            Header: "작가 이름"  },
          {accessor: "funding_startline",
            Header: "시작일" },
          {accessor: "funding_deadline",
            Header: "마감일" },
          { accessor: "funding_goal",
            Header: "목표 금액" },
          { accessor: "funding_now",
          Header: "현재 금액" },
          { accessor: "supporters",
          Header: "후원자 수" },
          { accessor: "funding_status",
          Header: "상태" }
        ],
        []
      );

      const data_work = works.map(function(data, i){
        return (
          data
        )
      })

  return (
    <div className="setting-margin-abox">
      <div className="setting-abox-1" >
        <div className="myicon-abox" style={{marginTop:'23px'}}>
            <FcSalesPerformance size="80" />
        </div>
        <div className="myname-abox">
          <h2>
            운영자 페이지
          </h2>
          <h4>펀딩 관리</h4>
        </div>
      </div>
      <div style={{borderBottom:'1px solid #e8e8e8'}}>
        <div className="tab-box">
          <AntTabs value={value} onChange={handleChange} aria-label="ant example">
            <AntTab label="프로젝트 관리"/>
            <AntTab label="펀딩 유저 관리"/>
          </AntTabs>
        </div>
      </div>
      <br />
      <br />
      <div className="setting-abox-1">
        { (value === 0 ) ? 
        <FundingTable_work columns={columns_work} data={data_work} />
        : <></>}
        { (value === 1 ) ? 
        <FundingTable columns={columns} data={data} />
        : <></>}
      </div>
      
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

export default inject("fundingStore2")(observer(ManageFunding));
