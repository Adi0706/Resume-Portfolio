import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
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
import notetaker from '../Images/notetaker.png';
import onlinewatch from '../Images/onlinewatch.png' ; 
import portfolio from '../Images/portfolio.png' ;
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
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Aditya">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
           <a href='https://github.com/Adi0706/Aditya-Bhattacharjee-Photography'><FaGithub /></a>
          </IconButton>
        }
        title="PHOTOGRAPHY PORTFOLIO "
       
      />
      <CardMedia
        component="img"
        height="194"
        image={photoport}
        alt="photoportfolio"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Photography portfolio using ReactJs , Css , Material UI. 
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
            In this Website , We have a <b>HOME </b>page , <b>ABOUT</b> page , <b>GALLERY VIEW</b> page and a <b>CONTACT FORM</b>.
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
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="note">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
              <a href='https://github.com/Adi0706/note-taker'><FaGithub /></a>
          </IconButton>
        }
        title="NOTE TAKING APP"
        
      />
      <CardMedia
        component="img"
        height="194"
        image={notetaker}
        alt="note-taker"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         A basic Note-Taking Web app using ReactJs and Css.
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
          <Typography paragraph><b>PROJECT DESCRIPTION:</b></Typography>
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

     <Card sx={{ maxWidth: 345 ,margin:"7px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="watch">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <a href='https://github.com/Adi0706/OnlineDigitalWatch'><FaGithub /></a>
          </IconButton>
        }
        title="ONLINE DIGITAL WATCH"
        
      />
      <CardMedia
        component="img"
        height="180"
        image={onlinewatch}
        alt="watch"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Online Digital Watch using HTML , CSS , Javascript.
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
          <Typography paragraph><b>PROJECT DESCRIPTION:</b></Typography>
          <Typography paragraph>
            This project is an Online Digital Watch which shows the current time in Indian standard Time(IST) along with the date.
          </Typography>
          <Typography paragraph>
            It has additional tools like Calendar and a stopwatch.
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
    <Card sx={{ maxWidth: 345 ,margin:"7px",marginRight:"70px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="portfolio">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
             <a href='https://github.com/Adi0706/My-Portfolio-Website'><FaGithub /></a>
          </IconButton>
        }
        title="PORTFOLIO WEBSITE"
        
      />
      <CardMedia
        component="img"
        height="180"
        image={portfolio}
        alt="Portfolio"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Sample Portfolio Website using HTML , CSS , Javasctipt.
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
          <Typography paragraph><b>PROJECT DESCRIPTON:</b></Typography>
          <Typography paragraph>
           This project is a sample project to practice my HTML , CSS and Javascript Skills.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    </>
  );
}
