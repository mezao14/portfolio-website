import Image from "next/image"
export default function AboutMe() {
  return (
    <div className="w-screen h-screen">
      <Image className=" -z-10 object-cover absolute  w-screen h-screen " src="/images/background-image-three.jpg" width={4500} height={3000} alt="" ></Image>
      <div className=" z-20 flex flex-col justify-center items-center w-screen h-screen text-neutral-800 font-Anek_Latin ">
        <div className="mx-11 leading-10 backdrop-blur-sm rounded-3xl bg-transparent/20 p-5 border-5 border-shadow">
          <h1 className=" text-lg text-start items-center whitespace-pre-line">About Me</h1>
          <p className="text-2xl text-left indent-5 whitespace-break-spaces"></p>
          <p className="text-lg text-end">-Oscar Meza</p>
        </div>
      </div>
    </div>
  );
}
