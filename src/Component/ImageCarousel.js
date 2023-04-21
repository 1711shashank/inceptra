/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import './ImageCarousel.css'

const ImageCarousel = () => {
  const images = [
    {id: 1, src:require('../Assets/PhotoGallery/img1.jpeg')},
    {id: 2, src:require('../Assets/PhotoGallery/img2.jpeg')},
    {id: 3, src:require('../Assets/PhotoGallery/img3.jpeg')},
    {id: 4, src:require('../Assets/PhotoGallery/img4.jpeg')},
    {id: 5, src:require('../Assets/PhotoGallery/img5.jpeg')},
    {id: 6, src:require('../Assets/PhotoGallery/img6.jpeg')},
    {id: 7, src:require('../Assets/PhotoGallery/img7.jpeg')},
  ]
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [currentSlide, images])

  return (
    <>
      <div className='gallery'>
        <div className='gallery-container'>
          {images.map((curImg) => (
            <img
              key={curImg.id}
              className={`gallery-item gallery-item-${curImg.id} ${currentSlide === curImg.id+1 ? 'active' : ''}`}
              src={curImg.src}
              alt=''
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ImageCarousel
