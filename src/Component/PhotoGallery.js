/* eslint-disable jsx-a11y/alt-text */
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
    
    

    return (
        <>
            <div className='photoGallery'>
                <p className='photoGallery-title'>Photos Gallery 2022</p>


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
                        <img class="image" src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                        <img class="image" src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" draggable="false" />
                        <img class="image" src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                        <img class="image" src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                        <img class="image" src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                        <img class="image" src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" draggable="false" />
                        <img class="image" src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" draggable="false" />
                        <img class="image" src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                </div>
            </div>

        </>
    )
}

export default PhotoGallery


















// {/* <div className='photoGallery-body'>
//             <img className='photoGallery-images' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
//             <img className='photoGallery-images' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
//             <img className='photoGallery-images' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
//             <img className='photoGallery-images' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
            
//             <img className='photoGallery-images' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
//             <img className='photoGallery-images' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
//             <img className='photoGallery-images' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
//             <img className='photoGallery-images' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
            
//             <img className='photoGallery-images' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
//             <img className='photoGallery-images' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
//             <img className='photoGallery-images' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
//             <img className='photoGallery-images' src={require('../Assets/img1.jpeg')} alt="" height="100%" width="100%"/>
            
//                 </div> */}