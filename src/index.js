import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar';
import Body from './body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import NextVideo from './nextVideo';
const App=()=>{
  return <div>
    <Navbar/>
    <Outlet/>
  </div>
}
const ways=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
    element:<Body/>,
      },
      {
        path:"/videos/:id",
        element:<NextVideo/>
      }
    ]
  },
 

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={ways}/>);
