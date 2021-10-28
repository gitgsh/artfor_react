const {Kakao} = window;

export const shareKakao = (title='', imageUrl='') => {
  const sharedUrl = `${window.location.href}?shared=true`;
  
  Kakao.Link.sendDefault({
    objectType: 'feed', // 메시지 형식 : 피드 타입
    content: {
      title: '개성 넘치고 귀여운 인싸 친구, 아이비',
      description: '나와 잘 맞는 식물 친구는?',
      imageUrl: 'https://file.thisisgame.com/upload/nboard/news/2018/02/12/s_20180212141107_7765.png', // 메인으로 보여질 이미지 주소
      link: {
        webUrl: sharedUrl, //공유할 링크 주소
        mobileWebUrl: sharedUrl, //공유할 링크 주소
      },
    },
    buttons: [
      {
        title: '나도 테스트 해보기', // 버튼 이름
        link: {
          webUrl: sharedUrl, //공유할링크주소
          mobileWebUrl: sharedUrl,//공유할링크주소
        },
      },
    ],
  });
};