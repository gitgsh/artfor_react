const {Kakao} = window;
    
    //카카오공유 시작 (detail 페이지)
    function shareKakao(e){
        e.preventDefault();
        
        return(
          Kakao.Link.sendCustom({
            templateId: 64332   // 카카오디벨로퍼 템플릿만들기에 있는이벤트번호 등록 
            //https://developers.kakao.com/tool/template-builder/app/657097/template/64332/component/thl/0
          })
        )
      }

      export default shareKakao;