import React from 'react'

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import myPortfolio from '../images/portfolio.png'
import myGitHub from '../images/gitHub.png'
import cruzDeMalta from '../images/cruzDeMalta.png'
import equipmentManagerImg from '../images/equipmentManager.png'
import homeAutomationImg from '../images/home_automation.png'
import weatherAplication from '../images/weatherAplication.png'

const useStyles = makeStyles((theme) => ({
     cardMedia: {
          paddingTop: '76.25%', // 16:9
     },
     cardContent: {
          flexGrow: 1,
     },
}));

const projects = [{
     projectName: 'My GitHub',
     url: 'https://github.com/nogueiralhsp',
     gitHubUrl: 'https://github.com/nogueiralhsp',
     image: myGitHub,
     projectDescription: 'My git hub page, most of my projects are public. If interested in any in particular get in touch in the contacts =)'
}, {
     projectName: 'My portfolio',
     url: '/',
     gitHubUrl: 'https://github.com/nogueiralhsp/lhpinto-portifolio',
     image: myPortfolio,
     projectDescription: 'In this project I built this website. \n Using Node.js on BackEnd with React and some components of Material UI on Front End. It is a working in progress, so every feedback is welcome!'
}, {
     projectName: 'Home Automation',
     url: 'https://home-automation-lpinto.vercel.app/',
     gitHubUrl: 'https://github.com/nogueiralhsp/home_automation',
     image: homeAutomationImg,
     projectDescription: 'House Automation Project Integrating a Rasberry Pi and a forcast API with web application'
}, {
     projectName: 'Moto Club',
     url: 'https://cruzdemalta.vercel.app/',
     gitHubUrl: '#',
     image: cruzDeMalta,
     projectDescription: 'Quick project for a motorcycle club in Brazil. If interested seeing the code get in touch in the contacts =)'
}, {
     projectName: 'Henrique Factory Manager App',
     url: 'https://equipmentmanagerclient.vercel.app/',
     gitHubUrl: 'https://github.com/nogueiralhsp/',
     image: equipmentManagerImg,
     projectDescription: 'Application for managing time down on machines and production.'
}, {
     projectName: 'Weather Forcast',
     url: 'https://nogueira-weather-application.herokuapp.com/',
     gitHubUrl: 'https://github.com/nogueiralhsp/node_course_weather_app',
     image: weatherAplication,
     projectDescription: 'Done when studing about backend using thrid parts APIs and rendering the information with location given by user'
},]



function HomePage() {

     const classes = useStyles();

     return (
          <div className="home-page-content">
               <div className="main-content">
                    <div className="home-page-description">
                         <h1>Welcome to my portfolio!</h1>
                         <p>Hi! I'm Luiz and this is my portfolio.<br />Below you will find some of the projects I have been working or have worked on.<br /> Mainly using React, Node.js and Python I have discovered the web application world!<br />Feel free to get in contact if in any doubt.</p>
                         <p>I often update components and functionalities, so I hope to see you around soon!</p>
                         <p>If you spot any room for improvment or any idea to make it better, plese let us know on <a href="/contact">contact page</a>.</p>
                    </div>
               </div>
               <Container className="card-grid" maxWidth="md" >
                    <Grid container spacing={4} alignContent='center'>
                         {projects.map((project) => (

                              <Grid item key={project.projectName} xs={12} sm={6} md={4}>
                                   <Card className="card">
                                        <a href={project.url} target="blank">
                                             <CardMedia
                                                  className={classes.cardMedia}
                                                  image={project.image}
                                                  title={project.projectName}
                                             />
                                        </a>
                                        <CardContent className="card-content">
                                             <Typography gutterBottom variant="h5" component="h2">
                                                  {project.projectName}
                                             </Typography>
                                             <Typography>
                                                  {project.projectDescription}
                                             </Typography>
                                        </CardContent>
                                        <CardActions>
                                             <Button size="small" color="primary">
                                                  <a href={project.url} target="blank">Visit</a>
                                             </Button>
                                             <Button size="small" color="primary">
                                                  <a href={project.gitHubUrl} target="blank">GitHub</a>
                                             </Button>
                                        </CardActions>
                                   </Card>
                              </Grid>
                         ))}
                    </Grid>
               </Container>

          </div>
     )
}

export default HomePage