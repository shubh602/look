import { useState } from "react"

const Detail=[
  {
    head:"1 Lorem ipsum",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo cumque laborum consectetur adipisicing elit.",
    btnName:'Click Me',
    img:'images/sports.webp'
  },
  {
    head:"2 Lorem ipsum",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo cumque laborum consectetur adipisicing elit.",
    btnName:'Click Me',
    img:'images/sports.webp'
  },
  {
    head:"3 Lorem ipsum",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo cumque laborum consectetur adipisicing elit.",
    btnName:'Click Me',
    img:'images/sports.webp'
  },
  {
    head:"4 Lorem ipsum",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo cumque laborum consectetur adipisicing elit.",
    btnName:'Click Me',
    img:'images/sports.webp'
  },
  {
    head:"5 Lorem ipsum",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo cumque laborum consectetur adipisicing elit.",
    btnName:'Click Me',
    img:'images/sports.webp'
  },
]

export function Carousal(){

  const [change,setChange]=useState(false)

  function animate(){
    setChange(true)
    setTimeout(() => {
      setChange(false)
    }, 1500);
  }
  console.log(change);

  
  

    return(
     <div className="flex "
     ></div>   
    )
}