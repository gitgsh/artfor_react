import React from 'react';
import { useForm } from 'react-hook-form';

export default function Agree() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    
    return (
        <div className="p_c_cb">
              <input type="checkbox" id="pcheck1" />
              <label id="pcheck1" htmlFor="pcheck1"></label>&nbsp;
              <span> 대표 창장자는 <strong>만 19세 이상의 성인</strong>이여야 합니다</span><br /><br />
        
              <input type="checkbox" id="pcheck2"  />
              <label id="pcheck2" htmlFor="pcheck2"></label>&nbsp;
              <span> artfor에서 필요 시 연락 드릴 수 있도록 <strong>본인 명의의 휴대폰 번호</strong>와 <strong>이메일 주소</strong>가 필요합니다.</span><br /><br />

              <input type="checkbox" id="pcheck3"  />
              <label id="pcheck3" htmlFor="pcheck3"></label>&nbsp;
              <span> 펀딩 성공 후의 정산을 위해 <strong>신분증 또는 사업자 등록증, 국내 은행 계좌</strong>를 준비해주세요.</span><br />
            </div>
    );
  }