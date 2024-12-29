import Carousel from "../components/carousel";

export default function Home() {
  return (
    <main
      className="bg-black"
    >
      <header className="bg-black flex px-10 w-full">
      <img src="/logo.svg" alt="Logo" className="w-16 h-16 justify-start" />
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
      Connecting student actors to filmmakers
      </h1>
      <div className="flex justify-center mt-4">
      <h3 className="font-bold text-xl">
        Trusted by:
      </h3>
      <h3 className="text-xl">
        KINGSTON CANADIAN FILM FESTIVAL   DDQIC   LOI   INQUBATE
      </h3>
      </div>
      <button className="bg-yellow-400 p-4 px-16 rounded-full hover:bg-yellow-500 text-black mt-4 font-bold">
        Sign Up
      </button>
      <img src="/dots.png" alt="assortment of dots" className="absolute right-[200px] flex w-[200px] h-300 z-0"/>
  
      <img src="/pngegg 1.png" alt="video roll" className="absolute -z-20 w-full right-0 top-[900px]"/>
      </div>
    </div>
    <div className="flex mx-36 mt-5 relative z-10" >
      <div className="" style={{ width: "50%" }}>
        <h2 className="w-[600] text-6xl font-custom">
          Connect.
          Collaborate.
          Create.
        </h2>
        <p className="mt-10">
          Spotlight is a plat
        </p>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur aliquam lobortis. Cras nec pellentesque enim. Cras tempus porta nisl sit amet aliquet. Fusce fringilla dictum quam, vitae bibendum dui pulvinar id. Etiam ullamcorper blandit dui et venenatis.
        </p>
        <p className="mt-5">
          Donec eget felis odio. Praesent justo felis, viverra sed enim at, commodo aliquam nunc. Mauris sagittis, ligula sed eleifend consectetur, justo eros scelerisque justo, at lacinia metus ligula vel ante. Donec sed sem tristique, condimentum nisl ac, interdum nisi. Proin consectetur nisl elit, eget interdum urna rutrum non. In ut pellentesque sapien, quis fermentum turpis. In vel mauris ante. Curabitur aliquam, nunc vitae fringilla vestibulum, neque turpis lobortis metus, nec rhoncus lorem sapien vel dolor.
        </p>
      </div> 
      <div className="pl-40">
        <Carousel />
          <h5 className="font-bold text-xl flex justify-center mt-6"> NAME SURNAME.</h5>
          <p className="flex justify-center text-center px-20 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
    <div className="mx-20 relative z-10" >
      <h2 className="flex mt-20 text-7xl font-custom justify-center">
        3 FILMS, 15 STUDENTS
      </h2>  
      <h3 className="flex justify-center font-bold text-xl mt-5">
        connecting aspiring actors and filmakers to create, collaborate, and elevate their careers.
      </h3>
    </div>
    
    <div className="mx-52 mt-20 my-4 relative z-10" >
      <h3 className="text-3xl font-bold">Why Work With Us.</h3>
      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur aliquam lobortis. Cras nec pellentesque enim. Cras tempus porta nisl sit amet aliquet. Fusce fringilla dictum quam, vitae bibendum dui pulvinar id. Etiam ullamcorper blandit dui et venenatis.
      </p>
      <p className="mt-4">
        Donec eget felis odio. Praesent justo felis, viverra sed enim at, commodo aliquam nunc. Mauris sagittis, ligula sed eleifend consectetur, justo eros scelerisque justo, at lacinia metus ligula vel ante. Donec sed sem tristique, condimentum nisl ac, interdum nisi. Proin consectetur nisl elit, eget interdum urna rutrum non. In ut pellentesque sapien, quis fermentum turpis. In vel mauris ante. Curabitur aliquam, nunc vitae fringilla vestibulum, neque turpis lobortis metus, nec rhoncus lorem sapien vel dolor.
      </p>
    </div>
    <img src="/dots.png" alt="assortment of dots" className="absolute mt-6 right-[200px] flex w-[200px] h-300 z-0"/>

    <div className=" mx-40 mt-32 relative z-10" >
      <h2 className="font-bold text-5xl">Testimonials</h2>
      <div className="flex justify-center mt-10">
        <img src="/carousel/carousel1.png" alt="carousel" className="w-[350px] h-[350px] "/>
        <img src="/carousel/carousel2.png" alt="carousel" className="w-[350px] h-[350px] mx-3"/>
        <img src="/carousel/carousel3.png" alt="carousel" className="w-[350px] h-[350px]"/>
      </div>
    </div>

    <div className="relative z-10 mx-[500px] mt-20 pb-10" >
      <div className="flex text-3xl">
        <h2 className="">Instagram: </h2>
        <h2 className="pl-2">@spotlight.info</h2>
      </div>
      <div className="flex text-3xl">
        <h2 className="">Gmail: </h2>
        <h2 className="pl-2">spotlightcasting.ca@gmail.com</h2>
      </div>
      <div className="flex text-3xl">
        <h2 className="">Phone Number: </h2>
        <h2 className="pl-2">647-855-1118</h2>
      </div>
      <div className="flex justify-center">
      <button className="bg-yellow-400 p-4 px-16 rounded-full hover:bg-yellow-500 text-black mt-4 font-bold">
        Work with us!
      </button>
      </div>
    </div>
    </main>
  );
}
