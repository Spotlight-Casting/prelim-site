import Carousel from "../components/carousel";
import Tarousel from "../components/testamonialcarousel"; // I called the testamonial carousel, Tarousel
import SignUpPopup from '../components/popup';
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="bg-black"
    >
      <header className="bg-black flex px-10 w-full">
      <Image 
        src="/home/logo.svg" 
        alt="Logo"
        className="justify-start mt-6" 
        width={70}
        height={100}
      />
      <div className="flex justify-end items-center w-full">
      <h2 className="font-custom mx-4 text-xl">
        Home
      </h2>
      <h2 className="font-custom mx-6 text-xl">
        Sign Up
      </h2>
      </div>
      </header>
      
    <div className="relative flex bg-black flex-col items-center justify-center"
    style={{ height: "750px" }}>
      <div className="relative z-10 text-center"> 
      <h3 className="font-bold text-xl">
        Your stage. Your camera. Your portfolio.
      </h3>
      <h1 className="font-custom text-7xl mt-1 px-10">
      HELPING FILMAKERS AND ACTORS BUILD EXPERIENCE
      </h1>
      <SignUpPopup />

      <div className="flex flex-wrap justify-center items-center mt-10 space-x-4">
  <h3 className="font-bold text-xl mr-4">
    Trusted by:
  </h3>
  <Image 
    src="/home/trusted6.png"
    alt="logo"
    width={100}
    height={100}
  />
  <Image 
    src="/home/trusted5.png"
    alt="logo"
    width={200}
    height={100}
  />
  <Image 
    src="/home/trusted4.png"
    alt="logo"
    width={130}
    height={100}
  />
  <Image 
    src="/home/trusted3.png"
    alt="logo"
    width={100}
    height={100}
  />
  <Image 
    src="/home/trusted2.png"
    alt="logo"
    width={100}
    height={100}
  />
  <Image 
    src="/home/trusted1.png"
    alt="logo"
    width={100}
    height={100}
  />
</div>
      <Image src="/home/dots.png" alt="assortment of dots" className="absolute right-[200px] top-[500px] flex z-0" width={200} height={300}/>
      </div>
    </div>
    <div className="flex mx-36 mt-5 relative z-10" >
      <div className="w-1/2">
        <h2 className="w-[600] text-5xl font-custom">
          Connect.
          Collaborate.
          Create.
        </h2>
        <p className="mt-10 ">
          At Spotlight, we connect student actors and filmmakers, empowering them to collaborate on creative projects that build their portfolios and kickstart their careers in the entertainment industry. 
        </p>
        <p className="mt-5">
          Our platform pairs aspiring talent with like-minded creators, providing opportunities to participate in acting events and feature in student films. With a mission to bridge the gap between education and real-world experience, Spotlight fosters a community where passion meets opportunity, helping students showcase their skills, gain valuable experience, and shine in their respective fields.
        </p>
      </div> 
      <div className="pl-40 mt-3">
        <Carousel />
          <p className="flex justify-center text-sm text-center px-20 mt-5">Student actors on set for the film “To Labour, with Love: premiering in February 2025.</p>
      </div>
    </div>

    <Image 
      src="/home/stars.png"
      alt="two stars"
      className="absolute left-32 mt-5"
      width={150}
      height={80}
    />

    <div className="mx-20 relative z-10" >
      <h2 className="flex mt-36 text-4xl font-custom text-yellow-400 justify-center text-center">
        4 FILMS, 15 STUDENTS, 60 days in operation
      </h2>  
      <h3 className="flex justify-center font-bold text-xl mt-5 text-center">
        connecting aspiring actors and filmakers to create, collaborate, and elevate their careers.
      </h3>
    </div>

    <Image 
      src="/home/stars.png"
      alt="two stars"
      className="absolute right-32 mt-12"
      width={150}
      height={80}
    />
    
    <div className="mx-52 mt-24 my-4 relative z-10" >
      <h3 className="text-4xl font-bold">Why Work With Us.</h3>
      <h4 className="text-xl font-bold mt-4">For student actors:</h4>
      <p className="">
        Spotlight offers an unmatched opportunity to gain real-world acting experience and grow your portfolio.
        By connecting you directly with student filmmakers, we ensure you’re part of projects that challenge your skills and allow your talent to shine. Plus, with our ongoing partnerships with renowned film festivals, your work has the potential to reach top industry professionals, opening doors to future opportunities and recognition.
      </p>
      <h4 className="text-xl font-bold mt-4">For filmakers:</h4>
      <p className="">
      As a filmmaker, Spotlight helps you bring your vision to life by connecting you with passionate and talented student actors ready to collaborate on meaningful projects. 
      Our platform streamlines the casting process, saving you time and effort while ensuring quality. 
      With exclusive access to film festival networks, Spotlight gives your projects a competitive edge, increasing their visibility and impact within the industry.
      </p>
    </div>
    <Image 
      src="/home/dots.png" 
      alt="assortment of dots" 
      className="absolute mt-6 right-[200px] flex w-[200px] h-300 z-0"
      width={200} height={300}
    />

    <div className=" mx-40 mt-32 relative z-10" >
      <h2 className="font-bold text-5xl">Testimonials</h2>
     <Tarousel/>
    </div>
    <div className="flex items-center justify-evenly mt-32 mb-10">
  <div className="flex mt-10items-center space-x-4">
    <Image 
      src="/home/Instagram.png" 
      alt="Instagram Logo" 
      width={30} height={20}
    />
    <h2 className="text-xl">@spotlight.info</h2>
  </div>
  <div className="flex items-center space-x-4">
    <Image 
      src="/home/gmail.png" 
      alt="Gmail Logo" 
      width={30} height={20}
    />
    <h2 className="text-xl">Gmail: spotlightcasting.ca@gmail.com</h2>
  </div>
  <div className="flex items-center space-x-4">
    <Image 
      src="/home/phone.png" 
      alt="Phone Logo" 
      width={30} height={20}
    />
    <h2 className="text-xl">Phone Number: 647-855-1118</h2>
  </div>
  <button className="bg-yellow-400 p-4 px-16 rounded-full hover:bg-yellow-500 text-black font-bold">
    Work with us!
  </button>
</div>

    </main>
  );
}
