import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="grid grid-cols-2 md:px-40 md:py-12 px-5 py-5">
            <Image src="/keyboard/contact3.jpg" className="" width={700} height={700} alt="" />
            <div>
                <h3 className="font-semibold text-4xl">Contact <span className="text-[#e67e22]">Us</span></h3>
                <div className="my-5">
                    <input type="text" name="name" id="name" placeholder="Your Name" className="w-full py-4 text-xl my-3 focus:outline-none border-b border-slate-800"/>
                    <input type="email" name="email" id="email" placeholder="Your Email" className="w-full py-4 text-xl my-3 focus:outline-none border-b border-slate-800"/>
                </div>
            </div>
        </section>
    );
}