import "boxicons/css/boxicons.min.css";
import Spline from '@splinetool/react-spline'


const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] ">
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="max-w-xl ml-[5%] z-10 mt-0 md:mt-[20%] lg:mt-0 ">
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#6a297a] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full ">
          <div className="text-2xl lg:text-xs absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <i class="bx bx-diamond"></i> INTRODUCTION
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          EMAIL FOR
          <br />
          DEVELOPER
        </h1>

        <p className="text-base sm:text-lg tracking-wider text-gray-300 max-w-[25rem] lg:max-w-[30rem] ">
          I create immersive, high-performing mern stack websites tailored for
          startups, agencies, and in-house teams that need speed, scalability,
          and full control.
        </p>

        {/* Buttons  */}
        <div className="flex gap-4 mt-12">
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] "
            href="https://www.linkedin.com/in/deepak-bisht-49611b364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            LinkedIn
            <i class="bx  bx-link-external"></i>
          </a>

          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
            href="https://wa.me/918178050588"
          >
            GetStarted
            <i class="bx  bx-link-external"></i>
          </a>
        </div>
      </div>

         {/* 3d element purple  */}
          <div  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" data-aos-duration="2200"
      className="relative w-screen h-screen overflow-hidden" >
        <video autoPlay loop muted playsInline 
        className="fixed top-0 left-0 w-screen h-screen object-cover " >
          <source src="public2.mp4" type="video/mp4" />
        </video>
        </div>


    </main>
  );
};

export default Hero;