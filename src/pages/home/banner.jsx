export function Banner(){
  return(
    <div className="pt-14 marquee bg-black border-b-4 border-gray-950">
  <div className="marquee-track text-white text-sm md:text-lg whitespace-nowrap space-x-24 md:space-x-96">

    <span className="flex space-x-2 text-sm font-bold items-center">
        <span><i class="fa-solid fa-cart-flatbed-suitcase"></i></span>
        <span><span className="">SALE is Live!</span></span>
    </span>

    <span className="flex space-x-2 text-sm font-bold items-center">
        <i class="fa-solid fa-percent"></i>
        <span className="">Get Flat 10% cashback</span>
    </span>
    
    <span className="flex space-x-2 text-sm font-bold items-center">
        <i class="fa-solid fa-hand-holding-dollar"></i>
        <span className="">Get Upto 15% Cashback via Scratch Card</span>
    </span>
    
  </div>
</div>


  )
}