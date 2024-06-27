import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        AOS.init();
    })
    return (
        <section id="contact" className="grid grid-cols-1 lg:grid-cols-2 md:px-40 md:py-12 px-5 py-5" >
            <Image src="/keyboard/contact3.jpg" className="hidden lg:block" width={630} height={630} alt="" data-aos="fade-right" data-aos-duration="1000" data-aos-anchor="#contact"/>
            <div className="mt-10 md:mt-0">
                <h3 className="font-semibold text-4xl" data-aos="fade-up" data-aos-duration="500" data-aos-anchor="#contact">Contact <span className="text-[#e67e22]">Us</span></h3>
                <div className="my-5">
                    <input data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-anchor="#contact" type="text" name="name" id="name" placeholder="Your Name" className="w-full py-4 text-xl my-3 focus:outline-none border-b border-slate-800"/>
                    <input data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-anchor="#contact" type="email" name="email" id="email" placeholder="Your Email" className="w-full py-4 text-xl my-3 focus:outline-none border-b border-slate-800"/>
                    <input data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-anchor="#contact" type="text" name="number" id="number" placeholder="Your Number" className="w-full py-4 text-xl my-3 focus:outline-none border-b border-slate-800"/>
                    <textarea data-aos="fade-up" data-aos-duration="500" data-aos-delay="400" data-aos-anchor="#contact" name="message" id="message" placeholder="Your Message" className="w-full h-[150px] py-4 text-xl my-3 focus:outline-none border-b border-slate-800"></textarea>
                    <input data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-anchor="#contact" type="submit" name="submit" id="submit" value={"Send Message"} className="w-full h-full mt-5 py-2 px-7 border-2 border-blue-950 text-blue-950 hover:bg-blue-950 duration-200 hover:text-white text-[17px] rounded-r-full rounded-bl-full leading-normal" />
                </div>
            </div>
        </section>
    );
}