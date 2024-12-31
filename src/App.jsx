import React from 'react'
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Cards from './pages/Cards'
import Card from './pages/Card'
import AppLayout from './components/layouts/AppLayout'
import Error404 from './components/UI/Error'


const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <AppLayout />,
      errorElement: <Error404 />,
      children: [
        {
          path:'/',
          element: <Home />
        },
        {
          path:'/cards',
          element: <Cards />
        },
        {
          path:'/cards/:id',
          element: <Card />
        }
      ]
    }
    
    
    

  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
