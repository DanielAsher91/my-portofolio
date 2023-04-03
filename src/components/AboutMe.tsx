import { Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import ImgMediaCard from "./ImgMediaCard";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import { styled } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';


//@ts-ignore
import img from '../img/daniel.png';



type Props = {};

let aboutMe: string = ""




const AboutMe:React.FC<Props> = (props) => {

    const handleButtonClick = () => {
        const section = document.getElementById('contectMe');
        section.scrollIntoView({ behavior: 'auto' });
      };


    const useStyles = makeStyles()((theme) => {
        return {
            box: {
                display: 'flex', alignItems: 'center', paddingTop: '100px', justifyContent: 'flex-start', width: '100%'
                },
             card: {
                maxWidth: '100%', height: '30   0px', backgroundColor: 'black',
             },
             linkedInIconButton: {
                color: 'white', height: 40, width: 40, '&:hover': {color:'#4169E1'} 
            },
            gitHubIconButton: {
                color: 'white', height: 40, width: 40, '&:hover': {color:'#663399'}
            },
            hireMeButton: {
                marginLeft: 20, border: '1px solid white', color: 'white', '&:hover': {border: '1px solid #708090', color:'#00FF7F'}
            }
        }
    });
     const {classes} = useStyles();

    return(
    <>
     <Box className={classes.box}>
    <Card className={classes.card} >
    <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
            <motion.h2 animate={{ x: 50}}>About Me</motion.h2>
          
        </Typography>
     
        <Typography variant="body2" color="white" fontFamily= 'Monospace' fontSize={17}>
        Hi there! I'm Daniel and I'm a beginner Full Stack Developer with a strong foundation in Java,<br/>
         JavaScript, TypeScript, React, and MySQL.<br/>
         I'm passionate about building web applications and creating engaging user experiences.<br/>
          Although I'm relatively new to the field, I have gained experience through various projects and coursework.<br/>
           I'm a quick learner and always eager to expand my knowledge and skills.<br/>
            I take pride in writing clean and organized code that follows best practices and industry standards.<br/>
             I'm excited to continue my journey as a Full Stack Developer and contribute to the tech community.
        </Typography>
        <a href="https://www.linkedin.com/in/daniel-asher-a4b2a021b/">
        <Button >
            <LinkedInIcon className={classes.linkedInIconButton}/>
        </Button>
        </a>
        <a href="https://github.com/DanielAsher91">
        <Button >
            <GitHubIcon className={classes.gitHubIconButton}/>
        </Button>
        </a>
       
      </CardContent>
      <CardActions sx={{backgroundColor: 'black'}}>
        <Button className={classes.hireMeButton} variant="outlined" onClick={handleButtonClick} >Hire me</Button>
        <a href="https://drive.google.com/file/d/1kavNnRzKKPPKIb9ay-XCJA2BoyncrrIl/view?usp=share_link">
        <Button sx={{marginLeft:3}}variant="contained" endIcon={<RememberMeIcon />}>
  Get CV
</Button>
        </a>
      </CardActions>
    </Card>
    </Box>
    
    </>
    )
}

export default AboutMe;