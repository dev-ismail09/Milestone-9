import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './components/Header/Header.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Foods from './components/Foods/Foods.jsx';
import FoodDetails from './components/FoodDetails/FoodDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    children: [
      {
        path: '/portfolio',
        element: <Portfolio></Portfolio>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/hireMe'
      },
      {
        path: '/foods',
        element: <Foods></Foods>,
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      },
      {
        path: 'foods/:foodsId',
        element: <FoodDetails></FoodDetails>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodsId}`)
        // loader: ({params}) => console.log(params.foodsId)
      },
      {
        path: '*',
        element: <h1 className='text-5xl text-center mt-5'>404 Page</h1>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
