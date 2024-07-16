"use client"
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        AOS.init();
    })
    return (
        <>
        <section id="bestseller1" className="md:px-40 md:py-12 px-5 py-5 flex items-center justify-between">
            <div className="w-[48%]">
                <Image data-aos="fade-right" data-aos-duration="800" data-aos-anchor="#bestsellertext1" src="/keyboard/mojo68.jpg" width={700} height={700} alt=""/>
            </div>
            <div className="w-1/2 text-center" id="bestsellertext1">
                <h3 className="font-semibold md:text-4xl text-2xl" data-aos="fade-up" data-aos-duration="500" data-aos-anchor="#bestsellertext1"><span className="text-[#e67e22]">Melgeek Mojo68</span> Plastic</h3>
                <p className="py-3 text-[#666] text-sm md:text-base" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-anchor="#bestsellertext1">Melgeek Mojo68 Plastic Adalah Kerboard Yang Memiliki Desain Yang Futuristic Yang Dapat Membuat Meja Kerja Anda Terlihat Keren.</p>
                <div className="md:text-4xl text-2xl text-[#130f40] py-1" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-anchor="#bestsellertext1">
                $199.99
                </div>
                <Link href="/product">
                <button className="md:px-7 md:py-2 px-5 py-1 border-2 mt-2 border-[#130f40] rounded-r-full rounded-bl-full text-[#130f40]" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-anchor="#bestsellertext1">Buy Now</button>
                </Link>
            </div>
            </section>
            <section id="bestseller2" className="md:px-40 md:py-12 px-5 py-5 flex items-center justify-between">
            <div className="w-1/2 text-center" id="bestsellertext2">
                <h3 className="font-semibold md:text-4xl text-2xl" data-aos="fade-up" data-aos-duration="500" data-aos-anchor="#bestsellertext2"><span className="text-[#e67e22]">Glorious </span> GMMK Pro</h3>
                <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-anchor="#bestsellertext2" className="py-3 text-[#666] text-sm md:text-base">Glorious GMMK Pro Adalah Keyboard Barebone Yang Memiliki Build Quality Yang Sangat Bagus Dan Body Yang Sangat Solid.</p>
                <div className="md:text-4xl text-2xl text-[#130f40] py-1" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-anchor="#bestsellertext2">
                $170.00
                </div>
                <Link href="/product">
                <button className="md:px-7 md:py-2 px-5 py-1 border-2 mt-2 border-[#130f40] rounded-r-full rounded-bl-full text-[#130f40]" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-anchor="#bestsellertext2">Buy Now</button>
                </Link>
            </div>
            <div className="w-[48%] flex justify-end">
                <Image data-aos="fade-left" data-aos-anchor="#bestsellertext2" data-aos-duration="800" src="/keyboard/glorius.jpg" width={1200} height={960} alt=""/>
            </div>
        </section>
        </>);
}