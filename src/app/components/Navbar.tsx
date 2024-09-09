import Link from "next/link"
export default function Navbar() {
    return(
        <div className=" z-40 absolute w-full flex flex-row shadow-2xl pr-5 py-2 justify-between items-center backdrop-blur-sm bg-transparent/20 text-black"> 

 <Link href="/" ><p className="  pl-5 text-2xl text-neutral-900 font-Anek_Latin hover:text-white hover:transition-shadow hover:animate-pulse ">Oscar A. Meza</p> </Link>

            <div className="flex flex-row">

                <Link href="/about-me" > <p className="rounded-l-xl bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 transition-all duration-200 px-3 py-2">About Me</p> </Link>
                <Link href="/resume"> <p className=" bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 transition-all duration-200 px-3 py-2">Resume</p> </Link>
                <Link href="/contact"> <p className=" bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 transition-all duration-200 px-3 py-2">Contact</p> </Link>
                <Link href="/photography"> <p className=" bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 transition-all duration-200 px-3 py-2">Photography</p> </Link>
                <Link href="/projects"> <p className=" bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 transition-all duration-200 px-3 py-2">Projects</p> </Link>
                <Link href="/service-record"> <p className="rounded-r-xl bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 transition-all duration-200 px-3 py-2">Service Record</p> </Link>

            </div>
        </div>
    )
}