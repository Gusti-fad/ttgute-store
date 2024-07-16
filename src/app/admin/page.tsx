"use client"

import { PrismaClient } from "@prisma/client";

const submitProduct = async (event:any) => {
    event.preventDefault();
    
    const data = {
        item_name : event.currentTarget.product_name.value,
        price : event.currentTarget.price.value
    }
    const response = await fetch('/api/addProduct', {
        method: 'POST',
        body: JSON.stringify(data),
    });
    // const collection = await response.json();
};
export default function Admin() {
    return (
        <section id="admin" className="pt-40 pb-20 w-full min-h-screen bg-slate-200">
            <div className="w-[80%] bg-white mx-auto rounded-xl p-20">
                <h1 className="font-bold text-4xl mb-10">Add New Product</h1>
                <div>
                <form onSubmit={(e) => submitProduct(e)}  className="flex justify-between flex-wrap">
                    <div className="w-[49%]">
                        <label htmlFor="product_name" className="text-lg w-full">Pruduct Name <b className="text-red-500">*</b></label>
                        <input placeholder=" E.g. Black Orange" type="text" name="product_name" id="product_name" required className="border w-full border-slate-800 outline-none p-3 rounded-md mt-2"/>
                    </div>
                    <div className="w-[49%]">
                        <label htmlFor="product_name" className="text-lg w-full">Price <b className="text-red-500">*</b></label>
                        <input placeholder=" E.g. 100" type="number" min={0} name="price" id="price" required className="border w-full border-slate-800 outline-none p-3 rounded-md mt-2"/>
                    </div>
                    <div className="w-full flex justify-end pt-10">
                        <button className="py-2 px-7 bg-blue-500 text-white hover:bg-blue-700 rounded-lg duration-300">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </section>
    );
}