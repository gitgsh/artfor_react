// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

// const AntTabs = styled(Tabs)({
//   borderBottom: '1px solid #e8e8e8',
//   '& .MuiTabs-indicator': {
//     backgroundColor: '#323232',
//   },
// });

// const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
//   textTransform: 'none',
//   minWidth: 0,
//   [theme.breakpoints.up('sm')]: {
//     minWidth: 0,
//   },
//   fontWeight: theme.typography.fontWeightRegular,
//   marginRight: theme.spacing(1),
//   color: '#a0a0a0',
//   fontSize: '20px',
//   fontFamily: [
//     '"NanumSquareB"',
//   ].join(','),
//   '&:hover': {
//     color: '#323232',
//     fontFamily: "NanumSquareEB",
//     opacity: 1,
//   },
//   '&.Mui-selected': {
//     color: '#323232',
//     fontFamily: "NanumSquareEB",
//     fontWeight: theme.typography.fontWeightMedium,
//   },
//   '&.Mui-focusVisible': {
//     backgroundColor: '#d1eaff',
//   },
// }));

// // const StyledTabs = styled((props) => (
// //   <Tabs
// //     {...props}
// //     TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
// //   />
// // ))({
// //   '& .MuiTabs-indicator': {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     backgroundColor: 'transparent',
// //   },
// //   '& .MuiTabs-indicatorSpan': {
// //     maxWidth: 40,
// //     width: '100%',
// //     backgroundColor: '#635ee7',
// //   },
// // });

// // const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
// //   ({ theme }) => ({
// //     textTransform: 'none',
// //     fontWeight: theme.typography.fontWeightRegular,
// //     fontSize: theme.typography.pxToRem(15),
// //     marginRight: theme.spacing(1),
// //     color: 'rgba(255, 255, 255, 0.7)',
// //     '&.Mui-selected': {
// //       color: '#fff',
// //     },
// //     '&.Mui-focusVisible': {
// //       backgroundColor: 'rgba(100, 95, 228, 0.32)',
// //     },
// //   }),
// // );

// function Tabbar() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ bgcolor: '#fff' }}>
//           <div style={{maxWidth: '1080px', width:'100%'}}>
//         <AntTabs value={value} onChange={handleChange} aria-label="ant example">
//             <AntTab label="후원한 프로젝트"/>
//             <AntTab label="내 정보"/>
//         </AntTabs>
//           </div>
//         <Box sx={{ p: 3 }} />
//       </Box>      
//     </Box>
//   );
// }
// export default Tabbar;
