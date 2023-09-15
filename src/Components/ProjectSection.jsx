import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import photoport from '../Images/photoport.png' ;
import repsnsets from "../Images/repsnsets.mp4";
import onlinewatch from '../Images/onlinewatch.png' ; 
import phtoport from '../Images/phtoport.mp4' ;
import notetaker from "../Images/notetaker.mp4" ;
import {FaGithub } from 'react-icons/fa';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
   <>
    
    <div className="ProjSec">
        <h2 style={{color:"white",marginLeft:"-20px"}}>PROJECT SECTION</h2>
         
    <Card sx={{ maxWidth: 345 ,margin:"7px"}}>
   
      <CardHeader
      
        action={
          <IconButton aria-label="settings">
           <a href='https://github.com/Adi0706/Reps-n-Sets'><FaGithub /></a>
          </IconButton>
        }
        title="REPS N SETS "
       
      />
      <CardMedia
        component="video"
        style={{ height: '200px', width: '100%' }}
        src={repsnsets}
        controls
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>REPS N SETS</b> - Personal Fitness Web Application using MERN stack.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph> <b>PROJECT DESCRIPTION:</b></Typography>
          <Typography paragraph>
          A personal fitness website where users can register and access various training and diet plans based on their fitness goals. Users can also utilize the Google Maps feature to locate gyms in their vicinity
          </Typography>
          <Typography paragraph>
          Frontend of the website was developed using ReactJs , Material UI and CSS .<br/><br/>
          Login and SignUp was setup using NodeJs and ExpressJs<br/><br/>
          This Website Uses MonogoDB database for storing user registrations.<br/><br/>
          Google Maps Api was used to setup Google Maps to find gyms .<br/><br/>
           Logo of the Website was designed using Figma.

          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    <Card sx={{ maxWidth: 345 ,margin:"7px"}}>
   
   <CardHeader
   
     action={
       <IconButton aria-label="settings">
        <a href='https://github.com/Adi0706/Reps-n-Sets'><FaGithub /></a>
       </IconButton>
     }
     title="PHOTOGRAPHY PORTFOLIO "
    
   />
   <CardMedia
     component="video"
     style={{ height: '200px', width: '100%' }}
     src={phtoport}
     controls
   />
   <CardContent>
     <Typography variant="body2" color="text.secondary">
       <b>PHOTOGRAPHY PORTFOLIO</b> - Personal Photography portfolio developed using React js , Material UI and Css.
     </Typography>
   </CardContent>
   <CardActions disableSpacing>
   
     <ExpandMore
       expand={expanded}
       onClick={handleExpandClick}
       aria-expanded={expanded}
       aria-label="show more"
     >
       <ExpandMoreIcon />
     </ExpandMore>
   </CardActions>
   <Collapse in={expanded} timeout="auto" unmountOnExit>
     <CardContent>
       <Typography paragraph> <b>PROJECT DESCRIPTION:</b></Typography>
       <Typography paragraph>
       This project shows my enthusiasm for Photography and Development.This portfolio showcases all the pictures I have clicked till now .
       </Typography>
       <Typography paragraph>
       The Home and About Pages were built using Css Animation and styling .<br/><br/>
            Navigation throughout the Website covers the concept of <b>React-Router-dom</b> to navigate through URLs.<br/><br/>
            Gallery View was built using Hooks in ReactJs.<br/><br/>
            Contact form of the website is connected to backend ,which sends the form data to the registered email.The backend
            was setup using <b>NodeJs</b> and another package known as <b>Nodemailer</b>.

       </Typography>
     </CardContent>
   </Collapse>
 </Card>
 <Card sx={{ maxWidth: 345 ,margin:"7px"}}>
   
   <CardHeader
   
     action={
       <IconButton aria-label="settings">
        <a href='https://github.com/Adi0706/note-taker'><FaGithub /></a>
       </IconButton>
     }
     title="NOTE TAKING APP "
    
   />
   <CardMedia
     component="video"
     style={{ height: '200px', width: '100%' }}
     src={notetaker}
     controls
   />
   <CardContent>
     <Typography variant="body2" color="text.secondary">
       <b>NOTE TAKING APP </b> - NOTE TAKING APP using React js , Css .
     </Typography>
   </CardContent>
   <CardActions disableSpacing>
   
     <ExpandMore
       expand={expanded}
       onClick={handleExpandClick}
       aria-expanded={expanded}
       aria-label="show more"
     >
       <ExpandMoreIcon />
     </ExpandMore>
   </CardActions>
   <Collapse in={expanded} timeout="auto" unmountOnExit>
     <CardContent>
       <Typography paragraph> <b>PROJECT DESCRIPTION:</b></Typography>
       <Typography paragraph>
       A basic note taking app using ReactJs and CSS.
       </Typography>
       <Typography paragraph>
       This project includes all the basic funtionality of a note taking applicaton such as : <br/><br/>
            1.Addition of new notes <br/>
            2.Deletion of new ntoes <br/>
            3.Searching of Existing notes<br/>
            4.Storing note data to Local storage .

       </Typography>
     </CardContent>
   </Collapse>
 </Card>
   
    
    </div>
    </>
  );
}
