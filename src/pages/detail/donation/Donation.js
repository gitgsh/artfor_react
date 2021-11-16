import React from "react";
import { Route } from "react-router";
import styled from "styled-components";

import DonationHead from "./DonationHead";
import DonationLeftContents from "./DonationLeftContents";
import DonationRigthContents from "./DonationRigthContents";

function Donation() {
  return (
    <div>
      <틀>
        <DonationHead />
        <DonationLeftContents />
        <DonationRigthContents />
      </틀>
    </div>
  );
}

const 틀 = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: auto;
  margin-top: 30px;
`;

export default Donation;
