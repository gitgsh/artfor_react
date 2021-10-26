import React from 'react';
import LikeProject from './LikeProject';
import FundingProject from './FundingProject';
import MakeProject from './MakeProject';

function ProjectTabdiv(props) {

  if(props.value === 0) {
    return (
      <FundingProject />
    )
  } else if(props.value === 1) {
    return (
      <MakeProject />
    )
  } else if(props.value === 2) {
    return(
      <LikeProject />
    )
  }
};

export default ProjectTabdiv;