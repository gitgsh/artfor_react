import { inject, observer } from "mobx-react";
import { useEffect } from "react";

import { Link, Route } from "react-router-dom";
import React, { Component } from "react";
// import Slider from "react-slick";
import { Card, CardGroup } from "react-bootstrap";
import Detail from '../detail/Detail.js'
import "./Home.css";

// function HomeSlider(props) {
//   const { mainStore } = props;
//   const { works, work } = mainStore;
//   useEffect(() => {
//     mainStore.worksRead();
//   }, [mainStore]);

//   function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "black" }}
//         onClick={onClick}
//       />
//     );
//   }

//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "black" }}
//         onClick={onClick}
//       />
//     );
//   }

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     autoplay: true,
//     autoplaySpeed: 800,
//     pauseOnHover: true,
//   };

//   return (
//     <div>
//       <div className="homeSlider">
//         <div>
//           <h2></h2>
//           <Slider {...settings}>
//             <div>
//               <h3>
//                 1<img className="slideImg" src="/slide01.jpg" />
//               </h3>
//             </div>
//             <div>
//               <h3>
//                 2<img className="slideImg" src="/slide02.jpg" />
//               </h3>
//             </div>
//             <div>
//               <h3>
//                 3<img className="slideImg" src="/slide03.jpg" />
//               </h3>
//             </div>
//             <div>
//               <h3>
//                 4<img className="slideImg" src="/slide04.jpg" />
//               </h3>
//             </div>
//             <div>
//               <h3>
//                 5<img className="slideImg" src="/slide05.jpg" />
//               </h3>
//             </div>
//             <div>
//               <h3>
//                 6<img className="slideImg" src="/slide06.jpg" />
//               </h3>
//             </div>
//           </Slider>
//           </div>
//       </div>

function HomeList(){
    return(
        
<div className="main_card">
<p className="main_home">주목할 만한 프로젝트</p>

<CardGroup>
<Card className="card_Home">
<Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
style={{width:'250px', borderRadius: 15, overflow: 'hidden' }}/></Link>
<Card.Body className="cardbody_Home">
<Card.Title className="cardtitle_Home">공예 | 김지민</Card.Title>
<Card.Text className="cardtext_Home">
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
<Card className="card_Home">
<Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
style={{width:'250px', borderRadius: 15, overflow: 'hidden' }}/></Link>
<Card.Body className="cardbody_Home">
<Card.Title className="cardtitle_Home">공예 | 김지민</Card.Title>
<Card.Text className="cardtext_Home">
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
<Card className="card_Home">
<Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
style={{width:'250px', borderRadius: 15, overflow: 'hidden' }}/></Link>
<Card.Body className="cardbody_Home">
<Card.Title className="cardtitle_Home">공예 | 김지민</Card.Title>
<Card.Text className="cardtext_Home">
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
<Card className="card_Home">
<Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
style={{width:'250px', borderRadius: 15, overflow: 'hidden' }}/></Link>
<Card.Body className="cardbody_Home">
<Card.Title className="cardtitle_Home">공예 | 김지민</Card.Title>
<Card.Text className="cardtext_Home">
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
</CardGroup>



<br/><br/><br/>
<p className="main_home">공개예정 프로젝트</p>


<CardGroup>
<Card className="card_Home">
<Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
style={{width:'250px', borderRadius: 15, overflow: 'hidden' }}/></Link>
<Card.Body className="cardbody_Home">
<Card.Title className="cardtitle_Home">공예 | 김지민</Card.Title>
<Card.Text className="cardtext_Home">
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
<Card className="card_Home">
<Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
style={{width:'250px', borderRadius: 15, overflow: 'hidden' }}/></Link>
<Card.Body className="cardbody_Home">
<Card.Title className="cardtitle_Home">공예 | 김지민</Card.Title>
<Card.Text className="cardtext_Home">
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
<Card className="card_Home">
<Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
style={{width:'250px', borderRadius: 15, overflow: 'hidden' }}/></Link>
<Card.Body className="cardbody_Home">
<Card.Title className="cardtitle_Home">공예 | 김지민</Card.Title>
<Card.Text className="cardtext_Home">
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
<Card className="card_Home">
<Link to={"/detail"}><Card.Img variant="top" src="/main1.jpeg"
style={{width:'250px', borderRadius: 15, overflow: 'hidden' }}/></Link>
<Card.Body className="cardbody_Home">
<Card.Title className="cardtitle_Home">공예 | 김지민</Card.Title>
<Card.Text className="cardtext_Home">
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
</CardGroup>


</div>

)}

<Route path="/detail">
<div>detail 페이지 ... </div>

</Route>

export default inject("mainStore")(observer(HomeList));