import {Category} from "./categoryCarousal"
import { MyCarousel } from "./MyCarousel"
import { TopChart } from "./TopChart"
import { Deals } from "./DealsCarousal"
import { Product } from "./product"
import { Banner } from "./banner"
import { Carousal } from "./Carousal"


export function HomePage(){
    return(
    <>
        <Banner />
        <div className="text-white bg-black space-y-10 md:space-y-20">
         <Carousal />   
            {/* <MyCarousel />
            <Category />
            <TopChart />
            <Deals />
            <Product /> */}
        </div>
    </>    
    )
}