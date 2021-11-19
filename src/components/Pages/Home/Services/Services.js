import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

// 1, Import Aos from "aos"
// 2, Import Aos css from "aos/dist/aos.css"
// 3, initializing AOS (Animation On Scrol)

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: 'https://github.com/ProgrammingHero1/doctors-portal/blob/master/images/fluoride.png?raw=true'
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: 'https://github.com/ProgrammingHero1/doctors-portal/blob/master/images/cavity.png?raw=true'
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: 'https://github.com/ProgrammingHero1/doctors-portal/blob/master/images/whitening.png?raw=true'
    }
]


const Services = () => {
    Aos.init({});  //initializing AOS (Animation On Scrol)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
                
            </Container>
        </Box>
    );
};

export default Services;


const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <Grid data-aos="fade-right" item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};