
import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
// import Banner from './component/Banner/Banner'


function App() {
  
  return (
    <>
    {/* <Banner></Banner> */}

     <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
     
    </>
  )
}

export default App
