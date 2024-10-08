import Image from "next/image"


export default function Home() {
  return (
    <div>  
      
      <div className="w-full h-screen">
      {/* Start of Hero */}

        <Image className=" -z-10 object-cover absolute  w-full h-full " src="/images/background-image-three.jpg" width={4500} height={3000} alt="" ></Image>
        <div className=" z-20 flex flex-col justify-center items-center w-screen h-screen text-neutral-800 font-Anek_Latin text-center ">
          <h1 className="text-8xl ">Welcome,</h1>
          <p className="text-xl">My Name is Oscar Meza, and this is my portfolio!</p>
          <p className="text-xl">Above you will find info over my life and interests.</p>

        </div>
      </div>
    </div>
  );
}
