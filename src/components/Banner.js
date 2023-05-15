import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Banner() {
  return (
    <div className='relative'>
        <div className='absolute w-full h-8 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={4000}>
        <div>
            <img loading='eager' src="/banner.jpg" alt='imag1' width={50} height={50} />
        </div>
        <div>
            <img loading='eager' src="/banner2.jpeg" alt='img2' width={50} height={50} />
        </div>
        <div>
            <img loading='eager' src="/banner3.avif" alt='img3' width={50} height={50} />
        </div>
        </Carousel>
    </div>
  )
}

export default Banner