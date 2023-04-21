import React from 'react'
import Contact from './Contact'
import ImageCarousel from './ImageCarousel'
import Navbar from './Navbar'
import About from './About'
import PhotoGallery from './PhotoGallery'

const Home = () => {
    return (
        <>
            <Navbar />
            {/* <ImageCarousel/> */}

            <About/>
            <PhotoGallery />
            <Contact/>
        </>
    )
}

export default Home
