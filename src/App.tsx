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
import { ViewProduct } from './params/ViewProduct'
import { Purchase } from './params/Purchase'
import { Checkout } from './pages/Checkout'
import { MyBooking } from './store/MyBooking'
import { ViewService } from './params/ViewService'
import { BookService } from './params/BookService'
import { useEffect, useState } from 'react'
import type { CartItem, Wish } from './types/Types'

export function App() {

    const [cart, setCart] = useState<CartItem[]>(() => {
        try {
            const saved = localStorage.getItem("cart")
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.log(e)
            return [];
        }
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const [wishlist, setWishlist] = useState<Wish[]>(() => {
        try {
            const saved = localStorage.getItem("wish")
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.log(e)
            return [];
        }
    })

    useEffect(() => {
        localStorage.setItem("wish", JSON.stringify(wishlist));
    }, [wishlist]);

    // NOTIFICATIONS

    const [notification, setNotification] = useState<string>('');
    console.log(notification);
    

    useEffect(() => {
        const timer = setTimeout(() => setNotification(''), 2000);
        
        return () => clearTimeout(timer);
    }, [notification]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <HomePage cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} notification={notification} setNotification={setNotification}/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/cosmetics',
      element: (
        <div>
          <Header cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} notification={notification}/>
          <Shop cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} setNotification={setNotification}/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/services',
      element: (
        <div>
          <Header cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} notification={notification}/>
          <Services/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/booking',
      element: (
        <div>
          <Header cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} notification={notification}/>
          <Booking/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/contact',
      element: (
        <div>
          <Header cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} notification={notification}/>
          <Contact/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/about',
      element: (
        <div>
          <Header cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} notification={notification}/>
          <About/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/cart',
      element: (
        <div>
          <Header cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} notification={notification}/>
          <Cart cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} setNotification={setNotification}/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/wishlist',
      element: (
        <div>
          <Header cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} notification={notification}/>
          <Wishlist cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist}/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/cosmetics/:id',
      element: (
        <div>
          <Header cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} notification={notification}/>
          <ViewProduct cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist}/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/purchase/:id',
      element: (
        <div>
          <Header cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} notification={notification}/>
          <Purchase/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/checkout',
      element: (
        <div>
          <Header cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} notification={notification}/>
          <Checkout  cart={cart} setCart={setCart}/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/my-booking',
      element: (
        <div>
          <Header cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} notification={notification}/>
          <MyBooking/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/services/:id',
      element: (
        <div>
          <Header cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} notification={notification}/>
          <ViewService/>
          <Footer/>
        </div>
      )
    },
    {
      path: '/booking/:id',
      element: (
        <div>
          <Header cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} notification={notification}/>
          <BookService/>
          <Footer/>
        </div>
      )
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}