import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".intro-title", {
        y: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      // Animate paragraphs
      gsap.from(".about-text", {
        x: -120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.4,
        delay: 0.5,
      });

      // Floating glowing background
      gsap.to(".bg-glow", {
        x: "random(-50,50)",
        y: "random(-50,50)",
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden p-10"
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-screen h-screen object-cover z-0"
      >
        <source src="public1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔲 Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* 🌈 Glowing background element */}
      <div className="bg-glow absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-30 bg-gradient-to-r from-fuchsia-500 via-red-500 to-blue-500 z-0"></div>

      {/* 📄 Content */}
      <div className="relative z-10 max-w-4xl text-center text-white">
        <h1 className="intro-title text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-600 via-pink-500 to-red-400 bg-clip-text text-transparent mb-10">
          Hello, I'm Deepak Bisht <br />
          Mern Stack Developer
        </h1>

        <div className="space-y-6 text-lg text-emerald-200 leading-relaxed">
          <p className="about-text">
            I'm a passionate and detail-oriented Full Stack Developer with a
            focus on building responsive, interactive, and scalable web
            applications. With hands-on experience in both frontend and backend
            technologies, I enjoy turning ideas into digital solutions that are
            not only visually appealing but also optimized for performance and
            user experience.
          </p>

          <p className="about-text">
            I specialize in technologies like React.js, Next.js, Node.js,
            Express.js, and MongoDB, along with modern styling tools like
            Tailwind CSS and animation libraries and 3d tools such as GSAP,
            Spline and Framer Motion. Whether it's crafting seamless animations
            or building secure RESTful APIs, I’m driven by a love for clean code
            and continuous learning.
          </p>

          <p className="about-text">
            I take pride in writing maintainable code, collaborating effectively
            using Git & GitHub, and delivering responsive designs that work
            across devices. Currently, I’m diving deeper into full-stack
            development projects and always looking for opportunities to learn
            and grow in this ever-evolving field.
          </p>

          <h1 className="about-text text-3xl md:text-5xl font-semibold text-orange-700 mt-8">
            I Try To Work that’s worth talking about
          </h1>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
