import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import desginres from '../Images/desginres.png';
import fullresdes from '../Images/fullresdes.png';
import res from '../Images/res.png';
import fullres from '../Images/fullres.png';
import { useState } from 'react';

export default function MultiActionAreaCard() {
  const [popUp1, setPopUp1] = useState(false);
  const [popUp2, setPopUp2] = useState(false);

  const handlePopUp1 = () => {
    setPopUp1(true);
  };

  const handleClosePopUp1 = () => {
    setPopUp1(false);
  };

  const handlePopUp2 = () => {
    setPopUp2(true);
  };

  const handleClosePopUp2 = () => {
    setPopUp2(false);
  };

  const renderPopUp1 = () => {
    if (popUp1 === true) {
      return (
        <div className="popup-overlay">
          <div className="popup-container">
            <span onClick={handleClosePopUp1} className="close-button">
              X
            </span>
            <div>
              <span>
                <a href='https://drive.google.com/file/d/1pM_nujcOYKTi4zrFMCRKjv9d3J_zPUx7/view?usp=sharing'>
                  <b>RESUME LINK</b>
                </a>
              </span>
              <img src={fullresdes} alt="design" />
            </div>
          </div>
        </div>
      );
    }
  };

  const renderPopUp2 = () => {
    if (popUp2 === true) {
      return (
        <div className="popup-overlay">
          <div className="popup-container">
            <span onClick={handleClosePopUp2} className="close-button">
              X
            </span>
            <div>
              <span>
                <a href='https://drive.google.com/file/d/190dZcx9pnW6TZk0X82ECvbpV_x-vi605/view?usp=sharing'>
                  <b>RESUME LINK</b>
                </a>
              </span>
              <img src={fullres} alt="design" />
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="ResSec">
        <h1>RESUME </h1>
        <Card sx={{ maxWidth: 400, backgroundColor: '#919ca8', margin: '50px', boxShadow: "0px 0px 10px 10px rgba(79, 75, 75, 0.355)" }} onClick={handlePopUp1}>
          <CardActionArea>
            <CardMedia component="img" height="200" image={desginres} alt="design" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                RESUME - 1
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                Designed Resume Template.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 400, backgroundColor: '#919ca8', margin: '50px', boxShadow: "0px 0px 10px 10px rgba(79, 75, 75, 0.355)" }} onClick={handlePopUp2}>
          <CardActionArea>
            <CardMedia component="img" height="200" image={res} alt="design" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                RESUME - 2
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                Basic Resume Template.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            
          </CardActions>
        </Card>
      </div>
      {renderPopUp1()}
      {renderPopUp2()}
    </>
  );
}
