import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from 'react';
import { AppBar, Toolbar, ThemeProvider, createTheme, IconButton, MenuItem, Backdrop } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled,Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
//@ts-ignore
import img from '../img/daniel.png';
import { motion } from 'framer-motion';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from    "react-router-hash-link" 
import "./styles.css"




type Props = {

}

type pageSection  = {
  link: string;
  name: string;

}

const useStyles = makeStyles()((theme) => {
  return{
    menuButton:{
      position: "absolute",
       top: 0, 
       left: 700
    },
  };
});



const MainHeader:React.FC<Props> = (props) => {

  const [openPic, setOpenPic] = useState(false);
  const handleOpenPic = () => {setOpenPic(true)};
  const handleClosePic = () => {setOpenPic(false)};

  const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
 
  const { classes } = useStyles();

    


    
    const options: pageSection[] =[ 
      {link: '#contectMe', name: 'Contect Me'},
      {link: '#carrousal', name: 'My Projects'},
      {link: '#me', name: 'About Me'}
    ]

      
      
      
      

    const ITEM_HEIGHT = 48;

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
      setAnchorEl(null);
    };
    // <AccountCircleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
    return(
        <>
         <AppBar position='static' style={{background: 'black', boxShadow: 'none'}}>
      <Container>
        <Toolbar >
          <Box>
            <div>
            <IconButton onClick={handleOpenPic}>
            <Avatar sx={{ width: 50, height: 50 }} alt="Profile pic" src={img}  />
            </IconButton>
            <Modal
             
            open={openPic}
            onClose={handleClosePic}
            slots={{ backdrop: Backdrop}}
            >
              <Avatar sx={{ width: 500, height: 500 }} alt="Big Profile pic" src={img}/>
            </Modal>
            </div>
            
           
          </Box>
        
        <Typography 
        
            // variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Arial',
              fontWeight: 100,
              letterSpacing: '.8rem',
              color: 'white',
              textDecoration: 'none',
              
            }}
          ><motion.h3 animate={{ x:10 }}>Daniel Asher</motion.h3>
           
          </Typography>
      
         
          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'flex'}}} style={{ justifyContent: 'flex-end' }}>
           <BrowserRouter> 
            <IconButton 

            id="manu_button"
            
              size="large"
              aria-label="more"
              aria-controls={open ? 'manu_button' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit">
               <MenuIcon style={{ color: '#00FF7F' }}/>
            </IconButton>
            
                <Menu
                 id="manu_button"
                 MenuListProps={{
                  'aria-labelledby': 'manu_button',
                 }} 
                 anchorEl={anchorEl}
                 anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                 open={open}
                 onClose={handleClose}
                 PaperProps={{
                  style:{
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '15ch',
                    backgroundColor: 'black',
                    color:'#00FF7F'
                  },
                 }}
                  >
                    {options.map((option) => (
                        <MenuItem key={option.name}>
                           <HashLink className='button' onClick={handleClose} to={option.link}>{option.name}</HashLink> 
                        </MenuItem>
                       
                    ))}
                    {/* <MenuItem>dwfsfcd</MenuItem> */}
                  </Menu>
                  </BrowserRouter>
          </Box>
        </Toolbar>
      </Container>

    </AppBar>
        </>
    )
}

export default MainHeader;