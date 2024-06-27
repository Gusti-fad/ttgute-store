import Link from "next/link"
import Image from "next/image"
import Cart from "../../public/svgs/Cart"
import Profile from "../../public/svgs/Profile"
export default function Navbar() {
    return (
        <nav className="navbar bg-white w-full fixed z-10 hidden md:flex justify-between py-5 px-48">
            <Link href="/">
                <p className="poppins text-2xl font-semibold text-[#130f40]">TTGUTE STORE</p>
            </Link>
            <ul className="flex text-[#666] poppins text-[17px] items-center">
                    {/* <Link className="mr-5" href="#home"> */}
                        <li className="mr-5"><a href="#home">Home</a></li>
                    {/* </Link>
                    <Link className="mr-5" href="#about"> */}
                        <li className="mr-5"><a href="#about">About</a></li>
                    {/* </Link>
                    <Link className="mr-5" href="#bestseller1"> */}
                        <li className="mr-5"><a href="#bestseller1">Best Seller</a></li>
                    {/* </Link>
                    <Link className="mr-5" href="#bestseller2"> */}
                        <li className="mr-5"><a href="#product">Product</a></li>
                    {/* </Link>
                    <Link className="mr-5" href="/contact"> */}
                        <li><a href="#contact">Contact</a></li>
                    {/* </Link> */}
            </ul>
            <div className="flex">
                <Cart className="h-9 w-9 "/>
                <Profile  className="h-9 w-9" />
            </div>
        </nav>);
}

