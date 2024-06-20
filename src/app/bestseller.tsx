import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <>
        <section id="bestseller1" className="md:px-40 md:py-12 px-5 py-5 flex items-center justify-between">
            <div className="w-[48%]">
                <Image src="/keyboard/mojo68.jpg" width={700} height={700} alt=""/>
            </div>
            <div className="w-1/2 text-center">
                <h3 className="font-semibold md:text-4xl text-2xl"><span className="text-[#e67e22]">Melgeek Mojo68</span> Plastic</h3>
                <p className="py-3 text-[#666] text-sm md:text-base">Melgeek Mojo68 Plastic Adalah Kerboard Yang Memiliki Desain Yang Futuristic Yang Dapat Membuat Meja Kerja Anda Terlihat Keren.</p>
                <div className="md:text-4xl text-2xl text-[#130f40] py-1">
                $199.99
                </div>
                <Link href="/product">
                <button className="md:px-7 md:py-2 px-5 py-1 border-2 mt-2 border-[#130f40] rounded-r-full rounded-bl-full text-[#130f40]">Buy Now</button>
                </Link>
            </div>
            </section>
            <section id="bestseller2" className="md:px-40 md:py-12 px-5 py-5 flex items-center justify-between">
            <div className="w-1/2 text-center">
                <h3 className="font-semibold md:text-4xl text-2xl"><span className="text-[#e67e22]">Glorious </span> GMMK Pro</h3>
                <p className="py-3 text-[#666] text-sm md:text-base">Glorious GMMK Pro Adalah Keyboard Barebone Yang Memiliki Build Quality Yang Sangat Bagus Dan Body Yang Sangat Solid.</p>
                <div className="md:text-4xl text-2xl text-[#130f40] py-1">
                $170.00
                </div>
                <Link href="/product">
                <button className="md:px-7 md:py-2 px-5 py-1 border-2 mt-2 border-[#130f40] rounded-r-full rounded-bl-full text-[#130f40]">Buy Now</button>
                </Link>
            </div>
            <div className="w-[48%] flex justify-end">
                <Image src="/keyboard/glorius.jpg" width={1200} height={960} alt=""/>
            </div>
        </section>
        </>);
}