import type { Cart, Wishlist } from "../types/Types";

export let cart: Cart[] = [];

const saved = localStorage.getItem('cart');
if(saved) {
    try {
        cart = JSON.parse(saved) as Cart[];
    } catch (e) {
        console.error("Failed to parse cart from localStorage", e);
        cart = [];
    }
}

export let wishlist: Wishlist[] = [];