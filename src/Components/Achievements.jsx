import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import JPcerti from '../Images/jpcertificate.png';
import Hackerrank from '../Images/hackerrank.png';
import udemy from '../Images/udemy.png';

export default function MediaCard() {
  return (
    <section className="AchSec">
      <div style={{ padding: '30px', backgroundColor: '#F7EDEB' }}>
        <h2 style={{ color: 'black', padding: '20px' }}>ACHIEVEMENTS AND CERTIFICATIONS</h2>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Card sx={{ maxWidth: 345, margin: '0 10px' }}>
            <CardMedia sx={{ height: 140 }} image={JPcerti} title="JPcertificate" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                JP Morgan - Software Development Virtual Internship
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Used Perspective data visualization software and Python to monitor stock price trends and create trading
                strategies.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_5wFf8HWBAcKkKRdjF_1688984313114_completion_certificate.pdf">
                  Learn More
                </a>
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, margin: '0 10px' }}>
            <CardMedia sx={{ height: 140 }} image={Hackerrank} title="hackerrank" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Hackerrank Problem Solving (Basic)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Problem Solving assessment organized by Hackerrank. DSA topics were covered in this assessment.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                <a href="https://www.hackerrank.com/certificates/6556fb22aa70">Learn More</a>
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, margin: '0 10px' }}>
            <CardMedia sx={{ height: 140 }} image={udemy} title="udemy" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                C++ - Beginner to Expert ( Udemy )
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This certificate above verifies that I have successfully completed the course C++: From Beginner to Expert
                on 04/27/2022 as taught by Arkadiusz Włodarczyk on Udemy. The certificate indicates the entire course was
                completed as validated by the student. The course duration represents the total video hours of the course
                at the time of the most recent completion.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                <a href="https://www.udemy.com/certificate/UC-5d0afc2f-5e27-4363-9f5b-126f964e5790/">Learn More</a>
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </section>
  );
}
