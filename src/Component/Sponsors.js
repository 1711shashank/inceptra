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
        <div className='Sponsors pageDiv' id='Sponsors'> 
        <p className='comp-title'> Associate <span>  Sponsors </span> </p>
            <Banner images={images} speed={10000} />
            <Banner images={images} speed={10000} />
        </div>
           
        </>
    );
}


export default Sponsors