import React, { useRef } from 'react'
import './PhotoGallery.css'

const PhotoGallery = () => {

    const imageTrackRef = useRef(null);
    const prevPercentageRef = useRef(0);
    const mouseDownAtRef = useRef(0);
  
    const handleOnDown = (e) => {
      mouseDownAtRef.current = e.clientX;
    };
  
    const handleOnUp = () => {
      mouseDownAtRef.current = 0;
      prevPercentageRef.current = imageTrackRef.current.dataset.percentage;
    };
    const handleOnMove = (e) => {
        if (mouseDownAtRef.current === 0) return;
    
        const mouseDelta = parseFloat(mouseDownAtRef.current) - e.clientX;
        const maxDelta = window.innerWidth / 2;
    
        const percentage = (mouseDelta / maxDelta) * -100;
        const nextPercentageUnconstrained = parseFloat(prevPercentageRef.current) + percentage;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    
        imageTrackRef.current.dataset.percentage = nextPercentage;
        imageTrackRef.current.animate({transform: `translate(${nextPercentage}%, -50%)`},{ duration: 1200, fill: 'forwards' });
    
        const images = imageTrackRef.current.getElementsByClassName('image');
        for (const image of images) {
          image.animate({objectPosition: `${100 + nextPercentage}% center`},{ duration: 1200, fill: 'forwards' });
        }
    };


    const imgArray = [
        {
            id : 1,
            src : require('../Assets/PhotoGallery/img1.jpeg')
        },
        {
            id : 2,
            src : require('../Assets/PhotoGallery/img2.jpeg')
        },
        {
            id : 3,
            src : require('../Assets/PhotoGallery/img3.jpeg')
        },
        {
            id : 4,
            src : require('../Assets/PhotoGallery/img4.jpeg')
        },
        {
            id : 5,
            src : require('../Assets/PhotoGallery/img5.jpeg')
        },
        {
            id : 6,
            src : require('../Assets/PhotoGallery/img6.jpeg')
        },
        {
            id : 7,
            src : require('../Assets/PhotoGallery/img7.jpeg')
        },
        {
            id : 8,
            src : require('../Assets/PhotoGallery/img8.jpeg')
        },
        {
            id : 9,
            src : require('../Assets/PhotoGallery/img9.jpeg')
        },
        {
            id : 10,
            src : require('../Assets/PhotoGallery/img10.jpeg')
        },
        {
            id : 11,
            src : require('../Assets/PhotoGallery/img11.jpeg')
        },
        {
            id : 12,
            src : require('../Assets/PhotoGallery/img12.jpeg')
        },
        {
            id : 13,
            src : require('../Assets/PhotoGallery/img13.jpeg')
        },
        {
            id : 14,
            src : require('../Assets/PhotoGallery/img14.jpeg')
        },
        {
            id : 15,
            src : require('../Assets/PhotoGallery/img15.jpeg')
        },
        {
            id : 16,
            src : require('../Assets/PhotoGallery/img16.jpeg')
        },
        {
            id : 17,
            src : require('../Assets/PhotoGallery/img17.jpeg')
        },
        {
            id : 18,
            src : require('../Assets/PhotoGallery/img18.jpeg')
        },
        {
            id : 19,
            src : require('../Assets/PhotoGallery/img19.jpeg')
        },
        {
            id : 20,
            src : require('../Assets/PhotoGallery/img20.jpeg')
        },
        {
            id : 21,
            src : require('../Assets/PhotoGallery/img21.jpeg')
        },
        {
            id :22,
            src : require('../Assets/PhotoGallery/img22.jpeg')
        },
    ]
    
    

    return (
        <>
            <div className='photoGallery'>
                <p className='comp-title'>Photos Gallery 2022</p>

                <div 
                    id="image-track" 
                    data-mouse-down-at="0" 
                    data-prev-percentage="0"
                    ref={imageTrackRef}
                    onMouseDown={handleOnDown}
                    onMouseUp={handleOnUp}
                    onMouseMove={handleOnMove}
                    onTouchStart={(e) => handleOnDown(e.touches[0])}
                    onTouchEnd={(e) => handleOnUp(e.touches[0])}
                    onTouchMove={(e) => handleOnMove(e.touches[0])}
                    >
                        {imgArray.map( (curImg) => (
                        <img 
                            class="image"
                            src= {curImg.src}
                            draggable="false" 
                            alt=''
                        />

                            
                        ))}
                        
                </div>
            </div>

        </>
    )
}

export default PhotoGallery






