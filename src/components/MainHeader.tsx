import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from 'react';
import { AppBar, Toolbar, ThemeProvider, createTheme, IconButton, MenuItem } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
//@ts-ignore
import img from '../img/daniel.png';
import { motion } from 'framer-motion';




type Props = {

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

 
  const { classes } = useStyles();
  

    const options = [
        'None',
        'Atria',
        'Callisto',
        'Dione',
        'Ganymede',
        'Hangouts Call',
        'Luna',
        'Oberon',
        'Phobos',
        'Pyxis',
        'Sedna',
        'Titania',
        'Triton',
        'Umbriel',
      ];
      

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
            <IconButton>
            <Avatar sx={{ width: 50, height: 50 }} alt="Travis Howard" src={img} />
            </IconButton>
           
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
      
         
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}} style={{ justifyContent: 'flex-end' }}>
            <IconButton 

            id="manu_button"
            
              size="large"
              aria-label="more"
              aria-controls={open ? 'manu_button' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit">
               <MenuIcon style={{ color: 'white' }}/>
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
                    width: '20ch',
                  },
                 }}
                  >
                    {options.map((option) => (
                        <MenuItem key={option}>
                            {option}
                        </MenuItem>
                       
                    ))}
                    <MenuItem>dwfsfcd</MenuItem>
                  </Menu>
          </Box>
        </Toolbar>
      </Container>

    </AppBar>
        </>
    )
}

export default MainHeader;