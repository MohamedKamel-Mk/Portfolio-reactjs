import React from 'react'
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

let routers = createBrowserRouter([
  {path:'', element:<Layout/>, children:[
    {index: true, element: <Home/>},
    {path:'about', element: <About/>},
    {path:'contact', element: <Contact/>},
    {path:'portfolio', element: <Portfolio/>},
    {path: '*', element: <Notfound/>},
  ]}
])
export default function App() {
  return <>
    <RouterProvider router={routers}></RouterProvider>
  </>
}