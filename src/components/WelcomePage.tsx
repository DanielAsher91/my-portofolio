import { type } from "os"
import React, { useState } from 'react';
import { Container, Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import MainHeader from "./MainHeader";
import AboutMe from "./AboutMe";
import { width } from "@mui/system";
import TextField from '@mui/material/TextField';
import ImgMediaCard from "./ImgMediaCard";
import Me from "./Me";
import CarrouselBlog from "./CarrouselBlog";




type Props = {

};

const WelcomePage:React.FC<Props> = (props) => {
    
    

    return(
        <>
        <MainHeader/>

        <Box sx={{ backgroundColor: 'black', color: 'white',width:'100%' }}>
          
          <Me/> 
            
        
        {/* <Box sx={{display: 'flex', padding: 14,   gap: 2, marginTop: '-10px', position: 'relative'}} >
  <ImgMediaCard/>
  <ImgMediaCard/>
  <ImgMediaCard/>
</Box> */}
        </Box>
        <CarrouselBlog/>
      
       
      
        
       
    
        </>
    )
} 

export default WelcomePage;