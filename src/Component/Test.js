import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './Test.css';

SwiperCore.use([Autoplay, Pagination, EffectCoverflow, Navigation]);

const images = [
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
];

const Test = () => {

    return (
        <div>
            <Swiper
                modules={[Autoplay, Pagination, EffectCoverflow, Navigation]}
                autoplay={{ delay: 2000, disableOnInteraction: true }}
                navigation
                effect="coverflow"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false
                }}
                loop={true}
                loopedSlides={4}
                slidesPerView={'auto'}
                centeredSlides
                initialSlide={3}
                className="mySwiper"
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <img src={image.src} alt='' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Test;