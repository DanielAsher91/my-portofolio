import { Box } from "@mui/system";
import AboutMe from "./AboutMe";

type Props = {};


const Me:React.FC<Props> = (props) => {

return (
    <>
    
        
        <Box sx={{ backgroundColor: 'black', color: 'white',width:'100%' }}>
          
           
        <AboutMe/>
        
  
        </Box>
    </>
)

}

export default Me;