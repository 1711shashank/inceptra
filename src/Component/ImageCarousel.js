import React from 'react'
import './ImageCarousel.css'


const ImageCarousel = () => {

  return (
    <>
        <div className='gallery'>
            <div className='gallery-container'>
                <img className='gallery-item gallery-item-1' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
                <img className='gallery-item gallery-item-2' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
                <img className='gallery-item gallery-item-3' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
                <img className='gallery-item gallery-item-4' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
                <img className='gallery-item gallery-item-5' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
                <img className='gallery-item gallery-item-6' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
                <img className='gallery-item gallery-item-7' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
            </div>
        </div>
    </>
  )
}

export default ImageCarousel