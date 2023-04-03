
import { makeStyles } from 'tss-react/mui';
import { Box } from "@mui/system";
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import { Alert, Grid, Snackbar, Typography } from '@mui/material';
import { Label } from '@mui/icons-material';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import emailjs, { sendForm } from 'emailjs-com'

// //@ts-ignore
// import img from '../img/img2.jpg';
import Button from '@mui/material/Button';
import { useRef, useState } from 'react';


type Props = {};




const ContectMe:React.FC<Props> = (props) => {

  const scrollToTop = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  };

  const [open, setOpen] = useState(false);  

  const closeHandler = () => {
    setOpen(false);
  }


  const nameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const messageRef = useRef<HTMLInputElement>();


  const sendEmail = (e) => {
    e.preventDefault();
    
    const serviceId = 'service_6dxmzpi';
    const templateId = 'template_r97mihn';
    const userId = '9dQdpwW6ODuPYzW3w';

    emailjs.sendForm(serviceId, templateId, e.currentTarget, userId)
    .then((result) => {
      console.log(result.text);
      setOpen(true);
      handleClick();
    },(error) => {
      console.log(error.text)
    }
    );

    nameRef.current.value='';
    emailRef.current.value='';
    messageRef.current.value='';
    
    
  
  }
      

    const useStyles = makeStyles()((theme) => {
            return{hireMeButton: {
                 marginLeft: 20, border: '1px solid black', color: 'white', backgroundColor:'#00FF7F',  '&:hover': {border: '1px solid #708090', color:'#00FF7F', backgroundColor:'black'}
            }
        
            }
        
    });

    const { classes } = useStyles();

    return(
        < >
        <section id='contectMe' >
          <form onSubmit={sendEmail} >
        <Box>
        
        
           <Box sx={{height: '100px', marginTop: '30px', alignContent:'center' }}>
            <Typography fontFamily='Gill Sans' textAlign='center' variant='h4' justifyContent='center'>Contect Me</Typography>
            </Box>


        <Grid container spacing={30} justifyContent='center' alignItems='center'>
            <Grid item>
         
            <Box>
            <TextField sx={{width: '90%',  margin:'30px', justifyContent:'center', textAlign:'center', alignContent:'center', '& .MuiInputBase-input': { width: '200px' , color:'#808080'}}}
          id="standard-multiline-flexible"
          label="Name"
          inputRef={nameRef}
          multiline
          name='user_name'
          maxRows={4}
          variant="standard"
          inputProps={{maxLength:20}}
          />
          </Box>
          <Box>
          <TextField sx={{width: '90%', margin:'30px', justifyContent:'center', textAlign:'center', alignContent:'center', '& .MuiInputBase-input': { width: '200px' , color:'#808080'}}}
          id="standard-multiline-flexible"
          label="Email"
          inputRef={emailRef}
          name='user_email'
          multiline
          maxRows={4}
          variant="standard"
          inputProps={{maxLength:50}}
          />
          
          </Box>
          <Box>
          <TextField sx={{width: '90%', margin:'30px', justifyContent:'center', textAlign:'center', alignContent:'center', '& .MuiInputBase-input': { width: '200px' , color:'#808080'}}}
          id="standard-multiline-flexible"
          inputRef={messageRef}
          label="Message"
          name='message'
          multiline
          maxRows={4}
          variant="standard"
           />
          </Box>
          <Box sx={{margin: '25px'}}>
          <Button type='submit' className={classes.hireMeButton} variant="outlined" >Send</Button>
          </Box>
          
          </Grid>
          <Grid item  >
            <Grid container spacing='80px'   >
                <Grid item  >
          <Box >
          <LocalPhoneOutlinedIcon/>
          </Box>
          </Grid>
          <Grid item >
          <Box>
            <EmailOutlinedIcon/>
          </Box>
          </Grid>
          <Grid item>
          <Box>
            <AlternateEmailOutlinedIcon/>
          </Box>
          </Grid>
          </Grid>
          
          </Grid>
          
          </Grid>
          
          
            </Box>
            <Snackbar open={open} autoHideDuration={6000} onClose={closeHandler}>
              <Alert severity="success">The message has been sent</Alert>
            </Snackbar>
            </form>
            </section>

             
             
             
        
       
        </>
    )


}

export default ContectMe;