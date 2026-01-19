
export function TopChart(){

const childElement="relative w-12 h-25 md:w-25 md:h-50 xl:w-55 xl:h-100 -skew-16 hover:-skew-8 transition-all duration-700";
const ChildBlur="absolute inset-0 bg-black/50 hover:opacity-0 transition duration-1000"

    return(
<div className="w-full py-6">
    <h1 className="font-bold text-4xl pb-12">Top On Chart</h1>
        
    <div className="flex flex-wrap space-x-2 space-y-4 justify-between">

        <div className={`${childElement}`}>
            <img src="images/men.webp" alt="" className='w-full h-full rounded-xl' />
            <div className={`${ChildBlur}`} />
        </div>

        <div className={`${childElement}`}>
            <img src="images/sports.webp" alt="" className='w-full h-full rounded-xl' />
            <div className={`${ChildBlur}`} />
        </div>

        <div className={`${childElement}`}>
            <img src="images/unisex.jpg" alt="" className='w-full h-full rounded-xl' />
            <div className={`${ChildBlur}`} />
        </div>

        <div className={`${childElement}`}>
            <img src="images/watch2.jpg" alt="" className='w-full h-full rounded-xl' />
            <div className={`${ChildBlur}`} />
        </div>

        <div className={`${childElement}`}>
            <img src="images/women.webp" alt="" className='w-full h-full rounded-xl' />
            <div className={`${ChildBlur}`} />
        </div>


        <div className=""></div>
    </div>    
</div>
    )
}