export type Product = {
    id: string,
    image: string,
    name: string,
    price: number,
    description: string,
    stock: number,
    skinType: string,
    category: string,
    brand: string,
    rating: {
        rate: number,
        count: {
            one: number,
            two: number,
            three: number,
            four: number,
            five: number
        }
    },
    reviews: []
}

export type Service = {
    id: string,
    image: string,
    name: string,
    price: string,
    duration: string,
    description: string,
    included: {},
    benefits: {}
}

export type Book = {
    name: string,
    phone: number,
    email: string,
    service: string,
    date: string,
    time: string,
    note?: string
}

export type Contact = {
    name: string,
    email: string,
    phone: number,
    subject: string,
    message: string
}

export type CartItem = {
    productId: string,
    quantity: number
}

export type Items = {
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>,
    cart: CartItem[]
}

export type Wishlist = {
    productId: string,
    date: string
}

export type Review = {
    id: string,
    productId: string,
    name: string,
    email: string,
    stars: number,
    note?: string
}

export type Checkout = {
    id: string,
    productId: {},
    firstName: string,
    lastName: string,
    email: string,
    phone: number,
    address: string,
    city: string,
    state: string,
    zipCode: number,
    country: string,
    paymentMethod: string,
    note?: string,
    orderSummary: {
        subtotal: number,
        tax: number,
        shipping: number
    },
    quantity?: number
}