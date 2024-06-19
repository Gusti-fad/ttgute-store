import Image from "next/image";
import Bg from '/public/keyboard/home6.jpg';
import Link from "next/link";

export default function Home() {
  return (
    <div className="poppins">
    <section id="home" className="py-16 px-56 leading-normal min-h-[100vh] justify-end flex items-center relative" style={{backgroundImage: `url(${Bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="">
        <div className="">
          <h3 className="poppins font-bold text-white text-6xl leading-normal"><span className="text-[#e67e22]">Hi </span>Welcome To <br /> TTGUTE STORE</h3>
          <Link href="/product">
            <button className="px-7 py-2 border-2 rounded-r-full rounded-bl-full text-white">Shop Now</button>
          </Link>
        </div>
      </div>
          <Image src="/keyboard/bottom_wave.png" className="w-full h-32 absolute bottom-0 left-0" quality={100} alt="" width={1955} height={230}/>
    </section>
    <section id="about" className="px-40 py-12 flex items-center justify-between">
      <div className="w-[40%]">
        <Image src='/keyboard/switch.jpg' className="w-full" width={1024} height={1024} alt="" />
      </div>
      <div className="w-[60%]">
        <h3 className="font-semibold text-4xl">Best <span className="text-[#e67e22]">Keyboard</span> For You</h3>
        <p className="py-3 text-[#666]">TTGUTE STORE Menyediakan Berbagai Macam Keyboard Yang Dapat Menambah Performa Bekerja Atau Bermain Game Anda.</p>
        <Link href="/product">
          <button className="px-7 py-2 border-2 border-[#130f40] rounded-r-full rounded-bl-full text-[#130f40]">Read More</button>
        </Link>
      </div>
    </section>
    <section id="bestseller1" className="px-40 py-12 flex items-center justify-between">
      <div className="w-[48%]">
        <Image src="/keyboard/mojo68.jpg" width={700} height={700} alt=""/>
      </div>
      <div className="w-1/2 text-center">
        <h3 className="font-semibold text-4xl"><span className="text-[#e67e22]">Melgeek Mojo68</span> Plastic</h3>
        <p className="py-3 text-[#666]">Melgeek Mojo68 Plastic Adalah Kerboard Yang Memiliki Desain Yang Futuristic Yang Dapat Membuat Meja Kerja Anda Terlihat Keren.</p>
        <div className="text-4xl text-[#130f40] py-1">
          $199.99
        </div>
        <Link href="/product">
          <button className="mt-3 px-7 py-2 border-2 border-[#130f40] rounded-r-full rounded-bl-full text-[#130f40]">Buy Now</button>
        </Link>
      </div>
    </section>
    <section id="bestseller2" className="px-40 py-12 flex items-center justify-between">
      <div className="w-1/2 text-center">
        <h3 className="font-semibold text-4xl"><span className="text-[#e67e22]">Glorious </span> GMMK Pro</h3>
        <p className="py-3 text-[#666]">Glorious GMMK Pro Adalah Keyboard Barebone Yang Memiliki Build Quality Yang Sangat Bagus Dan Body Yang Sangat Solid.</p>
        <div className="text-4xl text-[#130f40] py-1">
          $170.00
        </div>
        <Link href="/product">
          <button className="mt-3 px-7 py-2 border-2 border-[#130f40] rounded-r-full rounded-bl-full text-[#130f40]">Buy Now</button>
        </Link>
      </div>
      <div className="w-[48%]">
        <Image src="/keyboard/glorius.jpg" width={1200} height={960} alt=""/>
      </div>
    </section>
    </div>
  );
}
