import React from 'react';
import {shareKakao} from './shareKakao';

function shareKakaoResult({plantData}) {
    const onKakaoClick = () => {
    const {name, testDescription, imagePath} = plantData;
    shareKakao(`${testDescription}, ${name}`, imagePath);
  };
  

  return (
    <div>
      <button onClick={onKakaoClick}>
        카카오톡으로 공유하기
      </button>
    </div>
  );
};

export default shareKakaoResult;