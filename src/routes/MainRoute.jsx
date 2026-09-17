import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { Footer } from "../component/footer";


export function MainRoutes(){
    return(
    <Routes>
    
        <Route 
            index
            element={
             <>   
            <HomePage />
            <Footer />
            </>
        }
        />

        
            
    </Routes>
    )
    
}