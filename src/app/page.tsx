import Image from "next/image";
import Bg from '/public/keyboard/home6.jpg';
import Link from "next/link";
import About from "./about"

export default function Home() {
  return (
    <div className="poppins">
    <section id="home" className="md:py-16 md:px-56 leading-normal min-h-[100vh] justify-center md:justify-end flex items-center relative" style={{backgroundImage: `url(${Bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="">
          <h3 className="poppins font-bold text-white text-3xl text-center md:text-start md:text-6xl leading-normal"><span className="text-[#e67e22]">Hi </span>Welcome To <br /> TTGUTE STORE</h3>
          <Link href="/product" className="flex justify-center">
            <button className="md:px-7 md:py-2 px-5 py-1 border-2 rounded-r-full rounded-bl-full text-white mt-2">Shop Now</button>
          </Link>
        </div>
          <Image src="/keyboard/bottom_wave.png" className="w-full h-20 md:h-32 absolute bottom-0 left-0" quality={100} alt="" width={1955} height={230}/>
    </section>
    <About></About>
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
      <div className="w-[48%]">
        <Image src="/keyboard/glorius.jpg" width={1200} height={960} alt=""/>
      </div>
    </section>
    <section id="product">
      <div className="mb-8">
        <h3 className="font-semibold text-4xl text-center">Our <span className="text-[#e67e22]">Products</span></h3>
      </div>
      <div id="product-container" className="flex flex-wrap justify-center gap-4 px-8 md:px-40 md:py-12">
        <div id="product-1" className="shadow-xl rounded-xl p-3 w-96 ">
          <Image src="/keyboard/barang1.jpg" className="rounded-xl w-full" style={{objectFit: 'cover'}} width={540} height={540} alt=""/>
          <div className="px-4 py-5 grid grid-cols-7">
            <h3 className="text-xl font-medium col-span-4">Black Orange</h3>
            <p className="text-xl col-span-3 text-end">$199.00</p>
            <p className="col-span-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!</p>
          </div>
          <button className="w-full py-1 rounded-lg bg-gray-200 mb-3 hover:bg-gray-300 duration-200">Add to Cart</button>
        </div>
        <div id="product-1" className="shadow-xl rounded-xl p-3 w-96 ">
          <Image src="/keyboard/barang2.jpg" className="rounded-xl w-full" style={{objectFit: 'cover'}} width={540} height={540} alt=""/>
          <div className="px-4 py-5 grid grid-cols-7">
            <h3 className="text-xl font-medium col-span-4">Cyber Purple</h3>
            <p className="text-xl col-span-3 text-end">$199.00</p>
            <p className="col-span-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!</p>
          </div>
          <button className="w-full py-1 rounded-lg bg-gray-200 mb-3 hover:bg-gray-300 duration-200">Add to Cart</button>
        </div>
        <div id="product-1" className="shadow-xl rounded-xl p-3 w-96 ">
          <Image src="/keyboard/barang3.jpg" className="rounded-xl w-full" style={{objectFit: 'cover'}} width={540} height={540} alt=""/>
          <div className="px-4 py-5 grid grid-cols-7">
            <h3 className="text-xl font-medium col-span-4">Retro Cream</h3>
            <p className="text-xl col-span-3 text-end">$199.00</p>
            <p className="col-span-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!</p>
          </div>
          <button className="w-full py-1 rounded-lg bg-gray-200 mb-3 hover:bg-gray-300 duration-200">Add to Cart</button>
        </div>
        <div id="product-1" className="shadow-xl rounded-xl p-3 w-96 ">
          <Image src="/keyboard/barang4.jpg" className="rounded-xl w-full" style={{objectFit: 'cover'}} width={540} height={540} alt=""/>
          <div className="px-4 py-5 grid grid-cols-7">
            <h3 className="text-xl font-medium col-span-4">Mono Gray</h3>
            <p className="text-xl col-span-3 text-end">$199.00</p>
            <p className="col-span-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!</p>
          </div>
          <button className="w-full py-1 rounded-lg bg-gray-200 mb-3 hover:bg-gray-300 duration-200">Add to Cart</button>
        </div>
        <div id="product-1" className="shadow-xl rounded-xl p-3 w-96 ">
          <Image src="/keyboard/barang9.jpg" className="rounded-xl w-full" style={{objectFit: 'cover'}} width={540} height={540} alt=""/>
          <div className="px-4 py-5 grid grid-cols-7">
            <h3 className="text-xl font-medium col-span-4">Black Orange</h3>
            <p className="text-xl col-span-3 text-end">$199.00</p>
            <p className="col-span-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!</p>
          </div>
          <button className="w-full py-1 rounded-lg bg-gray-200 mb-3 hover:bg-gray-300 duration-200">Add to Cart</button>
        </div>
        <div id="product-1" className="shadow-xl rounded-xl p-3 w-96 ">
          <Image src="/keyboard/barang5.jpg" className="rounded-xl w-full" style={{objectFit: 'cover'}} width={540} height={540} alt=""/>
          <div className="px-4 py-5 grid grid-cols-7">
            <h3 className="text-xl font-medium col-span-4">Black Orange</h3>
            <p className="text-xl col-span-3 text-end">$199.00</p>
            <p className="col-span-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!</p>
          </div>
          <button className="w-full py-1 rounded-lg bg-gray-200 mb-3 hover:bg-gray-300 duration-200">Add to Cart</button>
        </div>
        <div id="product-1" className="shadow-xl rounded-xl p-3 w-96 ">
          <Image src="/keyboard/barang6.jpg" className="rounded-xl w-full" style={{objectFit: 'cover'}} width={540} height={540} alt=""/>
          <div className="px-4 py-5 grid grid-cols-7">
            <h3 className="text-xl font-medium col-span-4">Black Orange</h3>
            <p className="text-xl col-span-3 text-end">$199.00</p>
            <p className="col-span-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!</p>
          </div>
          <button className="w-full py-1 rounded-lg bg-gray-200 mb-3 hover:bg-gray-300 duration-200">Add to Cart</button>
        </div>
        <div id="product-1" className="shadow-xl rounded-xl p-3 w-96 ">
          <Image src="/keyboard/barang7.jpg" className="rounded-xl w-full" style={{objectFit: 'cover'}} width={540} height={540} alt=""/>
          <div className="px-4 py-5 grid grid-cols-7">
            <h3 className="text-xl font-medium col-span-4">Black Orange</h3>
            <p className="text-xl col-span-3 text-end">$199.00</p>
            <p className="col-span-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!</p>
          </div>
          <button className="w-full py-1 rounded-lg bg-gray-200 mb-3 hover:bg-gray-300 duration-200">Add to Cart</button>
        </div>
        <div id="product-1" className="shadow-xl rounded-xl p-3 w-96 ">
          <Image src="/keyboard/barang8.jpg" className="rounded-xl w-full" style={{objectFit: 'cover'}} width={540} height={540} alt=""/>
          <div className="px-4 py-5 grid grid-cols-7">
            <h3 className="text-xl font-medium col-span-4">Black Orange</h3>
            <p className="text-xl col-span-3 text-end">$199.00</p>
            <p className="col-span-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!</p>
          </div>
          <button className="w-full py-1 rounded-lg bg-gray-200 mb-3 hover:bg-gray-300 duration-200">Add to Cart</button>
        </div>
      </div>
    </section>
    </div>
  );
}
