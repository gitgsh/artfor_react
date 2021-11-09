import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import "./ListTabs.css";

function ListTabs(props) {

    // Guide 게시판 검색관련2
  const [searchKeyword, setSearchKeyword] = useState("");
  const [keyField, setKeyField] = useState("");

  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "searchKeyword") {
      setSearchKeyword(value);
    }
    if (name === "keyField") {
      setKeyField(value);
    }
  };

    if(props.value === 0) {
        return (
          <div>
              <div className="searchBox1">
          <GoSearch size='25' style={{ marginRight :'10px' }} />
          <input className="searchBox2" type="text" placeholder="검색어를 입력해주세요" name="searchKeyword" onChange={onChange} />    
      </div>

              {/* 검색 */}
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
        )
      } else if(props.value === 1) {
        return (
            <div>
                <div className="searchBox1">
                    <GoSearch size='25' style={{ marginRight :'10px' }} />
                    <input className="searchBox2" type="text" placeholder="검색어를 입력해주세요" name="searchKeyword" onChange={onChange} />    
                </div>

              {props.data
              .filter((d) => {
                if ((d.g_category === "일반") && (searchKeyword.length === 0)) {
                  return d;
                } else if (
                    (d.g_category === "일반") && (d.g_writer.toString().includes(searchKeyword))) {
                      return d;
                  } else if (
                    (d.g_category === "일반") && (d.g_title.toString().includes(searchKeyword))) {
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
        )
      } else if(props.value === 2) {
        return(
            <div>
                <div className="searchBox1">
                    <GoSearch size='25' style={{ marginRight :'10px' }} />
                    <input className="searchBox2" type="text" placeholder="검색어를 입력해주세요" name="searchKeyword" onChange={onChange} />    
                </div>

                {props.data
                    .filter((d) => {
                        if ((d.g_category === "후원자 질문") && (searchKeyword.length === 0)) {
                        return d;
                        } else if (
                            (d.g_category === "후원자 질문") && (d.g_writer.toString().includes(searchKeyword))) {
                              return d;
                          } else if (
                            (d.g_category === "후원자 질문") && (d.g_title.toString().includes(searchKeyword))) {
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
        )
      } else if(props.value === 3) {
        return(
            <div>
                <div className="searchBox1">
                    <GoSearch size='25' style={{ marginRight :'10px' }} />
                    <input className="searchBox2" type="text" placeholder="검색어를 입력해주세요" name="searchKeyword" onChange={onChange} />    
                </div>

                {props.data
                    .filter((d) => {
                        if ((d.g_category === "프로젝트 올리기") && (searchKeyword.length === 0)) {
                        return d;
                        } else if (
                            (d.g_category === "프로젝트 올리기") && (d.g_writer.toString().includes(searchKeyword))) {
                              return d;
                          } else if (
                            (d.g_category === "프로젝트 올리기") && (d.g_title.toString().includes(searchKeyword))) {
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
        )
        } else if(props.value === 4) {
            return(
                <div>
                    <div className="searchBox1">
                        <GoSearch size='25' style={{ marginRight :'10px' }} />
                        <input className="searchBox2" type="text" placeholder="검색어를 입력해주세요" name="searchKeyword" onChange={onChange} />    
                    </div>
    
                    {props.data
                        .filter((d) => {
                            if ((d.g_category === "시작하고 알리기") && (searchKeyword.length === 0)) {
                            return d;
                            } else if (
                                (d.g_category === "시작하고 알리기") && (d.g_writer.toString().includes(searchKeyword))) {
                                  return d;
                              } else if (
                                (d.g_category === "시작하고 알리기") && (d.g_title.toString().includes(searchKeyword))) {
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
            )
            }
    };

  export default ListTabs;