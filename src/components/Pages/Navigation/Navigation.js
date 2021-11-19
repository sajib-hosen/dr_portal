
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Box sx={{fontSize: "15px", textAlign: "right"}}>
            <Link style={{padding: "20px", textDecoration: "none"}} to="/">Home</Link>
            <Link  style={{padding: "20px", textDecoration: "none"}} to="about">About Us</Link>
            <Link style={{padding: "20px", textDecoration: "none"}} to="dentalServices">Dental Services</Link>
            <Link style={{padding: "20px", textDecoration: "none"}} to="review">Reviews</Link>
            <Link  style={{padding: "20px", textDecoration: "none"}} to="blogs">Blogs</Link>
            <Link style={{padding: "20px", textDecoration: "none"}} to="contactUs">Contact Us</Link>
        </Box>
        
    );
};

export default Navigation;