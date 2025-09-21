import React from 'react'
import Spline from '@splinetool/react-spline'


function Service() {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0 ">
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#2e337e] to-[#a812ce] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full ">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <i class="bx bx-diamond"></i> Service
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8 whitespace-nowrap">
          Full Stack Web Dev 🚀
          <br />
           Backend Dev & APIs
          <br />
           Authentication & Authorization
          <br />
           Debugging & Optimization
          <br />
           Responsive Design
        </h1>

        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] ">
          I specialize in crafting high-performance, scalable, and responsive full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). From interactive frontends to secure and efficient backends, I build complete digital solutions tailored for startups, agencies, and businesses looking to scale fast.

With a strong focus on clean UI, RESTful API development, authentication, and performance optimization, I ensure your website or app is not only functional but also engaging and reliable across all devices.

I also integrate modern animations using tools like GSAP and Framer Motion to deliver a seamless, dynamic user experience.
        </p>

        {/* Buttons  */}
        <div className="flex gap-4 mt-12">
         
        </div>
      </div>
      <Spline  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0" data-aos-duration="2200"
      className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full" 
      scene="https://prod.spline.design/OTY7tpamq6w0FFwo/scene.splinecode" />
    </main>
  )
}

export default Service