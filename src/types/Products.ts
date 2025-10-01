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
        reviews: [
            "My skin feels instantly hydrated after using this serum!",
            "Lightweight and absorbs quickly. No sticky feeling.",
            "Helped reduce my fine lines and dryness.",
            "Best serum I’ve used so far, highly recommend."
        ]
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
        reviews: [
            "So gentle, perfect for my sensitive skin.",
            "Cleans without leaving my face tight or dry.",
            "I use it daily and it never irritates.",
            "Lovely mild scent and great foam."
        ]
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
        reviews: [
            "Covers everything without feeling heavy.",
            "Finally a foundation that lasts all day!",
            "Perfect matte finish, no shine at all.",
            "Great for oily skin like mine."
        ]
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
        reviews: [
            "The color is stunning, very bold red!",
            "Lasts for hours without smudging.",
            "Matte but still feels comfortable.",
            "My go-to lipstick for nights out."
        ]
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
        reviews: [
            "Makes my lashes look super full.",
            "Stayed on all day even through tears.",
            "Brush separates lashes beautifully.",
            "Best waterproof mascara I’ve tried."
        ]
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
        reviews: [
            "Keeps my skin soft all day.",
            "Absorbs quickly and feels light.",
            "Perfect under makeup too.",
            "Lovely fresh scent."
        ]
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
        reviews: [
            "Skin feels brighter after a week.",
            "Helped fade my dark spots.",
            "Very refreshing and light.",
            "No irritation, great product!"
        ]
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
        reviews: [
            "My hair feels stronger already.",
            "Smells amazing and lathers well.",
            "Reduced my hair fall.",
            "Leaves hair soft and shiny."
        ]
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
        reviews: [
            "Makes my hair silky smooth.",
            "Great for reducing frizz.",
            "Smells divine and lasts long.",
            "Pairs perfectly with the shampoo."
        ]
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
        reviews: [
            "So fresh and elegant, lasts all day.",
            "Compliments every time I wear this.",
            "Beautiful floral scent, not overpowering.",
            "My new signature fragrance."
        ]
    },
    // 🔥 Continue in same pattern for the rest of products...
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