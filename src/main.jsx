import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

const myCreatedRoute = createBrowserRouter([
  {
  path:'/',
  element:<section>
    <div>This is a fixed item</div>
    <Outlet></Outlet>
    </section>,
    children:[
      {
        path:'/',
        element: <div>This is home route</div>
      },
      {
        path: '/products',
        element: <div>This is Product page</div>
      }
    ]
  },
  
])






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router ={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
 