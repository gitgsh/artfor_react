import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./header.css";
import { flex } from "../../styles/mixins";
import TextButtons from "./TextButtons";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import SearchModal from "./SearchModal";
import Stack from "@mui/material/Stack";
import { useState } from "react";

function LeftMenu() {
  const [smodal, setSmodal] = useState(false);

  return (
    <>
      <LeftMenuBox>
        <div className="head_btn1">
          <SearchModal />
        </div>
        <div className="head_btn2">
          <Link to="/project/main" style={{ textDecorationLine: "none" }}>
            <Button
              style={{
                marginTop: "3px",
                color: "#000000",
                fontFamily: "NanumSquareR",
                fontSize: "15px",
                fontWeight: "bold",
                width: "120px",
                marginLeft: "-10px",
              }}
            >
              프로젝트 올리기
            </Button>
          </Link>
        </div>
      </LeftMenuBox>
    </>
  );
}

const LeftMenuBox = styled.div`
  ${flex("flex-start", "center")};
  flex: 1;
  height: 100%;
`;

const ListLink = styled(Link)`
  ${flex("center", "center")};
  margin-right: 30px;
  padding: 10px 15px;
  color: white;
  backgroud: red;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 250ms;

  &:hover {
    opacity: 0.6;
  }
`;

const ProjectCreateLink = styled(Link)`
  ${flex("center", "center")};
  height: 100%;
  font-size: 14px;
  font-weight: bold;
  transition: opacity 250ms;

  &:hover {
    opacity: 0.6;
  }
`;

export default LeftMenu;
