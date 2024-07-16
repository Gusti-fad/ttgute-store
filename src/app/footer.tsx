"use client"
import Link from "next/link"
import Image from "next/image"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Discord from '../../public/svgs/Discord';
import Instagram from '../../public/svgs/Instagram';
import Facebook from '../../public/svgs/Facebook';
import Twitter from '../../public/svgs/Twitter';
import Whatsapp from '../../public/svgs/Whatsapp';
import Bg from '../../public/keyboard/footer_background.jpg';


export default function Footer() {
    useEffect(() => {
        AOS.init();
    })
    return (
        <section className="w-full pt-24 pb-5" style={{backgroundImage: `url(${Bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="w-full flex justify-center gap-10">
                <Link className="flex justify-center items-center gap-[5px] border-[1.5px] border-white hover:bg-white group py-2 px-6 rounded-r-full rounded-bl-full" href="/">
                    <Discord className="text-white group-hover:text-blue-950 h-4 w-4"></Discord>
                    <p className="text-white group-hover:text-blue-950">Discord</p>
                </Link>
                <Link className="flex justify-center items-center gap-[5px] border-[1.5px] border-white hover:bg-white group py-2 px-6 rounded-r-full rounded-bl-full" href="/">
                    <Instagram className="text-white group-hover:text-blue-950 h-4 w-4"></Instagram>
                    <p className="text-white group-hover:text-blue-950">Instagram</p>
                </Link>
                <Link className="flex justify-center items-center gap-[5px] border-[1.5px] border-white hover:bg-white group py-2 px-6 rounded-r-full rounded-bl-full" href="/">
                    <Facebook className="text-white group-hover:text-blue-950 h-4 w-4"></Facebook>
                    <p className="text-white group-hover:text-blue-950">Facebook</p>
                </Link>
                <Link className="flex justify-center items-center gap-[5px] border-[1.5px] border-white hover:bg-white group py-2 px-6 rounded-r-full rounded-bl-full" href="/">
                    <Twitter className="text-white group-hover:text-blue-950 h-4 w-4"></Twitter>
                    <p className="text-white group-hover:text-blue-950">Twitter</p>
                </Link>
                <Link className="flex justify-center items-center gap-[5px] border-[1.5px] border-white hover:bg-white group py-2 px-6 rounded-r-full rounded-bl-full" href="/">
                    <Whatsapp className="text-white group-hover:text-blue-950 h-4 w-4"></Whatsapp>
                    <p className="text-white group-hover:text-blue-950">Whatsapp</p>
                </Link>
            </div>
                {/* <p className="text-center text-[#666]">Copyright © 2022 Ttgute Store. All rights reserved.</p> */}
        </section>
    );
}

