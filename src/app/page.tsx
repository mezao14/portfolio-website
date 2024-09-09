import Image from "next/image"
export default function Home() {
  return (
    <div

    >  
      <div className=" absolute w-full flex flex-row pr-5 py-2 justify-between items-center backdrop-blur-sm bg-transparent/20 text-black">

        <p className="pl-5 text-2xl text-white font-Anek_Latin ">Oscar A. Meza</p>

        <div className="flex flex-row">

          <p className="rounded-l-xl bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 transition-all duration-200 px-3 py-2">About Me</p>
          <p className=" bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 transition-all duration-200 px-3 py-2">Resume</p>
          <p className=" bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 transition-all duration-200 px-3 py-2">Contact</p>
          <p className=" bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 transition-all duration-200 px-3 py-2">Photography</p>
          <p className=" bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 transition-all duration-200 px-3 py-2">Projects</p>
          <p className="rounded-r-xl bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 transition-all duration-200 px-3 py-2">Service Record</p>

        </div>
      </div>
      <div className="w-full h-screen">
        <Image className=" object-cover w-full h-full" src="/images/background-image-three.jpg" width={4500} height={3000} alt="" ></Image>
      </div>
    </div>

  )

}
