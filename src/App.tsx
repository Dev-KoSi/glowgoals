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
import { Wishlist } from './store/Wishlist'
import { ViewProduct } from './pages/ViewProduct'
import { Purchase } from './pages/Purchase'
import { Checkout } from './pages/Checkout'

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
    },
    {
      path: '/wishlist',
      element: (
        <div>
          <Header/>
          <Wishlist/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/cosmetics/:id',
      element: (
        <div>
          <Header/>
          <ViewProduct/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/purchase/:id',
      element: (
        <div>
          <Header/>
          <Purchase/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/checkout',
      element: (
        <div>
          <Header/>
          <Checkout/>
          <Footer/>
        </div>
      )
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}