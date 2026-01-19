import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
  dots: true,
  infinite: false,
  speed: 800,
  slidesToShow: 5,
  slidesToScroll: 2,

  responsive: [
    {
      breakpoint: 1280, // < 1280px
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768, // < 1024px
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows:false,
      },
    },
    {
      breakpoint: 640, // < 640px (mobile)
      settings: {
        arrows:false,
      },
    },
        {
      breakpoint: 425, // < 640px (mobile)
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows:false,
      },
    },
  ],
};


export function Deals() {

    const childElement ="relative block w-12 h-25 md:w-25 md:h-50 xl:w-55 xl:h-100 px-0.5 md:px-3";
    const ChildBlur ="absolute inset-0 bg-black/60 transition duration-1000 hover:opacity-0 grid place-items-center text-center";


  return (

    <div className="w-full py-6">

        <h1 className="font-bold text-4xl pb-12">Top Deals</h1>

    <div className="slider-container px-6 space-x-4">
      <Slider {...settings}>

        <div className={childElement}>
          <img src="images/women.webp" alt="" className="w-full h-full object-cover rounded-xl" />
          <div className={ChildBlur}>
            <span className="text-white font-bold text-sm md:text-2xl px-2 xl:text-5xl md:px-8 leading-8 md:leading-10 lg:leading-16">Get 20% off</span>
          </div>
        </div>

        <div className={childElement}>
            <img src="images/men.webp" alt="" className="w-full h-full object-cover rounded-xl" />
            <div className={ChildBlur}>
            <span className="text-white font-bold text-sm md:text-2xl px-2 xl:text-5xl md:px-8 leading-8 md:leading-10 lg:leading-16">Latest Launch</span>
          </div>
        </div>

          <div className={childElement}>
            <img src="images/sports.webp" alt="" className="w-full h-full object-cover rounded-xl" />
            <div className={ChildBlur}>
            <span className="text-white font-bold text-sm md:text-2xl px-2 xl:text-5xl md:px-8 leading-8 md:leading-10 lg:leading-16">Up-coming</span>
          </div>
        </div>

          <div className={childElement}>
            <img src="images/unisex.jpg" alt="" className="w-full h-full object-cover rounded-xl" />
            <div className={ChildBlur}>
            <span className="text-white font-bold text-sm md:text-2xl px-2 xl:text-5xl md:px-8 leading-8 md:leading-10 lg:leading-16">Get 25% off</span>
          </div>
        </div>

          <div className={childElement}>
            <img src="images/watch2.jpg" alt="" className="w-full h-full object-cover rounded-xl" />
            <div className={ChildBlur}>
            <span className="text-white font-bold text-sm md:text-2xl px-2 xl:text-5xl md:px-8 leading-8 md:leading-10 lg:leading-16">Buy 1 Get 1 Free</span>
          </div>
        </div>
        
                <div className={childElement}>
            <img src="images/women.webp" alt="" className="w-full h-full object-cover rounded-xl" />
            <div className={ChildBlur}>
            <span className="text-white font-bold text-sm md:text-2xl px-2 xl:text-5xl md:px-8 leading-8 md:leading-10 lg:leading-16">Get 20% off</span>
          </div>
        </div>

            <div className={childElement}>
            <img src="images/men.webp" alt="" className="w-full h-full object-cover rounded-xl" />
            <div className={ChildBlur}>
            <span className="text-white font-bold text-sm md:text-2xl px-2 xl:text-5xl md:px-8 leading-8 md:leading-10 lg:leading-16">Latest Launch</span>
          </div>
        </div>

          <div className={childElement}>
            <img src="images/sports.webp" alt="" className="w-full h-full object-cover rounded-xl" />
            <div className={ChildBlur}>
            <span className="text-white font-bold text-sm md:text-2xl px-2 xl:text-5xl md:px-8 leading-8 md:leading-10 lg:leading-16">Up-coming</span>
          </div>
        </div>

          <div className={childElement}>
            <img src="images/unisex.jpg" alt="" className="w-full h-full object-cover rounded-xl" />
            <div className={ChildBlur}>
            <span className="text-white font-bold text-sm md:text-2xl px-2 xl:text-5xl md:px-8 leading-8 md:leading-10 lg:leading-16">Get 25% off</span>
          </div>
        </div>

          <div className={childElement}>
            <img src="images/watch2.jpg" alt="" className="w-full h-full object-cover rounded-xl" />
            <div className={ChildBlur}>
            <span className="text-white font-bold text-sm md:text-2xl px-2 xl:text-5xl md:px-8 leading-8 md:leading-10 lg:leading-16">Buy 1 Get 1 Free</span>
          </div>
        </div>

      </Slider>
    </div>

    </div>
  );
}
