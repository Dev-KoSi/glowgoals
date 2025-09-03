import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Shop } from './pages/Shop'
import { Services } from './pages/Services'

export function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <HomePage/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/cosmetics',
      element: (
        <div>
          <Header/>
          <Shop/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/services',
      element: (
        <div>
          <Header/>
          <Services/>
          <Footer/>
        </div>
      )
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}