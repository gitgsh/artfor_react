import React from 'react';
import Profile from './Profile';

function SettingsTabdiv(props) {

  if(props.value === 0) {
    return (
      <Profile />
    )
  }
  // else if(props.value === 1) {
  //   return (
  //     <MakeProject />
  //   )
  // } else if(props.value === 2) {
  //   return(
  //     <Profile />
  //   )
  // }
};

export default SettingsTabdiv;