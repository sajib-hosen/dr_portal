import React from 'react';
import Navigation from '../Navigation/Navigation';
import Banner from './Banner/Banner';
import ContructUs from './ContructUs/ContructUs';
import ExceptionalCare from './Exceptional/ExceptionalCare';
import Footer from './Footer/Footer';
import OurBlogs from './OurBlogs/OurBlogs';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <ExceptionalCare/>
            <Testimonial/>
            <OurBlogs/>
            <ContructUs/>
            <Footer/>
        </div>
    );
};

export default Home;