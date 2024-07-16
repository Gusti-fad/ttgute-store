"use client"
import Image from "next/image";
import Bg from '/public/keyboard/home6.jpg';
import Link from "next/link";
import About from "./struktur/about";
import Bestseller from "./struktur/bestseller";
import Product from "./struktur/product";
import Contact from "./struktur/contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Footer from "./struktur/footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
})
  return (
    <div className="poppins overflow-x-hidden">
    <section id="home" className="md:py-16 md:px-56 leading-normal min-h-[100vh] justify-center md:justify-end flex items-center relative" style={{backgroundImage: `url(${Bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="">
          <h3 data-aos="fade-up" data-aos-duration="500" className="poppins font-semibold text-white text-3xl text-center md:text-start md:text-6xl leading-normal md:leading-normal"><span className="text-[#e67e22]">Hi </span>Welcome To <br /> TTGUTE STORE</h3>
          <Link href="/product" className="flex justify-center md:justify-start" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
            <button className="md:px-7 md:py-2 px-5 py-1 border-2 rounded-r-full rounded-bl-full text-white mt-2">Shop Now</button>
          </Link>
        </div>
          <Image src="/keyboard/bottom_wave.png" className="w-full h-20 md:h-32 absolute bottom-0 left-0" quality={100} alt="" width={1955} height={230}/>
    </section>
    <About></About>
    <Bestseller></Bestseller>
    <Product></Product>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  );
}
