import React from 'react';
import Profile from './Profile';

function SettingsTabdiv(props) {

  if(props.value === 0) {
    return (
      <div>
        <Profile />
      </div>
    )
  }
};

export default SettingsTabdiv;