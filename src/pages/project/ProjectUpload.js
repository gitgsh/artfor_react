import React from "react";
import Check from "./Check";
import FundingPlan from "./FundingPlan";
import Main from "./Main";
import PlanTabs from "./Tab";

function ProjectUpload(props) {
  return (
    <div className="body">
      {/* <Main />
      <FundingPlan />
      <ProjectPlan />
      <Check /> */}
      <PlanTabs />
    </div>
  );
}

export default ProjectUpload;
