import React from 'react';
import Profile from './Profile';
import Project from './Project';

function Tabdiv(props) {

  if(props.value === 0) {
    return (
      <Project />
    )
  } else if(props.value === 1) {
    return (<Profile />
    )
  }
};

export default Tabdiv;