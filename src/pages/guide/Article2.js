import React from "react";
import styled from 'styled-components';


function Article2() {
    return(
        <DivFee>
              <Title>커뮤니티 운영원칙</Title><br/>
              <Content>
              최종 갱신일 : 2017. 04. 03<br/><br/>
              텀블벅은 모든 분야에 걸친 창작 프로젝트들을 통해 창작자와 후원자가 신뢰로 연결되는 건강한 생태계를 조성하기 위해 노력하고 있습니다. 
              텀블벅 커뮤니티 팀은 독창적인 시도들이 주목받고, 참여자들의 상호신뢰와 안전이 보장된 커뮤니티를 만들기 위해 
              플랫폼에 등록되는 프로젝트를 비롯한 사용자 업로드 콘텐츠 전반을 관리하고 있습니다.

              텀블벅에 프로젝트, 업데이트, 댓글 등 콘텐츠를 게시할 때에는, 아래 커뮤니티 운영원칙을 준수해주세요. 
              운영원칙을 어기는 사용자에 대해 텀블벅은 경고 조치 또는 일시/영구적 계정 비활성화를 할 수 있습니다.<br/><br/><br/>

              <strong>광고나 도배를 할 수 없습니다.</strong><br/><br/>
              프로젝트와 무관한 광고성 콘텐츠를 게시하거나 광고성 메시지를 보낼 수 없습니다. 
              후원자들을 호도하는 사기성 또는 유인성 콘텐츠, 임의로 후원자 수나 후원 금액을 늘리기 위한 허위 후원 
              또는 대량 자동 활동 역시 제재 대상입니다.<br/><br/><br/>

              <strong>특정인 또는 소수자·약자를 비하할 수 없습니다.</strong><br/><br/>
              특정인을 지목·겨냥한 폭력적 표현이나 모욕을 게시할 수 없습니다. 
              특정인이 다른 텀블벅 사용자인 경우에는 더욱 엄격하게 제재됩니다.
              텀블벅은 사회적 소수자 또는 약자에 대한 폭력이나 혐오를 조장하거나 지나치게 대상화한 
              콘텐츠를 용인하지 않습니다. 성별, 성적 정체성 및 지향, 인종, 종교, 출신 지역, 장애, 나이 등을 
              이유로 특정 집단 또는 계층을 비하하는 의도가 있다고 판단되는 프로젝트 또는 콘텐츠는 엄격히 금지됩니다.<br/><br/><br/>

              <strong>외설적인 내용을 게시할 수 없습니다.</strong><br/><br/>
              텀블벅은 모든 연령대의 사용자가 이용하는 커뮤니티입니다. 
              따라서 방송통신심의위원회의 정보통신에 관한 심의규정과 인터넷내용등급서비스의 등급기준에 의거, 
              현행법상 미성년자에게 부적합한 콘텐츠는 업로드할 수 없습니다. 
              아동에 대한 성적 표현이나 강간·성적 폭력을 미화하는 표현은 더욱 엄격하게 금지됩니다.<br/><br/><br/>    

              <strong>타인, 다른 계정 또는 단체를 사칭할 수 없습니다.</strong><br/><br/>
              텀블벅은 개인과 개인이 후원자와 진행자 등의 자격으로 만나 신뢰를 바탕으로 관계를 맺는 플랫폼입니다. 
              다른 이용자나 단체(텀블벅 관계자 포함) 등을 사칭하여 콘텐츠를 게시하거나 메시지를 보내는 등의 행위는 이러한 신뢰를 심각하게 저해할 수 있기에 금지됩니다.
              <br/><br/><br/>

              <strong>지적 재산권, 상표권 및 개인정보 보호 권리를 침해할 수 없습니다.</strong><br/><br/>
              창작자를 위한 플랫폼인 텀블벅은 지적 재산권, 상표권 및 개인정보 보호 권리를 매우 중요하게 생각합니다. 텀블벅 커뮤니티 내에서 본인의 지적 재산권 또는 상표권이 침해되는 경험을 하신 경우, support@tumblbug.com을 통해 텀블벅 커뮤니티 팀에 제보해 주시기 바랍니다. 
              특정 프로젝트가 타인의 권리를 침해한다고 생각될 때에는, 프로젝트 문의하기 기능을 통해 해당 진행자에게 직접 이의를 제기할 수 있습니다.
            </Content>
            </DivFee>
    )
}

let DivFee = styled.div`
max-width : 1080px;
margin : auto;
margin-bottom : 150px;
padding : 0px 250px 0px 30px;
`;
let Div2 = styled.div`
border-left : 1px solid #f1f3f5;
padding : 0px 50px 0px 50px;
`;
let Title = styled.h2`
font-size : 35px;
text-align : left;

`;
let Date = styled.p`
margin-top : 20px;
margin-bottom : 150px;
font-size : 15px;
text-align : left;
`;
let Title2 = styled.div`
padding-left : 50px;
margin-left : -50px;
border-left : 2px solid #85af4b;
font-weight : bold;
font-size : 19px;
margin-top : 30px;
text-align : left;
`;
let Content = styled.div`
color : #757575;
margin-top : 20px;
font-size : 16px;
text-align : left;
line-height : 170%;
`;

export default Article2;