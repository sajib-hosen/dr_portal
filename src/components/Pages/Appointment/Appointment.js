import React from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvalableAppoi from './AvalableAppoi.js/AvalableAppoi';
import Footer from './../Home/Footer/Footer';

const Appointment = () => {
    return (
        <div>
            <AppointmentBanner/>
            <AvalableAppoi/>
            <Footer/>
        </div>
    );
};

export default Appointment;