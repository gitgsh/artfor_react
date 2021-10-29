import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './header.css';
import { flex } from '../../styles/mixins';
import TextButtons from './TextButtons';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Modal from '@mui/material/Modal'
import { TextField } from '@mui/material';
import SearchModal from './SearchModal';
import Stack from '@mui/material/Stack';
import { useState } from 'react';


function LeftMenu() {
  const [smodal, setSmodal] = useState(false);

  // color: ${({ theme }) => theme.colors.white};
  // background: ${({ theme }) => theme.colors.red100};
  
//const [headerContainer, setHeaderContainer] =  useState(<HeaderContainer/>);

//모달시작
// const [open, setOpen] = React.useState(false);
// const handleOpen = () => setOpen(true);
// const handleClose = () => setOpen(false);

// const style = {
//   position: 'absolute',
//   top: '20%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: "100%",
  
//   bgcolor: 'background.paper',
//   border: '0',
//   boxShadow: 10,
//   p: 4,
// };
//모달끝

  // function TextButtons() {
  //   return (
  //     <Stack direction="row" spacing={2}>
  //       <Button>Primary xxxxx</Button>
  //       <Button disabled>Disabled</Button>
  //       <Button href="#text-buttons">Link</Button>
  //     </Stack>
  //   );
  // }


  //서치모달...



  return (
<>
    <LeftMenuBox>
      
      <div className="head_btn1">
      
      <SearchModal/>
      </div>
      <div className="head_btn2"><Button  style={{color:'black', fontFamily:"NanumSquareB", fontSize:"15px", width:'120px'}}>프로젝트 올리기</Button></div>
      
     
    </LeftMenuBox>

     {/* 프로젝트 둘러보기 모달창 */}
     {/* <Modal
     open={open}
     onClose={handleClose}
     aria-labelledby="modal-modal-title"
     aria-describedby="modal-modal-description"
   >
     <Box sx={style}>
       <Typography id="modal-modal-title" variant="h6" component="h2">
         <form>
         <TextField fullWidth label="프로젝트를 검색해주세요" id="fullWidth" />
           <button>검색</button>
         </form>
       </Typography>
       <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
       </Typography>
     </Box>
   </Modal> */}
    
   </>
  );
}

const LeftMenuBox = styled.div`
  ${flex('flex-start', 'center')};
  flex: 1;
  height: 100%;
`;

const ListLink = styled(Link)`
  ${flex('center', 'center')};
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
  ${flex('center', 'center')};
  height: 100%;
  font-size: 14px;
  font-weight: bold;
  transition: opacity 250ms;

  &:hover {
    opacity: 0.6;
  }
`;

export default LeftMenu;
