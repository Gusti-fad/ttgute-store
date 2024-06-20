import Image from "next/image";
import Link from "next/link";

export default function Product() {
    return (
    <section id="product">
        <div className="mb-8">
            <h3 className="font-semibold text-4xl text-center">Our <span className="text-[#e67e22]">Products</span></h3>
        </div>
        <div id="product-container" className="flex flex-wrap justify-center gap-4 px-8 md:px-40 md:py-12">
            <div id="product-1" className="shadow-xl group cursor-pointer rounded-xl p-3 w-96">
                <div className="w-full rounded-xl overflow-hidden">
                    <Image src="/keyboard/barang1.jpg" className="rounded-xl w-full group-hover:scale-110 duration-200" style={{objectFit: 'cover'}} width={540} height={540} alt=""/>
                </div>
            <div className="px-4 py-5 grid grid-cols-7">
                <h3 className="text-xl font-medium col-span-4">Black Orange</h3>
                <p className="text-xl col-span-3 text-end">$199.00</p>
                <p className="col-span-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!</p>
            </div>
            <button className="w-full py-[5px] rounded-lg bg-gray-200 mb-3 hover:bg-gray-300 duration-200">Add to Cart</button>
            </div>
            <div id="product-1" className="shadow-xl rounded-xl p-3 w-96 group cursor-pointer">
            <div className="w-full rounded-xl overflow-hidden">
                <Image src="/keyboard/barang2.jpg" className="rounded-xl w-full group-hover:scale-110 duration-200" style={{objectFit: 'cover'}} width={540} height={540} alt=""/>
            </div>
            <div className="px-4 py-5 grid grid-cols-7">
                <h3 className="text-xl font-medium col-span-4">Cyber Purple</h3>
                <p className="text-xl col-span-3 text-end">$199.00</p>
                <p className="col-span-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!</p>
            </div>
            <button className="w-full py-[5px] rounded-lg bg-gray-200 mb-3 hover:bg-gray-300 duration-200">Add to Cart</button>
            </div>
            <div id="product-1" className="shadow-xl rounded-xl p-3 w-96 group cursor-pointer">
            <div className="w-full rounded-xl overflow-hidden">
                <Image src="/keyboard/barang3.jpg" className="rounded-xl w-full group-hover:scale-110 duration-200" style={{objectFit: 'cover'}} width={540} height={540} alt=""/>
            </div>
            <div className="px-4 py-5 grid grid-cols-7">
                <h3 className="text-xl font-medium col-span-4">Retro Cream</h3>
                <p className="text-xl col-span-3 text-end">$199.00</p>
                <p className="col-span-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!</p>
            </div>
            <button className="w-full py-[5px] rounded-lg bg-gray-200 mb-3 hover:bg-gray-300 duration-200">Add to Cart</button>
            </div>
            <div id="product-1" className="shadow-xl rounded-xl p-3 w-96 group cursor-pointer">
            <div className="w-full rounded-xl overflow-hidden">
                <Image src="/keyboard/barang4.jpg" className="rounded-xl w-full group-hover:scale-110 duration-200" style={{objectFit: 'cover'}} width={540} height={540} alt=""/>
            </div>
            <div className="px-4 py-5 grid grid-cols-7">
                <h3 className="text-xl font-medium col-span-4">Mono Gray</h3>
                <p className="text-xl col-span-3 text-end">$199.00</p>
                <p className="col-span-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!</p>
            </div>
            <button className="w-full py-[5px] rounded-lg bg-gray-200 mb-3 hover:bg-gray-300 duration-200">Add to Cart</button>
            </div>
            <div id="product-1" className="shadow-xl rounded-xl p-3 w-96 group cursor-pointer">
            <div className="w-full rounded-xl overflow-hidden">
                <Image src="/keyboard/barang9.jpg" className="rounded-xl w-full group-hover:scale-110 duration-200" style={{objectFit: 'cover'}} width={540} height={540} alt=""/>
            </div>
            <div className="px-4 py-5 grid grid-cols-7">
                <h3 className="text-xl font-medium col-span-4">Monster Blue</h3>
                <p className="text-xl col-span-3 text-end">$199.00</p>
                <p className="col-span-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!</p>
            </div>
            <button className="w-full py-[5px] rounded-lg bg-gray-200 mb-3 hover:bg-gray-300 duration-200">Add to Cart</button>
            </div>
            <div id="product-1" className="shadow-xl rounded-xl p-3 w-96 group cursor-pointer">
            <div className="w-full rounded-xl overflow-hidden">
                <Image src="/keyboard/barang5.jpg" className="rounded-xl w-full group-hover:scale-110 duration-200" style={{objectFit: 'cover'}} width={540} height={540} alt=""/>
            </div>
            <div className="px-4 py-5 grid grid-cols-7">
                <h3 className="text-xl font-medium col-span-4">Numb White</h3>
                <p className="text-xl col-span-3 text-end">$199.00</p>
                <p className="col-span-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!</p>
            </div>
            <button className="w-full py-[5px] rounded-lg bg-gray-200 mb-3 hover:bg-gray-300 duration-200">Add to Cart</button>
            </div>
            <div id="product-1" className="shadow-xl rounded-xl p-3 w-96 group cursor-pointer">
            <div className="w-full rounded-xl overflow-hidden">
                <Image src="/keyboard/barang6.jpg" className="rounded-xl w-full group-hover:scale-110 duration-200" style={{objectFit: 'cover'}} width={540} height={540} alt=""/>
            </div>
            <div className="px-4 py-5 grid grid-cols-7">
                <h3 className="text-xl font-medium col-span-4">Numb Purple</h3>
                <p className="text-xl col-span-3 text-end">$199.00</p>
                <p className="col-span-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!</p>
            </div>
            <button className="w-full py-[5px] rounded-lg bg-gray-200 mb-3 hover:bg-gray-300 duration-200">Add to Cart</button>
            </div>
            <div id="product-1" className="shadow-xl rounded-xl p-3 w-96 group cursor-pointer">
            <div className="w-full rounded-xl overflow-hidden">
                <Image src="/keyboard/barang7.jpg" className="rounded-xl w-full group-hover:scale-110 duration-200" style={{objectFit: 'cover'}} width={540} height={540} alt=""/>
            </div>
            <div className="px-4 py-5 grid grid-cols-7">
                <h3 className="text-xl font-medium col-span-4">Numb Orange</h3>
                <p className="text-xl col-span-3 text-end">$199.00</p>
                <p className="col-span-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!</p>
            </div>
            <button className="w-full py-[5px] rounded-lg bg-gray-200 mb-3 hover:bg-gray-300 duration-200">Add to Cart</button>
            </div>
            <div id="product-1" className="shadow-xl rounded-xl p-3 w-96 group cursor-pointer">
            <div className="w-full rounded-xl overflow-hidden">
                <Image src="/keyboard/barang8.jpg" className="rounded-xl w-full group-hover:scale-110 duration-200" style={{objectFit: 'cover'}} width={540} height={540} alt=""/>
            </div>
            <div className="px-4 py-5 grid grid-cols-7">
                <h3 className="text-xl font-medium col-span-4">Numb Gray</h3>
                <p className="text-xl col-span-3 text-end">$199.00</p>
                <p className="col-span-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!</p>
            </div>
            <button className="w-full py-[5px] rounded-lg bg-gray-200 mb-3 hover:bg-gray-300 duration-200">Add to Cart</button>
            </div>
        </div>
    </section>
    );
}