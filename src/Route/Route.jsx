import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../Layout/DashboardLayout'
import MainLayout from '../Layout/MainLayout'
import Dashboard from '../Pages/Dashboard/Dashboard'
import EditProfile from '../Pages/EditProfile/EditProfile'
import Home from '../Pages/Home/Home'
import Product from '../Pages/Product/Product'
import Products from '../Pages/Products/Products'
import Profile from '../Pages/Profile/Profile'



const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
         children:[
            {
                path: '/',
                element:<Home></Home>,
            },

            {
                path:'/products',
                loader:() => fetch(`https://dummyjson.com/products`),
                element:<Products></Products>
            },

            {
                path: '/products/:id',
                loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`),
                element: <Product></Product>
            },

            {
                path:'/dashboard',
                element:<DashboardLayout></DashboardLayout>,
                children: [
                    {
                        path:'/dashboard',
                        element:<Dashboard></Dashboard>
                    },
                    {
                        path:'/dashboard/profile',
                        element:<Profile></Profile>
                    },
                    {
                        path:'/dashboard/editProfile',
                        element:<EditProfile></EditProfile>
                    }
                ]
            }
        ]
         
    }
])

export default myCreatedRoute; 
