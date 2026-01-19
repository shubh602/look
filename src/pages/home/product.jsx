import { ProductCard } from "../../component/Product-Card"

export function Product(){
 return(
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-6 space-y-6 lg:space-x-14 lg:space-y-14">

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

        <div className=""></div>
    </div>  
 )
}