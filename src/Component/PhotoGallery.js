import React from 'react'
import './PhotoGallery.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

const PhotoGallery = () => {

    const imgArray = [
        {
            id: 1,
            src: require('../Assets/PhotoGallery/img1.jpeg')
        },
        {
            id: 2,
            src: require('../Assets/PhotoGallery/img2.jpeg')
        },
        {
            id: 3,
            src: require('../Assets/PhotoGallery/img3.jpeg')
        },
        {
            id: 4,
            src: require('../Assets/PhotoGallery/img4.jpeg')
        },
        {
            id: 5,
            src: require('../Assets/PhotoGallery/img5.jpeg')
        },
        {
            id: 6,
            src: require('../Assets/PhotoGallery/img6.jpeg')
        },
        {
            id: 7,
            src: require('../Assets/PhotoGallery/img7.jpeg')
        },
        {
            id: 8,
            src: require('../Assets/PhotoGallery/img8.jpeg')
        },
        {
            id: 9,
            src: require('../Assets/PhotoGallery/img9.jpeg')
        },
        {
            id: 10,
            src: require('../Assets/PhotoGallery/img10.jpeg')
        },
        {
            id: 11,
            src: require('../Assets/PhotoGallery/img11.jpeg')
        },
        {
            id: 12,
            src: require('../Assets/PhotoGallery/img12.jpeg')
        }
    ]

    return (
        <>
            <div className='photoGallery' id='Gallery'>
                <p className='comp-title'>Photos Gallery 2022</p>

                <div className="image-cards">
                    {imgArray.map((curImg) => (
                        <div className='image-card'>
                            <img
                                class="image"
                                src={curImg.src}
                                draggable="false"
                                alt=''
                            />
                            <div className='photoGallery-viewIcon'>
                                <a
                                    href="https://drive.google.com/drive/folders/1N_XX-nusMSOsuRdGcrpZKt2ZXhWgizVk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                <VisibilityIcon style={{fontSize:'3rem'}}/>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PhotoGallery






