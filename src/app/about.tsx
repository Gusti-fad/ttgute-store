import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="md:px-40 md:py-12 px-5 py-5 flex items-center justify-between">
      <div className="w-[40%]">
        <Image src='/keyboard/switch.jpg' className="w-full" width={1024} height={1024} alt="" />
      </div>
      <div className="w-[60%]">
        <h3 className="font-semibold md:text-4xl text-2xl">Best <span className="text-[#e67e22]">Keyboard</span> For You</h3>
        <p className="py-3 text-[#666] text-sm md:text-base">TTGUTE STORE Menyediakan Berbagai Macam Keyboard Yang Dapat Menambah Performa Bekerja Atau Bermain Game Anda.</p>
        <Link href="/product">
          <button className="md:px-7 md:py-2 px-5 py-1 border-2 border-[#130f40] rounded-r-full text-sm md:text-base rounded-bl-full text-[#130f40]">Read More</button>
        </Link>
      </div>
    </section>);
}

