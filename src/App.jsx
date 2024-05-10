
import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'

function App() {
  
  return (
    <>
     <Navbar></Navbar>
      <h1>Vite + React</h1>
      <Outlet></Outlet>
      <Footer></Footer>
     
    </>
  )
}

export default App
