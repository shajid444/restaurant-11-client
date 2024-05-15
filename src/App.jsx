
import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
// import { ToastContainer } from 'react-toastify'
import { ToastContainer, toast } from 'react-toastify';
// import Banner from './component/Banner/Banner'


function App() {
  
  return (
    <>
    {/* <Banner></Banner> */}

     <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
     
    </>
  )
}

export default App
