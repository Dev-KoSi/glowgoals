import { useState } from 'react'
import '../styles/Shop.css'
import { useNavigate } from 'react-router-dom';
import { products } from '../types/Products';
import type  { CartWish, Product } from '../types/Types';

export function Shop({setCart, cart, wishlist, setWishlist}: CartWish) {
    const [sort, setSort] = useState<Product[]>(products);

    const [hideSort, setHideSort] = useState<boolean>(true);

    const navigate = useNavigate();

    const [shopLayout, setShopLayout] = useState<string>('grid');
    
    const [filterMenu, setFilterMenu] = useState<boolean>(false);
    const [filterSelected, setFilterSelected] = useState<string>('Featured');
    const [filterOption, setFilterOption] = useState<string>('');

    const [categoryMenu, setCategoryMenu] = useState<boolean>(false);
    const [categorySelected, setCategorySelected] = useState<string>('All');
    const [categoryOption, setCategoryOption] = useState<string>('');

    const [brandMenu, setBrandMenu] = useState<boolean>(false);
    const [brandSelected, setBrandSelected] = useState<string>('All');
    const [brandOption, setBrandOption] = useState<string>('');

    const [skinTypeMenu, setSkinTypeMenu] = useState<boolean>(false);
    const [skinTypeSelected, setSkinTypeSelected] = useState<string>('All');
    const [skinTypeOption, setSkinTypeOption] = useState<string>('');

    const [priceRangeMenu, setPriceRangeMenu] = useState<boolean>(false);
    const [priceRangeSelected, setPriceRangeSelected] = useState<string>('All');
    const [priceRangeOption, setPriceRangeOption] = useState<string>('');

    // A to Z sorting

    let aZ: Product[] = [...sort].sort((a, b) => a.name.localeCompare(b.name));

    // HIGH to LOW price sorting

    let highToLow: Product[] = [...sort].sort((a, b) => b.price - a.price);

    // LOW to HIGH price sorting

    let lowToHigh: Product[] = [...sort].sort((a, b) => a.price - b.price);

    // HIGHEST RATED sorting

    let highestRated: Product[] = [...sort].sort((a, b) => b.rating.rate - a.rating.rate);

    // CATEGORY filtering

    let filterCategory = (cat: string) => [...sort].filter((p) => p.category === cat);

    // BRAND filtering

    // let filterBrand = (brand: string) => [...sort].filter((p) => p.brand === brand);

    return (
        <div className="shop-container">
            <div className="shop">
                <div className="top-display">
                    <div className="overlay">
                        <div style={{fontFamily: 'Caveat'}}>Our Beauty Collection</div>

                        <div className="txt">
                            Discover handpicked cosmetics and skincare from the world's finest brands. From luxury makeup to effective skincare, find your perfect beauty essentials.
                        </div>
                    </div>
                </div>

                <div className="filters">
                    <div className="search-container">
                        <div className='search'>
                            <input type="text" placeholder='Search beauty products...' />

                            <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                    </div>

                    <div className="customize">
                        <div className='select'>
                            <button onClick={() => {
                                setFilterMenu((f) => !f);
                            }} className='default'>
                                {filterSelected}
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                            </button>

                            {filterMenu && <div className="options">
                                <button onClick={() => {

                                    setFilterSelected('Featured');

                                    setFilterOption('1');

                                    setFilterMenu((f) => !f);  

                                    setSort(products);

                                    setSort(sort => [...sort].filter((p) => p.category === categorySelected))

                                }} id={`first-option-${filterOption}`}>
                                    Featured
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button onClick={() => {

                                    setFilterSelected('Price: Low to High');

                                    setFilterOption('2');

                                    setFilterMenu((f) => !f);

                                    setSort(lowToHigh)

                                }} id={`second-option-${filterOption}`}>
                                    Price: Low to High
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button onClick={() => {

                                    setFilterSelected('Price: High to Low');

                                    setFilterOption('3');

                                    setFilterMenu((f) => !f);

                                    setSort(highToLow)

                                }} id={`third-option-${filterOption}`}>
                                    Price: High to Low
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button onClick={() => {

                                    setFilterSelected('Highest Rated');

                                    setFilterOption('4');

                                    setFilterMenu((f) => !f);

                                    setSort(highestRated)

                                }} id={`fourth-option-${filterOption}`}>
                                    Highest Rated
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button onClick={() => {

                                    setFilterSelected('Name A-Z');

                                    setFilterOption('5');

                                    setFilterMenu((f) => !f);

                                    setSort(aZ)

                                }} id={`fifth-option-${filterOption}`}>
                                    Name A-Z
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>}
                        </div>

                        <div className={`${shopLayout}`}>
                            <button onClick={() => {
                                setShopLayout('grid')
                            }} className='grid-btn'>
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>

                                Grid
                            </button>

                            <button onClick={() => {
                                setShopLayout('list')
                            }}  className='list-btn'>
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>

                                List
                            </button>
                        </div>

                        <div className='filter'>
                            <button onClick={() => setHideSort((h) => !h)}>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"></path></svg>

                                Filter
                            </button>
                        </div>
                    </div>
                </div>

                <div className="sort" id={`${hideSort ? 'hide-sort' : ''}`}>
                    <div className="category">
                        <div className="txt">Category</div>
                        <div className='select'>

                            <button onClick={() => {
                                setCategoryMenu((c) => !c)

                                setPriceRangeMenu(false)

                                setSkinTypeMenu(false)

                                setBrandMenu(false)

                                }} className='default'>
                                {categorySelected}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                            </button>

                            {categoryMenu && <div className="options">

                                <button onClick={() => { 

                                    setCategorySelected('All');
                                    
                                    setCategoryOption('1'); 
                                    
                                    setCategoryMenu((c) => !c);

                                    setSort(products);

                                    setFilterSelected('All')

                                }} id={`first-category-option-${categoryOption}`}>

                                    All

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>

                                <button onClick={() => { 
                                    
                                    setCategorySelected('Skincare');
                                    
                                    setCategoryOption('2'); 
                                    
                                    setCategoryMenu((c) => !c);

                                    setSort(sort => [...sort].filter((p) => p.category === 'Skincare'));

                                    setFilterSelected('All')

                                }} id={`second-category-option-${categoryOption}`}>

                                    Skincare
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>

                                <button onClick={() => { 

                                    setCategorySelected('Makeup');
                                    
                                    setCategoryOption('3'); 
                                    
                                    setCategoryMenu((c) => !c);

                                    setSort(sort => [...sort].filter((p) => p.category === 'Makeup'));

                                    setFilterSelected('All')
                                    
                                }} id={`third-category-option-${categoryOption}`}>

                                    Makeup

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>

                                <button onClick={() => {
                                    
                                    setCategorySelected('Fragrance');
                                    
                                    setCategoryOption('4'); 
                                    
                                    setCategoryMenu((c) => !c);  

                                    setSort(filterCategory('Fragrance'));
                                    
                                    setSort(sort => [...sort].filter((p) => p.category === 'Fragrance'))
                                                                                                        setFilterSelected('All')

                                }} id={`fourth-category-option-${categoryOption}`}>

                                    Fragrance

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>

                                <button onClick={() => { 
                                    
                                    setCategorySelected('Hair Care'); 
                                    
                                    setCategoryOption('5'); 
                                    
                                    setCategoryMenu((c) => !c);  

                                    setSort(filterCategory('Hair Care')); 

                                    setSort(sort => [...sort].filter((p) => p.category === 'Hair Care'));

                                    setFilterSelected('All')
                                    
                                }} id={`fifth-category-option-${categoryOption}`}>

                                    Hair Care

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>

                            </div>}
                        </div>
                    </div>

                    <div className="brand">
                        <div className="txt">Brand</div>
                        <div className='select'>
                            <button onClick={() => {

                                setBrandMenu((b) => !b)

                                setPriceRangeMenu(false)

                                setSkinTypeMenu(false)
                                
                                setCategoryMenu(false)

                            }} className='default'>
                                {brandSelected}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                            </button>

                            {brandMenu && <div className="options">
                                <button onClick={() => { 
                                    
                                    setBrandSelected('All'); 
                                    
                                    setBrandOption('1'); 
                                    
                                    setBrandMenu((b) => !b);

                                    setSort(products);
                                    
                                }} id={`first-brand-option-${brandOption}`}>
                                    All
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>

                                <button onClick={() => { 
                                    
                                    setBrandSelected('GlowCare');
                                    
                                    setBrandOption('2'); 
                                    
                                    setBrandMenu((b) => !b);

                                    setSort(sort => [...sort].filter((p) => p.brand === 'GlowCare'));

                                    setFilterSelected('All')
                                    
                                }} id={`second-brand-option-${brandOption}`}>

                                    GlowCare

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>

                                <button onClick={() => {
                                    
                                    setBrandSelected('PureSkin');
                                    
                                    setBrandOption('3');
                                    
                                    setBrandMenu((b) => !b); 

                                    setSort(sort => [...sort].filter((p) => p.brand === 'PureSkin'));

                                    setFilterSelected('All')
                                    
                                }} id={`third-brand-option-${brandOption}`}>

                                    PureSkin

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>

                                <button onClick={() => {
                                    
                                    setBrandSelected('LuxeBeauty');
                                    
                                    setBrandOption('4'); 
                                    
                                    setBrandMenu((b) => !b); 

                                    setSort(sort => [...sort].filter((p) => p.brand === 'LuxeBeauty'));

                                    setFilterSelected('All')
                                    
                                }} id={`fourth-brand-option-${brandOption}`}>

                                    LuxeBeauty

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>

                                <button onClick={() => {
                                    
                                    setBrandSelected('ColorSkin');
                                    
                                    setBrandOption('5');
                                    
                                    setBrandMenu((b) => !b); 

                                    setSort(sort => [...sort].filter((p) => p.brand === 'ColorPop'));

                                    setFilterSelected('All')
                                    
                                }} id={`fifth-brand-option-${brandOption}`}>

                                    ColorPop

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>
                            </div>}
                        </div>
                    </div>

                    <div className="skin-type">
                        <div className="txt">Skin Type</div>
                        <div className="select">

                            <button onClick={() => {

                                setSkinTypeMenu((s) => !s)

                                setPriceRangeMenu(false)

                                setBrandMenu(false)

                                setCategoryMenu(false)
                                
                            }} className="default">
                                {skinTypeSelected}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                            </button>

                            {skinTypeMenu && (
                                <div className="options">
                                    <button onClick={() => { 
                                        
                                        setSkinTypeSelected('All');
                                        
                                        setSkinTypeOption('1'); 
                                        
                                        setSkinTypeMenu((s) => !s);

                                        setSort(products);

                                        setFilterSelected('All') 
                                    
                                    }} id={`first-skin-type-option-${skinTypeOption}`}>

                                        All

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => { 
                                        
                                        setSkinTypeSelected('All');
                                        
                                        setSkinTypeOption('2');
                                        
                                        setSkinTypeMenu((s) => !s); 

                                        setSort(sort => [...sort].filter((p) => p.skinType === 'All'));

                                        setFilterSelected('All') 
                                        
                                    }} id={`second-skin-type-option-${skinTypeOption}`}>

                                        All

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => {
                                        
                                        setSkinTypeSelected('Oily');
                                        
                                        setSkinTypeOption('3');
                                        
                                        setSkinTypeMenu((s) => !s);

                                        setSort(sort => [...sort].filter((p) => p.skinType === 'Oily'));

                                        setFilterSelected('All') 
                                        
                                    }} id={`third-skin-type-option-${skinTypeOption}`}>

                                        Oily

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => {
                                        
                                        setSkinTypeSelected('Dry');
                                        
                                        setSkinTypeOption('4');
                                        
                                        setSkinTypeMenu((s) => !s);

                                        setSort(sort => [...sort].filter((p) => p.skinType === 'Dry'));

                                        setFilterSelected('All') 
                                        
                                    }} id={`fourth-skin-type-option-${skinTypeOption}`}>

                                        Dry

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => {
                                        
                                        setSkinTypeSelected('Sensitive');
                                        
                                        setSkinTypeOption('5'); 
                                        
                                        setSkinTypeMenu((s) => !s);

                                        setSort(sort => [...sort].filter((p) => p.skinType === 'Sensitive'));

                                        setFilterSelected('All')
                                        
                                    }} id={`fifth-skin-type-option-${skinTypeOption}`}>

                                        Sensitive
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => { 
                                        
                                        setSkinTypeSelected('N/A'); 
                                        
                                        setSkinTypeOption('6');
                                        
                                        setSkinTypeMenu((s) => !s); 

                                        setSort(sort => [...sort].filter((p) => p.skinType === 'N/A'));

                                        setFilterSelected('All') 
                                        
                                    }} id={`sixth-skin-type-option-${skinTypeOption}`}>

                                        N/A

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => {
                                        
                                        setSkinTypeSelected('Normal'); 
                                        
                                        setSkinTypeOption('7');
                                        
                                        setSkinTypeMenu((s) => !s); 

                                        setSort(sort => [...sort].filter((p) => p.skinType === 'Normal'));

                                        setFilterSelected('All') 
                                        
                                    }} id={`seventh-skin-type-option-${skinTypeOption}`}>
                                        
                                        Normal

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="price-range">
                        <div className="txt">Price Range</div>
                        <div className="select">
                            <button onClick={() => {

                                setPriceRangeMenu((p) => !p)

                                setSkinTypeMenu(false)

                                setBrandMenu(false)

                                setCategoryMenu(false)

                            }} className="default">
                                {priceRangeSelected}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                            </button>

                            {priceRangeMenu && (
                                <div className="options">
                                    <button onClick={() => { 
                                        
                                        setPriceRangeSelected('All');
                                        
                                        setPriceRangeOption('1');
                                        
                                        setPriceRangeMenu((p) => !p);  

                                        setSort(sort => [...sort].filter((p) => p.price > 0));

                                        setFilterSelected('All')
                                        
                                    }} id={`first-price-range-option-${priceRangeOption}`}>

                                        All

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => { 
                                        
                                        setPriceRangeSelected('Under GHC 100'); 
                                        
                                        setPriceRangeOption('2');
                                        
                                        setPriceRangeMenu((p) => !p);  

                                        setSort(sort => [...sort].filter((p) => p.price < 100));

                                        setFilterSelected('All')
                                        
                                    }} id={`second-price-range-option-${priceRangeOption}`}>

                                        Under GHC 100

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => { 
                                        
                                        setPriceRangeSelected('GHC 100 - GHC 500'); 
                                        
                                        setPriceRangeOption('3');
                                        
                                        setPriceRangeMenu((p) => !p);  

                                        setSort(sort => [...sort].filter((p) => p.price >= 100 && p.price <= 500));

                                        setFilterSelected('All')
                                        
                                    }} id={`third-price-range-option-${priceRangeOption}`}>

                                        GHC 100 - GHC 500

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => {
                                        
                                        setPriceRangeSelected('GHC 500 - GHC 1,000'); 
                                        
                                        setPriceRangeOption('4');
                                        
                                        setPriceRangeMenu((p) => !p); 

                                        setSort(sort => [...sort].filter((p) => p.price >= 500 && p.price <= 1000));

                                        setFilterSelected('All')
                                        
                                    }} id={`fourth-price-range-option-${priceRangeOption}`}>

                                        GHC 500 - GHC 1,000

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => { 
                                        
                                        setPriceRangeSelected('GHC 1,000 - GHC 5,000');
                                        
                                        setPriceRangeOption('5');
                                        
                                        setPriceRangeMenu((p) => !p); 

                                        setSort(sort => [...sort].filter((p) => p.price >= 1000 && p.price <= 5000));

                                        setFilterSelected('All')
                                        
                                    }} id={`fifth-price-range-option-${priceRangeOption}`}>

                                        GHC 1,000 - GHC 5,000

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => {
                                        
                                        setPriceRangeSelected('Above GHC 5,000');
                                        
                                        setPriceRangeOption('6');
                                        
                                        setPriceRangeMenu((p) => !p); 

                                        setSort(sort => [...sort].filter((p) => p.price > 5000));

                                        setFilterSelected('All')
                                        
                                    }} id={`sixth-price-range-option-${priceRangeOption}`}>

                                        Above GHC 5,000
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div id={`${shopLayout}`}>

                        {sort?.map((p) => (
                            <div onClick={() => navigate(`/cosmetics/${p.id}`)} className="product">
                                <div className="image">
                                    <span>{p.skinType}</span>

                                    <img style={{width: '100%'}} src={`${p.image}`}/>
                                </div>

                                <div className="details">
                                    <div className="type">
                                        {p.category.toLocaleUpperCase()}
                                    </div>

                                    <div style={{fontFamily: 'Caveat'}} className="name">
                                        {p.name}
                                    </div>

                                    <div className="description">
                                        {p.description}
                                    </div>

                                    <div className="price">
                                        GHC {(p.price).toFixed(2)}
                                    </div>

                                    <div onClick={(e) => e.stopPropagation()} className="btns">
                                        <button onClick={() => {
                                            setCart( cart => {
                                                const existing = cart.find((c) => c.productId === p.id);

                                                if(existing) {
                                                    return cart.map(c => c.productId === p.id ? {...c, quantity: c.quantity + 1} : c)
                                                } else {
                                                    return [...cart, {productId: p.id, quantity: 1}]
                                                }
                                            })
                                            console.log(cart)
                                        }} className='add-to-cart'>Add to Cart</button>

                                        {/* ADD TO WISHLIST */}

                                        <svg onClick={() => {
                                            setWishlist(wish => {
                                                const wishItem = wish.find((w) => w.productId === p.id)
    
                                                if(wishItem) {
                                                    return wish
                                                } 
                                                
                                                return [...wish, {productId: p.id}]
                                            })

                                            console.log(wishlist);

                                        }} fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                        <svg id='hide-view' onClick={() => navigate('/cosmetics/id')} fill="none" width="24" height="24" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                
                </div>
            </div>
        </div>
    )
}