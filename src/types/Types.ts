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
    reviews:string []
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

export type CartWish = {
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>,
    cart: CartItem[],
    setWishlist: React.Dispatch<React.SetStateAction<Wish[]>>,
    wishlist: Wish[],
    setNotification?: React.Dispatch<React.SetStateAction<string>>,
    notification?: string
}

export type Wish = {
    productId: string,
    date?: string
}

export type Wishes = {
    setWishlist: React.Dispatch<React.SetStateAction<Wish[]>>,
    wishlist: Wish[]
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

// SERVICES TYPE

export type ServiceItem = {
    id: string;
    name: string;
    image: string;
    duration: string;
    price: string;
    description: string;
    included: string[];
    benefits: string[];
    category:
        | "Facial Treatments"
        | "Makeup Services"
        | "Skincare Consultation"
        | "Body Treatments"
        | "Nail Services"
        | "Hair Treatments";
};