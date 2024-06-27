"use client"
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function ProductID({params} : {params: {IdProduct: string}}) {
    console.log(params);
    
    useEffect(() => {
        AOS.init();
    })
    return (
    <section id="product" className="h-screen w-screen flex items-center justify-center">
        <h1 className="font-bold text-4xl">Product {params.IdProduct}</h1>
    </section>
    );
}