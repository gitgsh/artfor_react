import * as React from 'react';
import { useEffect, useMemo } from "react";
import "./AdminMain.css";
import { FcSalesPerformance } from "react-icons/fc";
import { inject, observer } from "mobx-react";
import FundingTable from './FundingTable';

function ManageFunding(props) {

    const { fundingStore2 } = props;
    const { fundings, funding  } = fundingStore2;

    useEffect(()=>{
        fundingStore2.fundingsRead2();
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
          <h4>후원 관리</h4>
        </div>
      </div>
        <div style={{clear:'both', borderBottom:'1px solid #e8e8e8'}} />
      <div className="setting-abox-1">
        <FundingTable columns={columns} data={data} />
      </div>
      
    </div>
  );
}

export default inject("fundingStore2")(observer(ManageFunding));
