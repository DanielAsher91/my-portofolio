import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
//@ts-ignore
import img from '../img/1Scrennshot.png'
import { FaReact,FaJava } from 'react-icons/fa';

import { SiTypescript, SiMysql, SiSpring, SiMui } from 'react-icons/si'
import { Project } from '../types';

type Props = {project: Project};

const ImgMediaCard:React.FC<Props> = (props) => {





const [summery, setSummery] = React.useState(props.project.summery);
let cardSummery = summery;

if (cardSummery.length > 190) {
  cardSummery = cardSummery.slice(0,190) + '...'
} 



  const websiteHandler = () => {
    
      window.location.href = props.project.url;
      
      
  };


  return (
    <Box sx={{ display: 'flex', alignItems: 'center', height: '70vh', marginTop: '30px'}}>
    <Card sx={{ maxWidth: '100%', pointerEvents: 'none'}} >
      <CardMedia
        component="img"
        alt="green iguana"
        
        sx={{ maxWidth: "100%", maxHeight: "100%" }}
        src={props.project.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
        <Button onClick={websiteHandler}  sx={{pointerEvents: 'all', color:'black', fontSize:'20px', fontFamily:'Gill Sans'}}> {props.project.name}</Button>
          
        </Typography>
        <Typography variant="body2" color="text.secondary" fontFamily='Gill Sans'>
        {cardSummery}
        </Typography>
      </CardContent>
      <CardActions sx={{marginLeft:'10px', color:'grey'}}>
      <FaReact size={28}/>
      <SiTypescript size={26}/>
      <FaJava size={28}/>
      <SiMysql size={30}/>
      <SiSpring size={26}/>
      <SiMui size={26}/>
      </CardActions>
    </Card>
    </Box>
  );
}

export default ImgMediaCard;