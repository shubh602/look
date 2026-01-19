import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";


export function MainRoutes(){
    return(
    <Routes>
    
        <Route 
            index
            element={<HomePage />}
        />
            
    </Routes>
    )
    
}