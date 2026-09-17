import { useEffect, useState } from "react"

export function Header(){

  const [nav,setNav]=useState(false);
  const [icon,setIcon]=useState(false);
  const [animate,setAnimate]=useState(false);
  const [show, setShow] = useState({
  menu1: false,
  menu2: false,
  menu3: false,
  menu4: false,
});

       
              // DropDown
useEffect(()=>{
  const handleResize=()=>{
    if(window.innerWidth>=768) setAll(true)
    else if(window.innerWidth<768)setAll(false)
  }
  window.addEventListener("resize",handleResize)
  handleResize()

    return()=>window.removeEventListener("resize",handleResize)
},[])


const setAll=(value)=>{
  setShow(prev=>
    Object.fromEntries(
      Object.keys(prev).map(key=>[key,value])
    )
  )
}

                
const dropdown = (menu) => {
  if(window.innerWidth < 768){
        setShow((prev) => ({
        ...prev,
        [menu]: !prev[menu],
      }));
  }
};



                    // Nav Icon Animation

  useEffect(()=>{
    setAnimate(true)
  const timer= setTimeout(() => {
      setIcon(nav)
      setAnimate(false)
    }, 300);
    return()=> clearTimeout(timer)
  },[nav])


 function changeNav(){
      if(nav){
        setNav(false)
      }else if(!nav){
        setNav(true)
      }
 }   
// flex flex-col md:flex-row flex-wrap
return(

<>

<div className={`w-full z-50 bg-black h-fit md:h-dvh absolute md:fixed transition-all duration-500 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5
  space-x-6 py-24 px-10 items-start space-y-5 md:space-y-10 justify-between
${nav?'translate-y-0':'-translate-y-full'}`}>
    

  <div className="flex flex-col font-semibold  text-2xl space-y-4 md:space-y-5 lg:space-y-7 lg:text-5xl  cursor-pointer">
    <span className="hover:text-gray-200">Home</span>
    <span className="hover:text-gray-200">About</span>
    <span className="hover:text-gray-200">Shop</span>
    <span className="hover:text-gray-200">Cart</span>
    <span className="hover:text-gray-200">Orders</span>
    <span className="hover:text-gray-200">Contact</span>
  </div>

{/* ------- MENU 1 ------- */}
<div className="">
  <button onClick={() => dropdown("menu1")} className="flex items-center gap-2">
    <span className="font-semibold text-2xl lg:text-5xl cursor-pointer">Men</span>
    <span className="md:hidden py-1 rounded-full">
    <i
      className={`fa-solid fa-chevron-down transition text-sm 
      ${show.menu1 ? "rotate-180" : ""}`}
    />
    </span>
  </button>

  {show.menu1 && (
    <div className="shadow-lg lg:text-2xl font-light p-3 rounded-lg mt-2 w-40 space-y-3 border-white">
      <p className="w-fit px-1.5 cursor-pointer whitespace-nowrap hover:border-white border-b border-dotted border-black">Smart</p>
      <p className="w-fit px-1.5 cursor-pointer whitespace-nowrap hover:border-white border-b border-dotted border-black">Sports</p>
      <p className="w-fit px-1.5 cursor-pointer whitespace-nowrap hover:border-white border-b border-dotted border-black">Classic</p>
      <p className="w-fit px-1.5 cursor-pointer whitespace-nowrap hover:border-white border-b border-dotted border-black">Analog</p>
    </div>
  )}
</div>


{/* ------- MENU 2 ------- */}
<div className="">
  <button onClick={() => dropdown("menu2")} className="flex items-center gap-2">
    <span className="font-semibold text-2xl lg:text-5xl cursor-pointer">Women</span>
    <span className="md:hidden py-1 rounded-full">
     <i
      className={`fa-solid fa-chevron-down transition  text-sm
      ${show.menu2 ? "rotate-180" : ""}`}
    /> 
    </span>
    

  </button>

  {show.menu2 && (
    <div className="shadow-lg lg:text-2xl font-light p-3 rounded-lg mt-2 w-40 space-y-3 border-white">
      <p className="w-fit px-1.5 cursor-pointer whitespace-nowrap hover:border-white border-b border-dotted border-black">Shoes</p>
      <p className="w-fit px-1.5 cursor-pointer whitespace-nowrap hover:border-white border-b border-dotted border-black">Clothes</p>
      <p className="w-fit px-1.5 cursor-pointer whitespace-nowrap hover:border-white border-b border-dotted border-black">Accessories</p>
    </div>
  )}
</div>


{/* ------- MENU 3 ------- */}
<div className="">
  <button onClick={() => dropdown("menu3")} className="flex items-center gap-2">
    <span className="font-semibold text-2xl lg:text-5xl cursor-pointer">Unisex</span>
    <span className="md:hidden py-1 rounded-full">
    <i className={`fa-solid fa-chevron-down transition  text-sm
      ${show.menu3 ? "rotate-180" : ""}`}/>
    </span>
  </button>

  {show.menu3 && (
    <div className="shadow-lg lg:text-2xl font-light p-3 rounded-lg mt-2 w-40 space-y-3 border-white">
      <p className="w-fit px-1.5 cursor-pointer whitespace-nowrap hover:border-white border-b border-dotted border-black">Smart</p>
      <p className="w-fit px-1.5 cursor-pointer whitespace-nowrap hover:border-white border-b border-dotted border-black">Sports</p>
      <p className="w-fit px-1.5 cursor-pointer whitespace-nowrap hover:border-white border-b border-dotted border-black">Classic</p>
      <p className="w-fit px-1.5 cursor-pointer whitespace-nowrap hover:border-white border-b border-dotted border-black">Analog</p>
    </div>
  )}
</div>


{/* ------- MENU 4 ------- */}
<div className="">
  <button onClick={() => dropdown("menu4")} className="flex items-center gap-2">
    <span className="font-semibold text-2xl lg:text-5xl cursor-pointer">Sports</span>
    <span className="md:hidden py-1 rounded-full">
    <i className={`fa-solid fa-chevron-down transition  text-sm
      ${show.menu4 ? "rotate-180" : ""}`}/>
    </span>
  </button>

  {show.menu4 && (
    <div className="shadow-lg lg:text-2xl font-light p-3 rounded-lg mt-2 w-40 space-y-3 border-white">
      <p className="w-fit px-1.5 cursor-pointer whitespace-nowrap hover:border-white border-b border-dotted border-black">Shoes</p>
      <p className="w-fit px-1.5 cursor-pointer whitespace-nowrap hover:border-white border-b border-dotted border-black">Clothes</p>
      <p className="w-fit px-1.5 cursor-pointer whitespace-nowrap hover:border-white border-b border-dotted border-black">Accessories</p>
    </div>
  )}
</div>



  <div className=""></div>
</div>

<div className="fixed z-50 w-full flex bg-black/80 text-white py-2 px-4 md:px-10">

    <span className="cursor-pointer font-bold text-2xl">LOOK</span>

    <div className="flex items-center space-x-2 ml-auto">

          <div className="text-black">
            <span className="absolute ml-1 mt-1"><i className="fa-solid fa-magnifying-glass"></i></span>
           <input type="text" name="" id="" placeholder="Search For Watch Brand And More" className="w-22 md:w-72 lg:w-98 bg-white py-1 pl-8 rounded-2xl outline-none" /> 
          </div> 

          <div className="hidden md:block flex flex-row space-x-4 px-4 text-xl">

            <span title="Wishlist" className="cursor-pointer"><i className="fa-solid fa-heart"></i></span>
            <span title="Cart" className="cursor-pointer"><i className="fa-solid fa-bag-shopping"></i></span>
            <span className="cursor-pointer"><i className="fa-solid fa-dolly"></i></span>

          </div>

          <span className="z-50 text-white cursor-pointer "
            onClick={()=>changeNav()}
          >
            
            <i className={`fa-solid text-2xl  transition-all  duration-500 
              ${icon?'block fa-x text-red-500':'fa-bars hidden'}
              ${animate?'opacity-0 rotate-y-180':'opacity-100 rotate-y-0'}
              
            `}></i>
            

            
          </span>

    </div>    
</div>
</>
    )
}
