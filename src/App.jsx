import './App.css'
import { Header } from './component/header'
import { MainRoutes } from './routes/MainRoute'
import { Footer } from './component/footer'


function App() {
  return (
    <div className='text-white bg-black '>
    <Header />
    <MainRoutes />  
    {/* <Footer /> */}
    </div>
  )
}

export default App
