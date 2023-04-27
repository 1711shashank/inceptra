import React from 'react'
import { Banner } from "./Banner";
import "./Sponsors.css";

const Sponsors = () => {


    const images = [
        {
            id: 1,
            src: require('../Assets/SponsorsImages/LIC-Logo.png')
        },
        {
            id: 2,
            src: require('../Assets/SponsorsImages/redBull-logo.png')
        }
    ];


    return (
        <>
        <div className='Sponsors' id='Sponsors'> 
        <p className='comp-title'> Sponsors </p>
            <Banner images={images} speed={15000} />
            <Banner images={images} speed={15000} />
        </div>
           
        </>
    );
}


export default Sponsors