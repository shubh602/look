
export function Category(){
    return(
        <div className="w-full py-3">

              <h1 className="font-bold md:text-4xl pb-12">Category</h1>  

              <div className="flex items-center justify-between text-sm md:text-lg font-bold space-x-7 text-gray-200">

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
                {/* <div className="flex flex-col justify-center items-center space-y-3 cursor-pointer hover:text-white">
                    <img src="images/unisex.jpg" className="rounded-full w-12 h-12 md:w-30 md:h-30" />
                    <span>Smart</span>
                </div>    */}


                
                <div className=""></div>
              </div>
        </div>
    )
}