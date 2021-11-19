const {Kakao} = window;
    
    //카카오공유 시작 (detail 페이지)
    function shareKakao(e){
        e.preventDefault();
        
        return(
          Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
              title: localStorage.getItem('work_title'),
              description: '신인 아티스트를 후원하고 멋진 예술작품을 감상해보세요!',
              imageUrl:
                'http://drive.google.com/uc?export=view&id=1CD18Hi6nJE93Dg_Th9MrdSaV1MMrHGOk',
              link: {
                mobileWebUrl: 'http://localhost:3000/detail/'+localStorage.getItem('work_no'),
                webUrl: 'http://localhost:3000/detail/'+localStorage.getItem('work_no'),
              },
            },
            social: {
            },
            buttons: [
              {
                title: '웹으로 보기',
                link: {
                  mobileWebUrl: 'http://localhost:3000/detail/'+localStorage.getItem('work_no'),
                  webUrl: 'http://localhost:3000/detail/'+localStorage.getItem('work_no'),
                },
              },
              {
                title: '앱으로 보기',
                link: {
                  mobileWebUrl: 'http://localhost:3000/detail/'+localStorage.getItem('work_no'),
                  webUrl: 'http://localhost:3000/detail/'+localStorage.getItem('work_no'),
                },
              },
            ],
          })

        )}
            // templateId: 64332   // 카카오디벨로퍼 템플릿만들기에 있는이벤트번호 등록 
            // //https://developers.kakao.com/tool/template-builder/app/657097/template/64332/component/thl/0
          //})
        //)
      //}

      export default shareKakao;