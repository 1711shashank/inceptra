import React from 'react'
import Contact from './Contact'
import Navbar from './Navbar'
import About from './About'
import PhotoGallery from './PhotoGallery'
import ImageCarousel from './ImageCarousel'
import Sponsors from './Sponsors'
import Footer from './Footer'
import CrewCard from './CrewCard'

const Home = () => {
    return (
        <>
            <Navbar />
            <ImageCarousel/>
            <About/>
            <PhotoGallery />
            <Sponsors/>
            <Contact/>
            {/* <Footer/> */}
            {/* <CrewCard/> */}
        </>
    )
}

export default Home
