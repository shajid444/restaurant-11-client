import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Register from './component/Register/Register.jsx';
import Login from './component/Login/Login.jsx';
import Error from './component/Error/Error.jsx';
import FirebaseProvider from './component/firebase/FirebaseProvider.jsx';
import AllFood from './component/AllFood/AllFood.jsx';
import Gallery from './component/Gallery/Gallery.jsx';
import AddFood from './component/AddFood/AddFood.jsx';
import ViewDetails from './component/ViewDetails/ViewDetails.jsx';
import Purchase from './component/Purchase/Purchase.jsx';
import Modal from './component/Modal/Modal.jsx';
import MyAddedFood from './component/MyAddedFood/MyAddedFood.jsx';
import UpdatePage from './component/UpdatePage/UpdatePage.jsx';
import MyPurchaseItem from './component/MyPurchaseItem/MyPurchaseItem.jsx';
import PrivateRoute from './component/PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/allFood",
        element: <AllFood />,
        loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/foods`),
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails />,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`),
      },
      {
        path: "/purchase/:id",
        element:<PrivateRoute> <Purchase /> </PrivateRoute> ,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`),
      },
      {
        path: "/gallery",
        element: <Gallery/>,
      },
      {
        path: "/addFood",
        element: <PrivateRoute><AddFood/></PrivateRoute>,
      },
      {
        path: "/modal",
        element: <PrivateRoute><Modal/></PrivateRoute>,
      },
      {
        path: "/addedFood",
        element: <PrivateRoute><MyAddedFood/></PrivateRoute>,
        loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/addFood`),
      },
      {
        path: '/updatepage/:id',
        element: <UpdatePage></UpdatePage>,
        loader : ({params})=> fetch(`${import.meta.env.VITE_API_URL}/addFood/${params.id}`),
      },
      {
        path: '/myPurchaseItem',
        element: <PrivateRoute> <MyPurchaseItem></MyPurchaseItem> </PrivateRoute>,
        loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/purchase`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto bg-slate-300'>
    <HelmetProvider>
     <FirebaseProvider>
     <RouterProvider router={router} />
     </FirebaseProvider>

    </HelmetProvider>


    </div>

  </React.StrictMode>,
)
