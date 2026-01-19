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


export function Category() {

  return (

    <div className="w-full py-3">

        <h1 className="font-bold md:text-4xl pb-12">Category</h1>  

    <div className="slider-container px-6">
      <Slider {...settings}>

        {/* child element */}
                <div className="flex flex-col justify-center items-center space-y-3 cursor-pointer hover:text-white">
                    <img src="images/men.webp" className="rounded-full w-12 h-12 md:w-30 md:h-30" />
                    <span>Men</span>
                </div>

            {/* child element */}
                <div className="flex flex-col justify-center items-center space-y-3 cursor-pointer hover:text-white">
                    <img src="images/women.webp" className="rounded-full w-12 h-12 md:w-30 md:h-30" />
                    <span>Women</span>
                </div>

          {/* child element */}
                <div className="flex flex-col justify-center items-center space-y-3 cursor-pointer hover:text-white">
                    <img src="images/unisex.jpg" className="rounded-full w-12 h-12 md:w-30 md:h-30" />
                    <span>Unisex</span>
                </div>

          {/* child element */}
                <div className="flex flex-col justify-center items-center space-y-3 cursor-pointer hover:text-white">
                    <img src="images/sports.webp" className="rounded-full w-12 h-12 md:w-30 md:h-30" />
                    <span>Sports</span>
                </div>

          {/* child element */}
                <div className="flex flex-col justify-center items-center space-y-3 cursor-pointer hover:text-white">
                    <img src="images/unisex.jpg" className="rounded-full w-12 h-12 md:w-30 md:h-30" />
                    <span>Smart</span>
                </div>   
        {/* child element */}
                <div className="flex flex-col justify-center items-center space-y-3 cursor-pointer hover:text-white">
                    <img src="images/men.webp" className="rounded-full w-12 h-12 md:w-30 md:h-30" />
                    <span>Men</span>
                </div>

            {/* child element */}
                <div className="flex flex-col justify-center items-center space-y-3 cursor-pointer hover:text-white">
                    <img src="images/women.webp" className="rounded-full w-12 h-12 md:w-30 md:h-30" />
                    <span>Women</span>
                </div>

          {/* child element */}
                <div className="flex flex-col justify-center items-center space-y-3 cursor-pointer hover:text-white">
                    <img src="images/unisex.jpg" className="rounded-full w-12 h-12 md:w-30 md:h-30" />
                    <span>Unisex</span>
                </div>

          {/* child element */}
                <div className="flex flex-col justify-center items-center space-y-3 cursor-pointer hover:text-white">
                    <img src="images/sports.webp" className="rounded-full w-12 h-12 md:w-30 md:h-30" />
                    <span>Sports</span>
                </div>

          {/* child element */}
                <div className="flex flex-col justify-center items-center space-y-3 cursor-pointer hover:text-white">
                    <img src="images/unisex.jpg" className="rounded-full w-12 h-12 md:w-30 md:h-30" />
                    <span>Smart</span>
                </div>   

      </Slider>
    </div>

    </div>
  );
}

