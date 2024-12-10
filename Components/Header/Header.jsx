'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import './Header.scss'
import Link from 'next/link'
import SearchBar from './SearchBar/SearchBar'
import brandsData from '@/DummyData/brands.json'

function Header() {
    const [navShow, setNavShow] = useState('');
    const [dropdownPosition, setDropdownPosition] = useState(0); // For dynamic left position
    const rentACarRef = useRef(null); // Reference for the Rent a Car menu item

    const handleMouseEnter = (type) => {
        if (type === 'cat') {
        }
        setNavShow(type);
    };

    const handleMouseLeave = () => {
        setNavShow('');
    };
    useEffect(() => {
        const rect = rentACarRef.current.getBoundingClientRect(); // Get the position of Rent a Car
        setDropdownPosition(rect.left); // Set the left position dynamically
    }, [])

    return (
        <div
            className={`menuWrapper`}
            onMouseLeave={handleMouseLeave} // Hide dropdown when mouse leaves menuWrapper
        >
            <header>
                <div className="headerContainer">
                    <nav>
                        <figure className="logoCont">
                            <Image src={'/images/logo.webp'} width={250} height={50} alt="OneTap Logo" />
                        </figure>
                        <div className="navItems">
                            <ul>
                                <li
                                    onMouseEnter={() => handleMouseEnter('cat')}
                                    ref={rentACarRef} // Attach the ref to Rent a Car
                                >
                                    <Link href={""}>
                                        Rent a Car <i className="fas fa-chevron-down"></i>
                                    </Link>
                                </li>
                                <li onMouseEnter={() => handleMouseEnter('carBrands')}>
                                    <Link href={""}>
                                        Car Brands <i className="fas fa-chevron-down"></i>
                                    </Link>
                                </li>
                                <li onMouseEnter={() => handleMouseEnter('carsWithDriver')}>
                                    <Link href={""}>
                                        Cars with Driver <i className="fas fa-chevron-right" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="searchBarCont">
                            <SearchBar />
                            <Link href={""} className="themeBtn">
                                Login/Signup
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
            <div className={`brandsDropdown ${navShow === 'carBrands' ? 'navShow' : ''}`}>
                <div className="brandsCont">
                    {brandsData &&
                        brandsData.map((brand, index) => (
                            <Link href={""} className="brandCont" key={index}>
                                <figure>
                                    <Image src={brand?.img} width={50} height={50} alt="" />
                                </figure>
                                <h6>{brand?.name}</h6>
                            </Link>
                        ))}
                </div>
            </div>
            <div
                className={`categoryDropdown ${navShow === 'cat' ? 'navShow' : ''}`}
                style={{ left: `${dropdownPosition}px` }} // Set dynamic left position
            >
                <div className="catCont">
                    <div className="catRow">
                        <div className="catCol">
                            <h4>Category</h4>
                            <ul>
                                <li>
                                    <Link href={""}>
                                        <span>Economy Cars</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>Luxury Car Rental Dubai</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>Sports Car Rental Dubai</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>Special Edition</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>Muscle Cars</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>Electric Cars</span>
                                    </Link>
                                </li>
                            </ul>
                            <h4>Category</h4>
                            <ul>
                                <li>
                                    <Link href={""}>
                                        <span>List your cars</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>Directory</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="catCol">
                            <h4>Category</h4>
                            <ul>
                                <li>
                                    <Link href={""}>SUV</Link>
                                </li>
                                <li>
                                    <Link href={""}>Sedan</Link>
                                </li>
                                <li>
                                    <Link href={""}>Crossover</Link>
                                </li>
                                <li>
                                    <Link href={""}>Convertible</Link>
                                </li>
                                <li>
                                    <Link href={""}>Compact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Header);
