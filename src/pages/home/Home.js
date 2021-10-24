import { inject, observer } from "mobx-react";
import { useEffect } from "react";

import { Link, Route } from "react-router-dom";
import React, { Component } from "react";
import Slider from "react-slick";
import { Card, CardGroup } from "react-bootstrap";
import Detail from '../detail/Detail.js'
import "./Home.css";
//editor

// function Home() {}export default inject("mainStore")(observer(Home));
function HomeSlider(props) {
  const { mainStore } = props;
  const { works, work } = mainStore;
  useEffect(() => {
    mainStore.worksRead();
  }, [mainStore]);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 800,
    pauseOnHover: true,
  };

  return (
    <div>
      <div className="homeSlider">
        <div>
          <h2></h2>
          <Slider {...settings}>
            <div>
              <h3>
                1<img className="slideImg" src="/slide01.jpg" />
              </h3>
            </div>
            <div>
              <h3>
                2<img className="slideImg" src="/slide02.jpg" />
              </h3>
            </div>
            <div>
              <h3>
                3<img className="slideImg" src="/slide03.jpg" />
              </h3>
            </div>
            <div>
              <h3>
                4<img className="slideImg" src="/slide04.jpg" />
              </h3>
            </div>
            <div>
              <h3>
                5<img className="slideImg" src="/slide05.jpg" />
              </h3>
            </div>
            <div>
              <h3>
                6<img className="slideImg" src="/slide06.jpg" />
              </h3>
            </div>
          </Slider>
          </div>
      </div>
      <p className="main">주목할 만한 프로젝트</p>

    <div className="CardHead">
    <CardGroup>
  <Card className="card">
    <Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
    style={{width:'270px', borderRadius: 15, overflow: 'hidden' }}/></Link>
    <Card.Body>
      <Card.Title className="cardtitle">공예 | 김지민</Card.Title>
      <Card.Text className="cardtext">
      <Link to={"/detail"}>당신의 바다꽃이 될래요. 탄생화 자개 DIY키트</Link>
      </Card.Text>
      <div className="cardfooter">
        <p>1858% 달성</p>
      </div>
    </Card.Body>
    {/* <Card.Footer className="cardfooter">
      <small className="text-muted" id="text-muted">1858% 달성</small>
    </Card.Footer> */}
  </Card>
  <Card>
  <Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
    style={{width:'270px', borderRadius: 15, overflow: 'hidden' }}/></Link>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
  <Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
    style={{width:'270px', borderRadius: 15, overflow: 'hidden' }}/></Link>
    <Card.Body>
      <img src="./"/>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
    style={{width:'270px', borderRadius: 15, overflow: 'hidden' }}/></Link>
    <Card.Body>
      <img src="./"/>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>

<CardGroup>
  <Card className="card">
    <Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
    style={{width:'270px', borderRadius: 15, overflow: 'hidden' }}/></Link>
    <Card.Body>
      <Card.Title className="cardtitle">공예 | 김지민</Card.Title>
      <Card.Text className="cardtext">
      <Link to={"/detail"}>당신의 바다꽃이 될래요. 탄생화 자개 DIY키트</Link>
      </Card.Text>
      <div className="cardfooter">
        <p>1858% 달성</p>
      </div>
    </Card.Body>
    {/* <Card.Footer className="cardfooter">
      <small className="text-muted" id="text-muted">1858% 달성</small>
    </Card.Footer> */}
  </Card>
  <Card>
  <Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
    style={{width:'270px', borderRadius: 15, overflow: 'hidden' }}/></Link>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
    style={{width:'270px', borderRadius: 15, overflow: 'hidden' }}/></Link>
    <Card.Body>
      <img src="./"/>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
    style={{width:'270px', borderRadius: 15, overflow: 'hidden' }}/></Link>
    <Card.Body>
      <img src="./"/>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>

    </div>
    <br/><br/><br/>
    <p className="main">공개예정 프로젝트</p>

    <div className="CardHead">
    <CardGroup>
  <Card className="card">
    <Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
    style={{width:'270px', borderRadius: 15, overflow: 'hidden' }}/></Link>
    <Card.Body>
      <Card.Title className="cardtitle">공예 | 김지민</Card.Title>
      <Card.Text className="cardtext">
      <Link to={"/detail"}>당신의 바다꽃이 될래요. 탄생화 자개 DIY키트</Link>
      </Card.Text>
      <div className="cardfooter">
        <p>1858% 달성</p>
      </div>
    </Card.Body>
    {/* <Card.Footer className="cardfooter">
      <small className="text-muted" id="text-muted">1858% 달성</small>
    </Card.Footer> */}
  </Card>
  <Card>
  <Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
    style={{width:'270px', borderRadius: 15, overflow: 'hidden' }}/></Link>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
    style={{width:'270px', borderRadius: 15, overflow: 'hidden' }}/></Link>
    <Card.Body>
      <img src="./"/>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
    style={{width:'270px', borderRadius: 15, overflow: 'hidden' }}/></Link>
    <Card.Body>
      <img src="./"/>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>


    </div>
{/* ============route.........================*/}
<Route path="/detail">
    <div>detail 페이지 ... </div>
    
</Route>

    </div>
  )
}


export default inject("mainStore")(observer(HomeSlider));
