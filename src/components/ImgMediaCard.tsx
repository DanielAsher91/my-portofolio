import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
//@ts-ignore
import img from '../img/daniel.png';

export default function ImgMediaCard() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', height: '70vh', marginTop: '30px'}}>
    <Card sx={{ maxWidth: '100%', pointerEvents: 'none'}} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="400"
        src={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          About Me
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{pointerEvents: 'all'}}>Share</Button>
        <Button size="small" sx={{pointerEvents: 'all'}}>Learn More</Button>
      </CardActions>
    </Card>
    </Box>
  );
}