import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
const Testimonials = () => {
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slideToShow:3,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slideToShow:2,
                    slideToScroll:1,
                    infinite:true,
                    dots:true,
                },  
            },
            {
                breakpoint:576,
                settings:{
                    slideToShow:2,
                    slideToScroll:1,
                    infinite:true,
                    dots:true,
                },  
            },

        ]
    }
  return (
  <Slider {...settings}>
    <div className="testimoial py-4 px-3">
        <p>Amazing experience! 
            The views were breathtaking and the guide was very knowledgeable.</p>
        <div className="d-flex align-items-center gao-4 mt-3">
            <img src={ava01} className='w-25 h-25 rounded-2' alt=''/>
            <div>
                <h6 className="mb-0 mt-3"> John Doe</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimoial py-4 px-3">
        <p>A relaxing and rejuvenating experience. The instructor was great, but the session could have been a bit longer.</p>
        <div className="d-flex align-items-center gao-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt=''/>
            <div>
                <h6 className="mb-0 mt-3">Lia Franklin</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimoial py-4 px-3">
        <p>I learned so much about digital marketing! The webinar was informative and engaging.</p>
        <div className="d-flex align-items-center gao-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt=''/>
            <div>
                <h6 className="mb-0 mt-3"> John Doe</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
  </Slider>
  )
}

export default Testimonials