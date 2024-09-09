const Navbar = () => {
    return (
        <div className="flex flex-row pr-5 py-2 justify-between items-center bg-transparent/20 text-black">

      <p className="pl-5 text-2xl ">Oscar A. Meza</p>

      <div className="flex flex-row">

        <p className="rounded-l-xl bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 transition-all duration-200 px-3 py-2">About Me</p>
        <p className=" bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 transition-all duration-200 px-3 py-2">Resume</p>
        <p className=" bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 transition-all duration-200 px-3 py-2">Contact</p>
        <p className=" bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 transition-all duration-200 px-3 py-2">Photography</p>
        <p className=" bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 transition-all duration-200 px-3 py-2">Projects</p>
        <p className="rounded-r-xl bg-neutral-300 hover:bg-neutral-400 active:bg-neutral-500 transition-all duration-200 px-3 py-2">Service Record</p>
    
      </div>
    </div>
    )
}

export default Navbar