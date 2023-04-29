import React from 'react'
import Navbar from './Navbar'
import About from './About'
import PhotoGallery from './PhotoGallery'
import ImageCarousel from './ImageCarousel'
import Sponsors from './Sponsors'

const Home = () => {
    return (
        <>
            <Navbar />
            <ImageCarousel/>
            <About/>
            <PhotoGallery />
            <Sponsors/>

        </>
    )
}

export default Home
