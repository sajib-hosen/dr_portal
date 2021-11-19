import { Container,  Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import React from 'react';

const Banner = () => {
    const bannerBg = {
        background: `url("https://github.com/ProgrammingHero1/doctors-portal/blob/master/images/bg.png?raw=true")`
    }

    const verticalCenter = {
        display: 'flex',
        alignItems: 'center',
        height: 400
    }

    return (
        <Container>
            <Grid container sx={{flexGrow: 1}} style={ bannerBg } spacing={4}>
                <Grid item style={ verticalCenter } xs={12} md={6}>
                    <Box>
                        
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>

                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores velit illum enim incidunt doloremque vitae impedit at accusantium tenetur.
                        </Typography>

                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>

                    </Box>
                </Grid>

                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '350px' }} src="https://github.com/ProgrammingHero1/doctors-portal/blob/master/images/chair.png?raw=true" alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;