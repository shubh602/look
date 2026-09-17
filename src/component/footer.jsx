


export function Footer(){

 const footerNav="w-fit border-b border-dotted border-black hover:border-white cursor-pointer"

    return(
<div className="bg-black text-white border-t-2 border-white">
        
        <footer className="md:hidden fixed bottom-0 bg-black/60 py-2 px-5 w-full flex justify-between text-2xl">
            <span><i class="fa-solid fa-house"></i></span>
            <span><i class="fa-solid fa-bag-shopping"></i></span>
            <span><i class="fa-solid fa-heart"></i></span>
            <span><i class="fa-solid fa-dolly"></i></span>
        </footer>



    <div className="w-full flex flex-col lg:flex-row space-y-10 px-8 pt-10 pb-5">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-14 space-y-8 font-light text-sm w-full lg:w-[70%]">
            <div className="flex flex-col space-y-3">
                <span className="font-bold text-lg whitespace-nowrap">COLLECTION</span>
                <span className={footerNav}>Noise</span>
                <span className={footerNav}>Boat</span>
                <span className={footerNav}>Mivi</span>
                <span className={footerNav}>Apple</span>
            </div>

            <div className="flex flex-col space-y-3">
                <span className="font-bold text-lg whitespace-nowrap">CUSTOMER SERVICE</span>
                <span className={footerNav}>Payment Option</span>
                <span className={footerNav}>Track Order</span>
                <span className={footerNav}>Encirlce Program</span>
            </div>

            <div className="flex flex-col space-y-3">
                <span className="font-bold text-lg whitespace-nowrap">CONTACT US</span>
                <span className={footerNav}>0000-0000-0000</span>
                <span className={footerNav}>customercare@look.co.in</span>
                <span className={footerNav}>Help & Contact</span>
                <span className={footerNav}>FaQs</span>
            </div>

            <div className="flex flex-col space-y-3">
                <span className="font-bold text-lg whitespace-nowrap">ABOUT LOOK</span>
                <span className={footerNav}>Brand Protection</span>
                <span className={footerNav}>Corporate</span>
                <span className={footerNav}>Careers</span>
                <span className={footerNav}>Blog</span>
            </div>
        </div>

        <div className="flex flex-col space-y-4 w-[30%] text-sm">

        <span className="font-bold text-sm md:text-xl">Follow Us :</span>
        <div className="flex space-x-4">
                <span className="bg-gray-800 px-0.5 rounded-full cursor-pointer text-2xl"><i class="fa-brands fa-facebook-f"></i></span>
                <span className="bg-gray-800 px-0.5 rounded-full cursor-pointer text-2xl"><i class="fa-brands fa-instagram"></i></span>
                <span className="bg-gray-800 px-0.5 rounded-full cursor-pointer text-2xl"><i class="fa-brands fa-x-twitter"></i></span>
        </div>

        <div className="flex space-x-4">
              <span className="font-bold pr-5 text-sm md:text-xl">Contact Us :</span>
              <div className="flex flex-col space-y-1">
                <span className={footerNav}>0000-0000-0000</span>
                <span className={footerNav}>customercare@look.co.in</span>
                <span className={footerNav}>Help & Contact</span>
              </div>              
        </div>

        </div>
    </div>

    <div className="w-full text-end whitespace-nowrap text-[13px] md:text-sm border-t-2 px-2 md:px-5 pb-14 md:pb-4">&#xA9; 2025 Look Company Limited. All Rights Rerserve</div>
</div>   
    )
}