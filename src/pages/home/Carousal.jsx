import { useEffect, useState } from "react"

const Detail=[
  {
    head:"1 Lorem ipsum",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo cumque laborum consectetur adipisicing elit.",
    btnName:'Click Me',
    img:'images/watch1.png'
  },
  {
    head:"2 Lorem ipsum",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo cumque laborum consectetur adipisicing elit.",
    btnName:'Click Me',
    img:'images/watch1.png'
  },
  {
    head:"3 Lorem ipsum",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo cumque laborum consectetur adipisicing elit.",
    btnName:'Click Me',
    img:'images/watch1.png'
  },
  {
    head:"4 Lorem ipsum",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo cumque laborum consectetur adipisicing elit.",
    btnName:'Click Me',
    img:'images/watch1.png'
  },
  {
    head:"5 Lorem ipsum",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo cumque laborum consectetur adipisicing elit.",
    btnName:'Click Me',
    img:'images/watch1.png'
  },
]

export function Carousal(){

  const [change,setChange]=useState(false)
  const [direction,setDirection]=useState(0)
  const [index,setIndex]=useState(0)


   function animate(dir){
   if(dir>0){
      if (index+dir <= Detail.length-1)setIndex(prev=>++prev) 
      else setIndex(0) 
     }
   else if(dir<0){
      if (index+dir<0)setIndex(Detail.length-1)
      else setIndex(prev=>--prev)  
     }
     
    setDirection(dir) 
    setChange(true)
    setTimeout(() => {
      setDirection(0)
      setChange(false)
    }, 1500);
  }

    useEffect(() => {
  const id = setInterval(() => {
    // animate(1);
  }, 4000);

  return () => clearInterval(id);
}, []);

    return(
     <div className="relative py-6 grid grid-cols-2 bg-black w-full h-[600px] px-4 overflow-hidden">

{/* Swap Page */}
        <div className={`${direction==1?'carousalOut':direction==-1?'carousalIn':'-translate-x-full'} px-4 absolute w-full h-full left-0 bg-black py-6 grid grid-cols-2`}>
            <div className="flex flex-col space-y-6 justify-center items-center">
            <h1 className="text-4xl  lg:text-5xl xl:text-7xl text-center pb-4 font-bold">{Detail[direction>0?index:index==Detail.length-1?0:index+1].head}</h1>
            <span className="text-sm lg:text-md xl:text-lg text-center">{Detail[index].desc}</span>
            <button className="w-fit bg-white text-black font-bold px-2 py-1 rounded-md text-xl">{Detail[index].btnName}</button>
            </div>
            <img src={Detail[index].img} alt="" className="h-[350px] lg:h-[400px] xl:h-[500px] ml-auto my-auto" />
        </div>
{/* Swap Page */}
       



{/* Real Page  */}
        <div className="flex flex-col space-y-6 justify-center items-center">
            <h1 className="text-4xl  lg:text-5xl xl:text-7xl text-center pb-4 font-bold">{Detail[direction>0?index==0?Detail.length-1:index-1:index].head}</h1>
            <span className="text-sm lg:text-md xl:text-lg text-center">{Detail[index].desc}</span>
            <button className="w-fit bg-white text-black font-bold px-2 py-1 rounded-md text-xl">{Detail[index].btnName}</button>
        </div>

        <img src={Detail[index].img} alt="" className="h-[350px] lg:h-[400px] xl:h-[500px] ml-auto my-auto" />
{/* Real Page  */}
        

                                       {/* Carousal Nav */}

      <div className="bottom-2 right-1/2 absolute flex items-center space-x-4">
          <button 
          className="text-white hover:text-gray-400 cursor-pointer w-fit rounded-full font-bold text-5xl"
           onClick={()=>animate(-1)}
          ><i class="fa-solid fa-angle-left"></i></button> 
          
          <div className=" text-2xl flex items-center justify-center space-x-2 font-bold rounded-2xl">
            {
              Detail.map((data,i)=>{
                return(
                    <span key={i} className={`p-1.5 text-[10px] rounded-full text-black w-fit h-fit ${i==index?'bg-white px-1.5':'bg-gray-500'} `}>{i==index?<i class="fa-solid fa-play"></i>:''}</span>    
                )
              })
            }
          </div>
          {/* <i class="fa-solid fa-pause"></i> */}
          {/* <i class="fa-solid fa-play"></i> */}
          <button className="text-white hover:text-gray-400 cursor-pointer w-fit font-bold text-5xl"
           onClick={()=>animate(1)}
          ><i class="fa-solid fa-angle-right"></i></button> 
      </div>

   </div>   
    )
}