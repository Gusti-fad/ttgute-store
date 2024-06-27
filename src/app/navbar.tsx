"use client"
import Link from "next/link"
import Image from "next/image"
import Cart from "../../public/svgs/Cart"
import Profile from "../../public/svgs/Profile"
import Burger from "../../public/svgs/Burger"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Navbar() {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className="w-full navbar bg-white flex justify-center fixed z-10 py-5 drop-shadow-lg" data-aos="fade-down" data-aos-duration="500" data-aos-anchor="#about">
            <nav className="max-w-[1200px] w-full flex justify-between px-3">
                <Link href="/">
                    <p className="poppins text-2xl font-semibold text-[#130f40] flex items-center h-full">TTGUTE STORE</p>
                </Link>
                <ul className="hidden md:flex duration-300 text-[#666] poppins text-[17px] items-center">
                        {/* <Link className="mr-5" href="#home"> */}
                            <li className="mr-5"><a href="#home">Home</a></li>
                        {/* </Link>
                        <Link className="mr-5" href="#about"> */}
                            <li className="mr-5"><a href="#about">About</a></li>
                        {/* </Link>
                        <Link className="mr-5" href="#bestseller1"> */}
                            <li className="mr-5"><a href="#bestseller1">Best Seller</a></li>
                        {/* </Link>
                        <Link className="mr-5" href="#bestseller2"> */}
                            <li className="mr-5"><a href="#product">Product</a></li>
                        {/* </Link>
                        <Link className="mr-5" href="/contact"> */}
                            <li><a href="#contact">Contact</a></li>
                        {/* </Link> */}
                </ul>
                <div className="flex">
                    <Burger className="h-10 w-10 mr-2 flex items-center justify-center hover:text-orange-400 duration-300 md:hidden"/>
                    <Cart className="h-10 w-10 mr-2 hover:text-orange-400 duration-300"/>
                    <Profile  className="h-9 w-9 hover:text-orange-400 duration-300" />
                </div>
            </nav>
        </div>);
}

