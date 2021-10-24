import React from 'react';
import { withRouter } from 'react-router-dom';
import { useLocation } from 'react-router';
import FooterContentWrap from './components/FooterContentWrap';

const exclusionRoutes = ['/login', '/signup'];

function Footer() {
  

  return <FooterContentWrap />;
}

export default (Footer);

