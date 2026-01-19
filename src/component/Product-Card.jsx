export function ProductCard(){
    return(
        <div className="cursor-pointer relative flex flex-col px-1 space-y-0.5 text-[12px] md:text-lg hover:shadow-2xs shadow-gray-500">
            <span className="z-10 absolute top-5 right-5 text-sm md:text-2xl hover:text-red-300"><i class="fa-regular fa-heart"></i></span>
               <img src="images/men.webp" alt="" className="w-full rounded-xl hover:scale-105" /> 
               <span className="font-semibold flex space-x-2 items-center">
                    <span>(4.5)</span>                      
                    <span className="flex flex-row text-yellow-500">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half"></i>
                    </span>
               </span>
               <span className="">
                   <span className="font-bold pr-3">Titanic |</span> 
                    Smart Watch
               </span> 
               <span className="line-clamp-2 font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit soluta accusantium consequatur temporibus sequi?</span>
               
              <span className="py-2">
                <span className="font-bold pr-2">&#x20B9;</span>
                4,000  
              </span>

        </div>
    )
}