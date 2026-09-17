import { Carousal } from "./Carousal"
import { TopChart } from "./TopChart"
import { Deals } from "./DealsCarousal"
import { Product } from "./product"

// import {Category} from "./categoryCarousal"
// import { MyCarousel } from "./MyCarousel"
// import { Banner } from "./banner"


export function HomePage(){
    return(
    <div className="overflow-x-hidden">
             <Carousal />   
             <TopChart />
             <Deals />
             <Product />


    </div>    
    )
}