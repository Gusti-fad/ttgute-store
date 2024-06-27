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
        <section id="about" className="md:px-40 md:py-12 px-5 py-5 flex items-center justify-between">
      <div className="w-[40%]" data-aos="fade-up" data-aos-duration="800" data-aos-anchor="#abouttext">
        <Image src='/keyboard/switch.jpg' className="w-full" width={1024} height={1024} alt="" />
      </div>
      <div className="w-[60%]" id="abouttext">
        <h3 className="font-semibold md:text-4xl text-2xl"data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-anchor="#abouttext">Best <span className="text-[#e67e22]">Keyboard</span> For You</h3>
        <p className="py-3 text-[#666] text-sm md:text-base"data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-anchor="#abouttext">TTGUTE STORE Menyediakan Berbagai Macam Keyboard Yang Dapat Menambah Performa Bekerja Atau Bermain Game Anda.</p>
        <Link href="/product">
          <button data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-anchor="#abouttext" className="md:px-7 md:py-2 px-5 py-1 border-2 border-[#130f40] rounded-r-full text-sm md:text-base rounded-bl-full text-[#130f40]">Read More</button>
        </Link>
      </div>
    </section>);
}

