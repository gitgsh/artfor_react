import React from "react";
import Check from "./Check";
import FundingPlan from "./FundingPlan";
import Main from "./Main";

function ProjectPlan(props) {
  return (
    <div>
      <Main />
      <FundingPlan />
      <ProjectPlan />
      <Check />
    </div>
  );
}

export default ProjectPlan;
