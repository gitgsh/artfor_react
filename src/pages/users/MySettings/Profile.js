import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import '../Settings.css'
import './Profile.css'
import styled from 'styled-components';
import { inject, observer } from "mobx-react";
import NameModal from './NameModal';
import PasswordModal from './PasswordModal';
import EmailModal from './EmailModal';
import PhoneModal from './PhoneModal';
import { FcCheckmark } from "react-icons/fc";
import SignoutModal from './SignoutModal';
import PhotoModal from './PhotoModal';

function Profile(props) {

  const { membersStore } = props;
  const { members, member } = membersStore;

  let [nameModal, setNameModal] = useState(false);
  let [pwModal, setPWModal] = useState(false);
  let [emailModal, setEmailModal] = useState(false);
  let [phoneModal, setPhoneModal] = useState(false);
  let [photoModal, setPhotoModal] = useState(false);
  let [signoutModal, setSignoutModal] = useState(false);
  let [photostatus, setPhotostatus] = useState(false);
  const [attachment, setAttachment] = useState("");
  
  const [photo, setPhoto] = useState(member.user_photo);

  function modalSwitch(e) {
    let value = e.target.value;
    if(value === 'name') {
      setNameModal(!nameModal);
    } else if (value === 'pw'){
      setPWModal(!pwModal);
    } else if (value === 'email') {
      setEmailModal(!emailModal);
    } else if (value === 'phone') {
      setPhoneModal(!phoneModal);
    } else if (value === 'photo') {
      setPhotoModal(!photoModal);
    } else if (value === 'signout') {
      setSignoutModal(!signoutModal);
    }
  }

  const textValue = (value) => {
    setNameModal(value);
  }
  const textEValue = (value) => {
    setEmailModal(value);
  }
  const textPValue = (value) => {
    setPhoneModal(value);
  }

  useEffect(()=>{
    member.user_name = window.localStorage.getItem('name');
    member.user_email = window.localStorage.getItem('email');
    member.user_phone = window.localStorage.getItem('phone');
    member.user_photo = window.localStorage.getItem('photo');
  }, [membersStore])

  const updatephoto =(value) => {
    console.log("value????",value);
    member.user_photo = value;
    console.log("???????????? member????????????", member.user_photo);
    localStorage.setItem('photo', member.user_photo);
  }

  return (
    <div className="setting-box2">
        <div className="setting-box1-1">
          <div className="left-box">
            <div>
              <div style={{display: "flex", justifyContent: "space-between", marginBottom: "30px"}}>
                <h5 style={{ fontWeight: "bold", fontSize: "17px" }}>??????</h5>
                  {
                    nameModal === true
                    ? <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="name">??????</button>
                    : <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="name">??????</button>
                  }
              </div>
              <div>
              {
                nameModal === true
                  ? <div><NameModal textValue={textValue}></NameModal></div>
                  : <p style={{transform: "skew(-0.1deg)"}}>{member.user_name}</p>
              }
              </div>
              <hr style={{marginBottom:'20px'}} />
            </div>

            <div>
              <div style={{display: "flex", justifyContent: "space-between", marginBottom: "30px"}}>
                <h5 style={{ fontWeight: "bold", fontSize: "17px" }}>????????????</h5>
                  {
                    pwModal === true
                    ? <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="pw">??????</button>
                    : <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="pw">??????</button>
                  }
              </div>
              <div>
                {
                  pwModal === true
                    ? <div><PasswordModal></PasswordModal></div>
                    : null
                }
              </div>
              <hr style={{marginBottom:'20px'}} />
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "30px",
                }}
              >
                <h5 style={{ fontWeight: "bold", fontSize: "17px" }}>?????????</h5>
                  {
                    emailModal === true
                    ? <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="email">??????</button>
                    : <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="email">??????</button>
                  }
              </div>
              <div>
                {
                  emailModal === true
                    ? <div><EmailModal textEValue={textEValue}></EmailModal></div>
                    : <p style={{transform: "skew(-0.1deg)"}}>{ member.user_email}</p>
                }
              </div>
              <hr style={{marginBottom:'20px'}} />
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "30px",
                }}
              >
                <h5 style={{ fontWeight: "bold", fontSize: "17px" }}>?????????</h5>
                {
                  member.user_phone !=="null"
                  ? <div style={{marginRight:'5px'}}><FcCheckmark style={{float:'left', marginRight:'7px'}}/><p style={{float:'left', fontSize: "17px" }}>?????????</p></div>
                :
                  phoneModal === true
                  ? <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="phone">??????</button>
                  : <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="phone">??????</button>
                }
              </div>
              <div>
              </div>
                {
                  phoneModal === true
                    ? <div><PhoneModal textPValue={textPValue}></PhoneModal></div>
                    : member.user_phone ==="null"
                      ? <p style={{transform: "skew(-0.1deg)"}}>????????? ???????????? ????????????.</p>
                      : <p style={{transform: "skew(-0.1deg)"}}>{member.user_phone}</p>
                }
              <hr style={{marginBottom:'20px'}} />
            </div>
            
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "30px",
                }}
              >
                <h5 style={{ fontWeight: "bold", fontSize: "17px" }}>????????????</h5>
                {
                  signoutModal === true
                  ? <button style={{ fontSize: "17px", background:'none', color:'#ff6666', border:'0' }} onClick={modalSwitch} value="signout">??????</button>
                  : <button style={{ fontSize: "17px", background:'none', color:'#ff6666', border:'0' }} onClick={modalSwitch} value="signout">??????</button>
                }
              </div>
              <div>
              </div>
              {
                signoutModal === true
                  ? <div><SignoutModal></SignoutModal></div>
                  : null
              }
            </div>

          </div>

          <div style={{ width: "34%", float: "left"}}>
            <div style={{clear:'both'}}>
            <h5 style={{textAlign:'center', fontWeight: "bold", fontSize: "17px" }}>?????????</h5>
            <div style={{marginTop:'20px', marginLeft:'95px', width:'180px', height:'180px', borderRadius:'70%', overflow:'hidden'}}>
              
              {member.user_photo === "null"
                ? attachment !== ""
                  ? <img style={{width:'100%', height:'100%', objectFit:'cover'}} src={attachment} />
                  : <img style={{width:'100%', height:'100%', objectFit:'cover'}} src="/basicphoto.png" />
                : attachment !== ""
                  ? <img style={{width:'100%', height:'100%', objectFit:'cover'}} src={attachment} />
                  : <img style={{width:'100%', height:'100%', objectFit:'cover'}} src={`/myphoto/${member.user_photo}`}/>
              }
            </div>
            <div style={{marginLeft:'160px', marginTop:'20px'}}>
              {
                photoModal === true
                ? <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="photo">??????</button>
                : <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="photo">??????</button>
              }
            </div>
            <div style={{marginLeft:'150px', marginTop:'20px'}}>
              {
                photoModal === true
                ? <div><PhotoModal attachment={attachment} setAttachment={setAttachment} photoModal={photoModal} setPhotoModal={setPhotoModal} photostatus={photostatus} setPhotostatus={setPhotostatus} photo={photo} setPhoto={setPhoto} updatephoto={updatephoto}></PhotoModal></div>
                : null
              }
            </div>
            </div>
          </div>
        </div>
      </div>
  );
};

const Warning = styled.div`
    color : red ;
    font-size : 13px;
`;
    
export default inject("membersStore")(observer(Profile));
