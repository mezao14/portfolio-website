import Image from "next/image"
export default function AboutMe() {
  return (
    <div className="w-full h-screen">
    {/* Start of Hero */}
      <Image className=" -z-10 object-cover absolute  w-full h-full " src="/images/background-image-three.jpg" width={4500} height={3000} alt="" ></Image>
      <div className=" z-20 flex flex-col justify-center items-center w-screen h-screen text-neutral-800 font-Anek_Latin ">
        <div className="mx-11 leading-10 backdrop-blur-sm rounded-3xl bg-transparent/20 p-5 border-5 border-shadow">
          <h1 className=" text-lg text-start items-center whitespace-pre-line">About Me</h1>
          <p className="text-2xl text-left indent-5 whitespace-break-spaces">Hello! I'm Oscar Meza and I was born and raised in Dallas, Texas. I moved to the Bay Area in 2018 through the US Army Reserve, where I worked as a Human Resource Sergeant. In this role, I was responsible for personnel management, coordinating administrative tasks, and ensuring that the needs of soldiers were met efficiently. My time in the military instilled in me a strong sense of discipline, leadership, and problem-solving skills, all of which have been invaluable in my transition to civilian life and my academic pursuits. Moving to the Bay Area was a significant change, but it allowed me to explore new opportunities and immerse myself in a tech-driven environment. After my last deployment ended in 2022, I decided to channel the skills and values I learned in the Army toward a new goal—becoming a Computer Vision Engineer. This decision led me to begin my studies at Skyline College, where I am building the foundation for my future career.</p>
          <p className="text-2xl text-left indent-5"> I’m currently a Computer Science major with plans to transfer to San Jose State University as a Computer Engineering major by Fall 2026. My goal is to complete my Associate's Degree for Transfer in Computer Science and then take my studies to the next level at San Jose State. I’m really excited about the opportunities that SJSU offers, especially because their program has a strong focus on cutting-edge technology and hands-on learning. I believe this move will help me dive deeper into the areas of computer engineering and vision that I'm passionate about, and I’m looking forward to the chance to work with top-notch faculty and engage in projects that will push my skills further. This transfer is a big step toward achieving my career goals and I’m eager to make the most of it.</p>
          <p className="text-2xl text-left indent-5"> A few of my interests include powerlifting, photography, gaming, traveling, and discovering new food spots. Powerlifting has taught me discipline and the importance of consistency, which I carry into other areas of my life. Photography allows me to explore my creative side and capture the beauty I find in everyday moments. I enjoy gaming not just for the entertainment, but for the problem-solving and strategy aspects that challenge my mind. Traveling and finding new food spots give me a sense of adventure, introducing me to different cultures, experiences, and cuisines. Although life can get overwhelming at times, I believe it’s equally important to prioritize mental health by taking rest when necessary.</p>
          <p className="text-2xl text-left indent-5">My long-term goal is to specialize in computer vision, using technology to develop solutions for areas like autonomous systems, healthcare, or AI. The experiences I gained during my time in the military taught me resilience, adaptability, and a strong work ethic, which I now apply to my academic journey. As I continue my studies at Skyline College and prepare to transfer to San Jose State University, I’m excited to see how I can make an impact in the field of computer engineering.</p>
          <p className="text-lg text-end">-Oscar Meza</p>
        </div>
      </div>
    </div>
  );
}