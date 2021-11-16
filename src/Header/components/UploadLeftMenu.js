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
import { IoArrowBack } from "react-icons/io5";
import { useHistory } from "react-router";

function UploadLeftMenu() {
  let history = useHistory();

  return (
    <>
      <LeftMenuBox2>
        <div className="head_btn2">
          <Button
            style={{
              color: "black",
              fontFamily: "NanumSquareR",
              fontWeight: "bold",
              fontSize: "15px",
              width: "120px",
            }}
            onClick={() => {
              history.goBack("/project/plan/projectuploadmain");
            }}
          >
            <IoArrowBack
              style={{
                marginRight: "10px",
                transform: "skew(-0.1deg)",
              }}
            />
            뒤로 가기
          </Button>
        </div>
      </LeftMenuBox2>
    </>
  );
}

const LeftMenuBox2 = styled.div`
  ${flex("flex-start", "center")};
  flex: 1;
  height: 100%;
`;

export default UploadLeftMenu;
