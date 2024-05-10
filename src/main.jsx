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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
    <HelmetProvider>
     <FirebaseProvider>
     <RouterProvider router={router} />
     </FirebaseProvider>

    </HelmetProvider>


    </div>

  </React.StrictMode>,
)
