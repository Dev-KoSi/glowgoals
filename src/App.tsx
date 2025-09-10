import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Shop } from './pages/Shop'
import { Services } from './pages/Services'
import { Booking } from './pages/Booking'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { Cart } from './store/Cart'

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
    },
    {
      path: '/booking',
      element: (
        <div>
          <Header/>
          <Booking/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/contact',
      element: (
        <div>
          <Header/>
          <Contact/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/about',
      element: (
        <div>
          <Header/>
          <About/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/cart',
      element: (
        <div>
          <Header/>
          <Cart/>
          <Footer/>
        </div>
      )
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}