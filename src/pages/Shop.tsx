import { useState } from 'react'
import '../styles/Shop.css'
import { useNavigate } from 'react-router-dom';

export function Shop() {

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
                                <button onClick={() => { setCategorySelected('All'); setCategoryOption('1'); setCategoryMenu((c) => !c); }} id={`first-category-option-${categoryOption}`}>
                                    All
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>
                                <button onClick={() => { setCategorySelected('Skincare'); setCategoryOption('2'); setCategoryMenu((c) => !c); }} id={`second-category-option-${categoryOption}`}>
                                    Skincare
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>
                                <button onClick={() => { setCategorySelected('Makeup'); setCategoryOption('3'); setCategoryMenu((c) => !c); }} id={`third-category-option-${categoryOption}`}>
                                    Makeup
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>
                                <button onClick={() => { setCategorySelected('Fragrance'); setCategoryOption('4'); setCategoryMenu((c) => !c); }} id={`fourth-category-option-${categoryOption}`}>
                                    Fragrance
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>
                                <button onClick={() => { setCategorySelected('Hair Care'); setCategoryOption('5'); setCategoryMenu((c) => !c); }} id={`fifth-category-option-${categoryOption}`}>
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
                                <button onClick={() => { setBrandSelected('All'); setBrandOption('1'); 
                                setBrandMenu((b) => !b); }} id={`first-brand-option-${brandOption}`}>
                                    All
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>
                                <button onClick={() => { setBrandSelected('Luxe Beauty'); setBrandOption('2'); setBrandMenu((b) => !b); }} id={`second-brand-option-${brandOption}`}>
                                    Luxe Beauty
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>
                                <button onClick={() => { setBrandSelected('Nature Glow'); setBrandOption('3'); setBrandMenu((b) => !b); }} id={`third-brand-option-${brandOption}`}>
                                    Nature Glow
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>
                                <button onClick={() => { setBrandSelected('Urban Chic'); setBrandOption('4'); setBrandMenu((b) => !b); }} id={`fourth-brand-option-${brandOption}`}>
                                    Urban Chic
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"><path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>
                                <button onClick={() => { setBrandSelected('Glow Essence'); setBrandOption('5'); setBrandMenu((b) => !b); }} id={`fifth-brand-option-${brandOption}`}>
                                    Glow Essence
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
                                    <button onClick={() => { setSkinTypeSelected('All'); setSkinTypeOption('1'); setSkinTypeMenu((s) => !s); }} id={`first-skin-type-option-${skinTypeOption}`}>
                                        All
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => { setSkinTypeSelected('All Types'); setSkinTypeOption('2'); setSkinTypeMenu((s) => !s); }} id={`second-skin-type-option-${skinTypeOption}`}>
                                        All Types
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => { setSkinTypeSelected('Oily Skin'); setSkinTypeOption('3'); setSkinTypeMenu((s) => !s); }} id={`third-skin-type-option-${skinTypeOption}`}>
                                        Oily Skin
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => { setSkinTypeSelected('Dry Skin'); setSkinTypeOption('4'); setSkinTypeMenu((s) => !s); }} id={`fourth-skin-type-option-${skinTypeOption}`}>
                                        Dry Skin
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => { setSkinTypeSelected('Combination Skin'); setSkinTypeOption('5'); setSkinTypeMenu((s) => !s); }} id={`fifth-skin-type-option-${skinTypeOption}`}>
                                        Combination Skin
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => { setSkinTypeSelected('Acne-Prone Skin'); setSkinTypeOption('6'); setSkinTypeMenu((s) => !s); }} id={`sixth-skin-type-option-${skinTypeOption}`}>
                                        Acne-Prone Skin
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => { setSkinTypeSelected('Sensitive Skin'); setSkinTypeOption('7'); setSkinTypeMenu((s) => !s); }} id={`seventh-skin-type-option-${skinTypeOption}`}>
                                        Sensitive Skin
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => { setSkinTypeSelected('Matured Skin'); setSkinTypeOption('8'); setSkinTypeMenu((s) => !s); }} id={`eighth-skin-type-option-${skinTypeOption}`}>
                                        Matured Skin
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
                                    <button onClick={() => { setPriceRangeSelected('All'); setPriceRangeOption('1'); setPriceRangeMenu((p) => !p); }} id={`first-price-range-option-${priceRangeOption}`}>
                                        All
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => { setPriceRangeSelected('Under GHC 100'); setPriceRangeOption('2'); setPriceRangeMenu((p) => !p); }} id={`second-price-range-option-${priceRangeOption}`}>
                                        Under GHC 100
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => { setPriceRangeSelected('GHC 100 - GHC 500'); setPriceRangeOption('3'); setPriceRangeMenu((p) => !p); }} id={`third-price-range-option-${priceRangeOption}`}>
                                        GHC 100 - GHC 500
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => { setPriceRangeSelected('GHC 500 - GHC 1,000'); setPriceRangeOption('4'); setPriceRangeMenu((p) => !p); }} id={`fourth-price-range-option-${priceRangeOption}`}>
                                        GHC 500 - GHC 1,000
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => { setPriceRangeSelected('GHC 1,000 - GHC 5,000'); setPriceRangeOption('5'); setPriceRangeMenu((p) => !p); }} id={`fifth-price-range-option-${priceRangeOption}`}>
                                        GHC 1,000 - GHC 5,000
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    <button onClick={() => { setPriceRangeSelected('Above GHC 5,000'); setPriceRangeOption('6'); setPriceRangeMenu((p) => !p); }} id={`sixth-price-range-option-${priceRangeOption}`}>
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

                    <div className="product">
                        <div className="image">
                            <span>ALL TYPES</span>

                            <img style={{width: '100%'}} src="/perfume-spray-bottle-isolated_93675-123583.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                SKINCARE
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Luxury Anti-Aging Serum
                            </div>

                            <div className="price">
                                GHC 450.00
                            </div>

                            <div className="btns">
                                <button className='add-to-cart'>Add to Cart</button>

                                <svg fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                <svg onClick={() => navigate('/cosmetics/id')} id='view' fill="none" width="24" height="24" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="image">
                            <span>ALL TYPES</span>

                            <img style={{width: '100%'}} src="/bottle-perfume_266732-14623.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                FRAGRANCE
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Rose Gold Perfume
                            </div>

                            <div className="price">
                                GHC 750.00
                            </div>

                            <div className="btns">
                                <button className='add-to-cart'>Add to Cart</button>

                                <svg fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                <svg id='view' fill="none" width="24" height="24" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="image">
                            <span>ALL TYPES</span>

                            <img style={{width: '100%'}} src="/high-angle-view-pen-table_1048944-18511898.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                MAKEUP
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Matte Liquid Lipstick
                            </div>

                            <div className="price">
                                GHC 250.00
                            </div>

                            <div className="btns">
                                <button className='add-to-cart'>Add to Cart</button>

                                <svg fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                <svg id='view' fill="none" width="24" height="24" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="image">
                            <span>ALL TYPES</span>

                            <img style={{width: '100%'}} src="/perfume-spray-bottle-isolated_93675-123583.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                SKINCARE
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Luxury Anti-Aging Serum
                            </div>

                            <div className="price">
                                GHC 450.00
                            </div>

                            <div className="btns">
                                <button className='add-to-cart'>Add to Cart</button>

                                <svg fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                <svg onClick={() => navigate('/cosmetics/id')} id='view' fill="none" width="24" height="24" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="image">
                            <span>ALL TYPES</span>

                            <img style={{width: '100%'}} src="/bottle-perfume_266732-14623.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                FRAGRANCE
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Rose Gold Perfume
                            </div>

                            <div className="price">
                                GHC 750.00
                            </div>

                            <div className="btns">
                                <button className='add-to-cart'>Add to Cart</button>

                                <svg fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                <svg id='view' fill="none" width="24" height="24" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="image">
                            <span>ALL TYPES</span>

                            <img style={{width: '100%'}} src="/high-angle-view-pen-table_1048944-18511898.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                MAKEUP
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Matte Liquid Lipstick
                            </div>

                            <div className="price">
                                GHC 250.00
                            </div>

                            <div className="btns">
                                <button className='add-to-cart'>Add to Cart</button>

                                <svg fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                <svg id='view' fill="none" width="24" height="24" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="image">
                            <span>ALL TYPES</span>

                            <img style={{width: '100%'}} src="/perfume-spray-bottle-isolated_93675-123583.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                SKINCARE
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Luxury Anti-Aging Serum
                            </div>

                            <div className="price">
                                GHC 450.00
                            </div>

                            <div className="btns">
                                <button className='add-to-cart'>Add to Cart</button>

                                <svg fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                <svg onClick={() => navigate('/cosmetics/id')} id='view' fill="none" width="24" height="24" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="image">
                            <span>ALL TYPES</span>

                            <img style={{width: '100%'}} src="/bottle-perfume_266732-14623.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                FRAGRANCE
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Rose Gold Perfume
                            </div>

                            <div className="price">
                                GHC 750.00
                            </div>

                            <div className="btns">
                                <button className='add-to-cart'>Add to Cart</button>

                                <svg fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                <svg id='view' fill="none" width="24" height="24" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="image">
                            <span>ALL TYPES</span>

                            <img style={{width: '100%'}} src="/high-angle-view-pen-table_1048944-18511898.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                MAKEUP
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Matte Liquid Lipstick
                            </div>

                            <div className="price">
                                GHC 250.00
                            </div>

                            <div className="btns">
                                <button className='add-to-cart'>Add to Cart</button>

                                <svg fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                <svg id='view' fill="none" width="24" height="24" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}