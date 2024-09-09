import Image from "next/image"
export default function Photography() {
  return (
    <div>
      <div className="w-full h-screen">
      {/* Start of Hero */}

        <Image className=" -z-10 object-cover absolute  w-full h-full " src="/images/background-image-three.jpg" width={4500} height={3000} alt="" ></Image>
        <div className=" z-20 flex flex-col justify-center items-center w-screen h-screen text-neutral-800 font-Anek_Latin text-center ">
          <h1 className="text-8xl ">Photography</h1>
          <p className="text-xl">DESC</p>
          <p className="text-xl">DESC</p>

        </div>
      </div>
    </div>
  );
}
