import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import G_Detail from "./G_Detail";
import "./list.css";
import { FcOnlineSupport } from "react-icons/fc";
import { GoSearch } from "react-icons/go";
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ListTabs from "./ListTabs";


function List(props) {

  // 운영자만 글쓰기 가능
  const token = localStorage.getItem('token');
  const user_name = localStorage.getItem('name');

  console.log('토큰 : ', token);
  console.log('유저 권한 : ', user_name);

  //Tab 관련
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Guide 게시판 검색관련
  const [searchKeyword, setSearchKeyword] = useState("");
  const [keyField, setKeyField] = useState("");

  // const [list, setList] = useState([""]);
  // console.log("밖 props.data >>>>", props.data);


  useEffect(() => {
    // console.log(">>> G_list로 들어옴");

    // componentDidMount
    // 컴포넌트가 화면에 나타날 때 실행하고 싶은 함수를 이 곳에 넣는다.

    axios
      .get("http://localhost:8004/app/guide/list.do")
      .then((result) => {
        // console.log("ajax 요청 성공함");
        // console.log("result >>> ", result);

        let dataA = result.data.list2;
        // console.log("dataA >>>>>>>>>>>", dataA);
        let dataACopy = [...dataA];
        props.setData(dataACopy);
        // console.log("props.data >>> ", props.data)
        // setList([...dataA]);
        // console.log("list >>>>",list);
        
      })
      .catch((err) => {
        // console.log("err >>> ", err);
        // console.log("ajax 요청 실패함", err);
      });
  }, []);

  // const onChange = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;

  //   if (name === "searchKeyword") {
  //     setSearchKeyword(value);
  //   }
  //   if (name === "keyField") {
  //     setKeyField(value);
  //   }
  // };

  return (
    <div className="container-guide">
      <Link to="/guide/G_List">
      <h3 className="page-name">
        <FcOnlineSupport size='40' style={{ marginRight: '5px' }}/>
        artfor 헬프센터
        <FcOnlineSupport size='40' style={{ marginLeft: '5px' }}/>
      </h3>
      </Link>

      <div style={{ fontSize : '14px', color : '#a8a8a8', marginBottom: '30px' }}>궁금한 점을 검색해보세요!</div>
      
      {/* <div className="div-searchBox">
          <GoSearch size='25' style={{ marginRight :'10px' }} />
          <input className="searchBox" type="text" placeholder="검색어를 입력해주세요" name="searchKeyword" onChange={onChange} />    
      </div> */}

<div style={{ borderBottom : '1px solid #e8e8e8', marginBottom : '30px' }}>
      <div style={{borderBottom:'1px solid #e8e8e8', borderTop:'1px solid #e8e8e8', paddingTop: '10px'}}>
        <div className="tab-box">
          <AntTabs value={value} onChange={handleChange} aria-label="ant example">
            <AntTab label="전체"/>
            <AntTab label="아트포 일반"/>
            <AntTab label="후원자 질문"/>
            <AntTab label="프로젝트 올리기"/>
            <AntTab label="시작하고 알리기"/>
          </AntTabs>
        </div>
      </div>

      <br />
      <br />
      <ListTabs value={value} setValue={setValue} data={props.data} setData={props.setData} 
      searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} 
      keyField={keyField} setKeyField={setKeyField} />
</div>

      {/* <div className="div-guide">
          <div className="div-guide-list-1">
            <div>
            props.data로 db 데이터 가져오기 (db)

              검색 
              {props.data
              .filter((d) => {

                if (searchKeyword.length === 0) {
                  return d;
                } else if (
                  d.g_writer.toString().includes(searchKeyword)) {
                    return d;
                } else if (
                  d.g_title.toString().includes(searchKeyword)) {
                    return d;
                  }
              })

              .map(function (d, i) {
                return (
                  <div key={i}>
                      <Link to={`/guide/G_Detail/${d.g_no}`}><h3>{d.g_title}</h3></Link>
                      <p style={{ marginBottom : '20px' }}>{d.g_day} 발행</p>
                    </div>
                );
              })
              }

            </div>
          </div>
       </div> */}

       {/* user_name이 관리자여야 글쓰기 가능 */}
        {
          (user_name == '관리자' && token)
          ? <div>
          <Link to="/guide/G_Input">
            <Button className="guide-writeBtn" variant="dark">
              글쓰기
            </Button>
          </Link>
          </div>
          : <div></div>
        }
        
      </div>
  );
}

// Tab styled componentff
const AntTabs = styled(Tabs)({
  // borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#323232',
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 200,
  [theme.breakpoints.up('sm')]: {
    minWidth: 200,
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

export default List;