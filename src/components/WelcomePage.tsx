
import React from 'react';
import MainHeader from "./MainHeader";
import Me from "./Me";
import CarrouselBlog from "./CarrouselBlog";
import ContectMe from "./ContectMe";
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from    "react-router-hash-link" 
import { Button } from '@mui/material';
import "./styles.css"




type Props = {

};

const WelcomePage:React.FC<Props> = (props) => {
    
    
    

    return(



        <>
        

        
        <MainHeader/>
        <Me/>
        
        
        <CarrouselBlog/>
        <ContectMe/>
        
      
       
      
        
       
    
        </>
    )
} 

export default WelcomePage;