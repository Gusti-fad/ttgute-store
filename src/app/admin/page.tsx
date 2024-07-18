"use client"
import Image from "next/image"
import { useState } from "react"

export default function Admin() {
    const [qty, setQty] = useState(0)
    let awal = 0
    const handleChange = (e: any) => {
        setQty(e.target.value)
        console.log(qty)
    }
    const maxLengthCheck = (object : any) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
        }
    return (
        <section className="pt-32 px-10 bg-gray-100 pb-40">
            <h1 className="font-poppins font-semibold text-2xl text-slate-800 text-center">Admin Page</h1>
            <div className="flex justify-center gap-5 mt-10">
                <div className="bg-gray-50 rounded-xl shadow-lg p-14 w-2/5">
                    <h2 className="font-poppins font-semibold text-xl text-slate-800">Stock Management </h2>
                    <div className="mt-10 grid gap-y-5">
                        <div className="w-full rounded-lg flex justify-between items-center">
                            <div className="flex items-center">
                                <Image src="/keyboard/barang1.jpg" className="mr-3" width={50} height={50} alt=""/>
                                <p className="font-poppins min-w-40 mr-3">Black Orange</p>
                            </div>
                            <div className="flex">
                                <button className="border border-gray-200 h-10 w-10 border-r-0" onClick={() => qty > 0 ? setQty(qty - 1) : setQty(0)}>-</button>
                                <div className="border-y border-gray-200 h-10 w-10 flex mx-auto">
                                <input type="number" value={qty} onChange={e => setQty(parseInt(e.target.value))} onInput={maxLengthCheck} maxLength={4} className=" h-full w-full outline-none text-center"/>
                                </div>
                                <button className="border border-gray-200 h-10 w-10 border-l-0" onClick={() => qty >= 9999 ? setQty(qty) : setQty(qty + 1)}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-xl shadow-lg py-20 px-10 ">
                    <h2 className="font-poppins font-semibold text-xl text-slate-800">Product Management </h2>
                </div>
            </div>
        </section>
    )
}