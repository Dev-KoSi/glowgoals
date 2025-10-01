import type { Product } from "./Types";

export const products: Product[] = [
    {
        id: "x9F2aK7Lm0Qz",
        image: "/serum1.jpg",
        name: "Hydrating Hyaluronic Serum",
        price: 374.88,
        description: "Deeply hydrates and plumps skin with pure hyaluronic acid.",
        stock: 45,
        skinType: "All",
        category: "Skincare",
        brand: "GlowCare",
        rating: {
            rate: 4.6,
            count: { one: 3, two: 5, three: 8, four: 22, five: 62 }
        },
        reviews: []
    },
    {
        id: "w7Tr8QmZ5B2L",
        image: "/cleanser1.webp",
        name: "Gentle Foaming Cleanser",
        price: 231.25,
        description: "Removes impurities without stripping natural oils.",
        stock: 60,
        skinType: "Sensitive",
        category: "Skincare",
        brand: "PureSkin",
        rating: {
            rate: 4.4,
            count: { one: 2, two: 4, three: 12, four: 30, five: 50 }
        },
        reviews: []
    },
    {
        id: "k3Jt9VzF1N6c",
        image: "/foundation1.jpg",
        name: "Long-Wear Matte Foundation",
        price: 437.5,
        description: "Full coverage foundation with a matte finish that lasts all day.",
        stock: 80,
        skinType: "Oily",
        category: "Makeup",
        brand: "LuxeBeauty",
        rating: {
            rate: 4.7,
            count: { one: 1, two: 3, three: 10, four: 35, five: 72 }
        },
        reviews: []
    },
    {
        id: "m8Qp4H2zX1Rj",
        image: "/lipstick1.jpg",
        name: "Velvet Matte Lipstick - Crimson Red",
        price: 275.0,
        description: "Rich, bold red lipstick with a smooth matte finish.",
        stock: 120,
        skinType: "All",
        category: "Makeup",
        brand: "ColorPop",
        rating: {
            rate: 4.8,
            count: { one: 2, two: 2, three: 5, four: 20, five: 95 }
        },
        reviews: []
    },
    {
        id: "t6Bf1Y8vP3Ln",
        image: "/mascara1.jpg",
        name: "Volumizing Waterproof Mascara",
        price: 243.75,
        description: "Adds dramatic volume and lasts all day without smudging.",
        stock: 95,
        skinType: "All",
        category: "Makeup",
        brand: "LashLux",
        rating: {
            rate: 4.5,
            count: { one: 3, two: 5, three: 15, four: 25, five: 70 }
        },
        reviews: []
    },
    {
        id: "z4Gh5N9eU0Wb",
        image: "/moisturizer1.jpg",
        name: "Daily Hydrating Moisturizer",
        price: 325.0,
        description: "Lightweight moisturizer with aloe and vitamin E.",
        stock: 75,
        skinType: "Dry",
        category: "Skincare",
        brand: "AquaDerm",
        rating: {
            rate: 4.3,
            count: { one: 4, two: 6, three: 18, four: 40, five: 48 }
        },
        reviews: []
    },
    {
        id: "p1Dn6S3oF7Kv",
        image: "/toner1.jpg",
        name: "Brightening Vitamin C Toner",
        price: 274.88,
        description: "Evens skin tone and restores natural radiance.",
        stock: 50,
        skinType: "All",
        category: "Skincare",
        brand: "C-Glow",
        rating: {
            rate: 4.2,
            count: { one: 5, two: 10, three: 12, four: 28, five: 35 }
        },
        reviews: []
    },
    {
        id: "q2Lm9A7kX8Jf",
        image: "/shampoo1.jpg",
        name: "Repair & Strengthen Shampoo",
        price: 199.88,
        description: "Repairs damaged hair and strengthens from root to tip.",
        stock: 110,
        skinType: "N/A",
        category: "Hair Care",
        brand: "SilkStrands",
        rating: {
            rate: 4.6,
            count: { one: 2, two: 6, three: 10, four: 33, five: 60 }
        },
        reviews: []
    },
    {
        id: "y5Vg2Q1rT9Zn",
        image: "/conditioner1.webp",
        name: "Argan Oil Conditioner",
        price: 224.88,
        description: "Deeply nourishes and smooths frizz-prone hair.",
        stock: 95,
        skinType: "N/A",
        category: "Hair Care",
        brand: "SilkStrands",
        rating: {
            rate: 4.5,
            count: { one: 1, two: 3, three: 14, four: 30, five: 72 }
        },
        reviews: []
    },
    {
        id: "r7Kx3E0uL4Hp",
        image: "/perfume1.avif",
        name: "Bloom Eau de Parfum",
        price: 812.5,
        description: "A fresh floral fragrance with jasmine and tuberose.",
        stock: 40,
        skinType: "N/A",
        category: "Fragrance",
        brand: "Fleuré",
        rating: {
            rate: 4.9,
            count: { one: 0, two: 2, three: 3, four: 12, five: 90 }
        },
        reviews: []
    },
    {
        id: "h6Pn2X4dW9Rc",
        // image: "/images/products/perfume2.jpg",
        image: "/perfume1.avif",
        name: "Midnight Oud",
        price: 1000.0,
        description: "A deep, luxurious fragrance with oud and amber.",
        stock: 25,
        skinType: "N/A",
        category: "Fragrance",
        brand: "Elixir",
        rating: {
            rate: 4.8,
            count: { one: 1, two: 2, three: 6, four: 15, five: 80 }
        },
        reviews: []
    },
    {
        id: "n3Vt5Z8qS1Fk",
        // image: "/images/products/facemask1.jpg",
        image: "/serum1.jpg",
        name: "Clay Detox Face Mask",
        price: 249.88,
        description: "Purifies pores and reduces excess oil.",
        stock: 55,
        skinType: "Oily",
        category: "Skincare",
        brand: "EarthGlow",
        rating: {
            rate: 4.4,
            count: { one: 2, two: 7, three: 10, four: 25, five: 50 }
        },
        reviews: []
    },
    {
        id: "f2Qw7Y1mN8Zp",
        // image: "/images/products/sunscreen1.jpg",
        image: "/conditioner1.webp",
        name: "SPF 50 Mineral Sunscreen",
        price: 306.25,
        description: "Broad spectrum sun protection with zinc oxide.",
        stock: 65,
        skinType: "Sensitive",
        category: "Skincare",
        brand: "SafeSun",
        rating: {
            rate: 4.5,
            count: { one: 1, two: 4, three: 15, four: 30, five: 65 }
        },
        reviews: []
    },
    {
        id: "g9Jk4T6rB2Lp",
        // image: "/images/products/eyeshadow1.jpg",
        image: "/shampoo1.jpg",
        name: "Eyeshadow Palette - 12-Colors",
        price: 337.5,
        description: "Highly pigmented colors for every look.",
        stock: 85,
        skinType: "All",
        category: "Makeup",
        brand: "ColorPop",
        rating: {
            rate: 4.6,
            count: { one: 3, two: 5, three: 12, four: 30, five: 70 }
        },
        reviews: []
    },
    {
        id: "u5Rm1L8yV7Ns",
        // image: "/images/products/highlighter1.jpg",
        image: "/toner1.jpg",
        name: "Shimmer Glow Highlighter",
        price: 250.0,
        description: "Adds a radiant, luminous glow to your look.",
        stock: 70,
        skinType: "All",
        category: "Makeup",
        brand: "GlowCare",
        rating: {
            rate: 4.3,
            count: { one: 2, two: 6, three: 14, four: 28, five: 50 }
        },
        reviews: []
    },
    {
        id: "a4Bn7M3xK5Vz",
        // image: "/images/products/hairserum1.jpg",
        image: "/moisturizer1.jpg",
        name: "Keratin Hair Serum",
        price: 281.25,
        description: "Repairs split ends and smooths frizz instantly.",
        stock: 90,
        skinType: "N/A",
        category: "Hair Care",
        brand: "SilkStrands",
        rating: {
            rate: 4.4,
            count: { one: 3, two: 4, three: 11, four: 32, five: 60 }
        },
        reviews: []
    },
    {
        id: "e1Xv6J9oC8Tf",
        // image: "/images/products/bodylotion1.jpg",
        image: "/perfume-spray-bottle-isolated_93675-123583.jpg",
        name: "Coconut Body Lotion",
        price: 200.0,
        description: "Moisturizes deeply with coconut oil and shea butter.",
        stock: 100,
        skinType: "Dry",
        category: "Skincare",
        brand: "AquaDerm",
        rating: {
            rate: 4.7,
            count: { one: 1, two: 3, three: 7, four: 20, five: 85 }
        },
        reviews: []
    },
    {
        id: "j0Zc8P5hW2Qr",
        // image: "/images/products/foundation2.jpg",
        image: "/perfume-bottles-isolated-against-white_127657-12258.jpg",
        name: "Glowy Foundation",
        price: 412.5,
        description: "Lightweight foundation with radiant finish.",
        stock: 75,
        skinType: "Normal",
        category: "Makeup",
        brand: "LuxeBeauty",
        rating: {
            rate: 4.5,
            count: { one: 2, two: 5, three: 13, four: 27, five: 65 }
        },
        reviews: []
    },
    {
        id: "o8Hl2S7dK6Mp",
        // image: "/images/products/eyeliner1.jpg",
        image: "/bottle-perfume_266732-14623.jpg",
        name: "Precision Liquid Eyeliner",
        price: 187.5,
        description: "Smudge-proof eyeliner for perfect wings.",
        stock: 130,
        skinType: "All",
        category: "Makeup",
        brand: "LashLux",
        rating: {
            rate: 4.6,
            count: { one: 2, two: 4, three: 9, four: 28, five: 75 }
        },
        reviews: []
    },
    {
        id: "s6Ck3V1nR9Xp",
        // image: "/images/products/facemist1.jpg",
        image: "/high-angle-view-pen-table_1048944-18511898.jpg",
        name: "Rose Hydrating Face Mist",
        price: 187.38,
        description: "Refreshes and hydrates throughout the day.",
        stock: 115,
        skinType: "All",
        category: "Skincare",
        brand: "GlowCare",
        rating: {
            rate: 4.4,
            count: { one: 3, two: 6, three: 15, four: 28, five: 65 }
        },
        reviews: []
    }
];


export let aZ: Product[] = [];

const letters: any = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let count: number = 0;

for (let alpha = 0; alpha < 27; alpha ++) {
    
    products.map((p) => {
        if(p.name[0].toLocaleLowerCase() == letters[count]) {
            aZ.push(p);
        }
    })
    count ++;
}