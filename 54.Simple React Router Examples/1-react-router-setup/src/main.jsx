import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import First from './components/First/First.jsx';
import Friends from './components/Friends/Friends.jsx';
import FriendDetails from './components/FriendDetails/FriendDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';



// const router = createBrowserRouter([
//   {
//     path: '/',
//     // element: <div><h1>This is the default main content</h1></div>
//     element: <App></App>
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   }
// ])


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <First></First>
      },
      {
        path: 'friends',
        element: <Friends></Friends>,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`)
      },
      {
        path: 'friend/:friendId',
        element: <FriendDetails></FriendDetails>,
        // loader: ({params}) => console.log(params)
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'posts/:postsId',
        element: <PostDetails></PostDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsId}`)
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header></Header> এভাবে ব্যবহার করে না  */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
