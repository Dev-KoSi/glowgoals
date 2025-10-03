import type { Product } from "./Types";

export const products: Product[] = [
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
        image: "/perfume2.avif",
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
        reviews: [
            "Smells luxurious and lasts the whole day.",
            "The oud and amber mix beautifully, very rich fragrance.",
            "Perfect for evenings — gets me compliments every time.",
            "Strong at first but mellows into something elegant.",
            "Worth the price if you love deep perfumes."
        ]
    },
    {
        id: "n3Vt5Z8qS1Fk",
        image: "/facemask1.webp",
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
        reviews: [
            "Leaves my skin feeling fresh and tight.",
            "Really helps with oily skin and breakouts.",
            "A bit drying if used too often, but effective.",
            "Pores look smaller after one use.",
            "Smells natural and works great."
        ]
    },
    {
        id: "f2Qw7Y1mN8Zp",
        image: "/sunscreen1.webp",
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
        reviews: [
            "Finally, a sunscreen that doesn’t irritate my skin.",
            "Goes on smoothly and doesn’t leave a white cast.",
            "Works well under makeup, no greasy feel.",
            "My go-to daily sunscreen now.",
            "Great for sensitive skin!"
        ]
    },
    {
        id: "g9Jk4T6rB2Lp",
        image: "/eyeshadow1.webp",
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
        reviews: [
            "The pigments are incredible and blend easily.",
            "Perfect variety of shades for both day and night looks.",
            "Very little fallout, amazing quality for the price.",
            "Love the shimmer shades, they really pop.",
            "Compact but packed with colors!"
        ]
    },
    {
        id: "u5Rm1L8yV7Ns",
        image: "/highlighter1.jpg",
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
        reviews: [
            "Gives such a natural glow, not too glittery.",
            "Buildable shine — perfect for my cheekbones.",
            "Stays on all day without fading.",
            "Looks amazing in pictures.",
            "My favorite highlighter now."
        ]
    },
    {
        id: "a4Bn7M3xK5Vz",
        image: "/hairserum1.jpg",
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
        reviews: [
            "My hair feels silky smooth instantly.",
            "Helps a lot with frizz control.",
            "Smells amazing and doesn’t weigh my hair down.",
            "A little goes a long way, very effective.",
            "Great for damaged hair — I see improvement."
        ]
    },
    {
        id: "e1Xv6J9oC8Tf",
        image: "/bodylotion1.webp",
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
        reviews: [
            "The coconut scent is heavenly.",
            "Moisturizes without being greasy.",
            "My skin feels so soft after using this.",
            "Absorbs quickly, perfect for daily use.",
            "Best lotion I’ve tried in years."
        ]
    },
    {
        id: "j0Zc8P5hW2Qr",
        image: "/foundation2.webp",
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
        reviews: [
            "Lightweight with a beautiful radiant finish.",
            "Medium coverage but buildable.",
            "Doesn’t cake up and looks natural.",
            "Perfect for my normal skin type.",
            "Stays put for hours with a dewy glow."
        ]
    },
    {
        id: "o8Hl2S7dK6Mp",
        image: "/eyeliner1.avif",
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
        reviews: [
            "Super easy to apply, even for beginners.",
            "The tip is precise and sharp.",
            "Stays on all day without smudging.",
            "Intense black, exactly what I wanted.",
            "Best liquid eyeliner I’ve owned."
        ]
    },
    {
        id: "s6Ck3V1nR9Xp",
        image: "/facemist1.jpg",
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
        reviews: [
            "Very refreshing throughout the day.",
            "Hydrates my skin instantly.",
            "The rose scent is light and pleasant.",
            "Great for setting makeup too.",
            "Keeps my skin glowing and fresh."
        ]
    }
];

// GlowCare

// PureSkin

// LuxeBeauty

// ColorPop

// LashLux

// AquaDerm

// C-Glow

// SilkStr