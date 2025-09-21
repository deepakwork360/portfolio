import React from "react";
import 'boxicons/css/boxicons.min.css';
import { Link } from "react-router-dom";

const Header = () => {
// simple function to toggle the mobile menu
const toggleMobileMenu = () => {
  // Get the Mobile menu Element
  const mobileMenu = document.getElementById('mobileMenu')

// If it has the 'hidden' class, remove it . otherwise, add it 
      if(mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
      }
    }
    //github link
  const handleGithubClick = () => {
    window.location.href = "https://github.com/deepakwork360";
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-3xl md:text-4xl lg:text-5xl font-light m-0 bg-gradient-to-r from-pink-400 to-pink-800 via-purple-600 bg-clip-text text-transparent font-bold font-extrabold">
        S1MPLE 
      </h1>
      <nav className="hidden md:flex items-center gap-12">
        <Link data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000"
          className="text-base tracking-wider transition-colors hover:text-[#FF00FF]"
         to="/"
        >
          HOME
        </Link>

        <Link data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
          className="text-base tracking-wider transition-colors hover:text-[#FF00FF]"
          to="/service"
        >
          SERVICE
        </Link>

        <Link data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000"
          className="text-base tracking-wider transition-colors hover:text-[#FF00FF]"
          to="/aboutus"
        >
          ABOUT US
        </Link>

        <Link data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500"
          className="text-base tracking-wider transition-colors hover:text-[#FF00FF]"
          to="/contact"
        >
          CONTACT
        </Link>
      </nav>

      <button onClick={handleGithubClick}  className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">Github</button>

       {/* Mobile Menu Button - Visible only on Mobile */}
       <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
            <i class='bx  bx-menu' ></i> 
       </button>

       {/* MObile hidden by default  */}
       <div id="mobileMenu" className=" hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md ">
          <nav className="flex flex-col gap-6 items-center">
                <Link
          className="text-base tracking-wider transition-colors hover:text-gray-300"
          to="/"
        >
          HOME
        </Link>

        <Link
          className="text-base tracking-wider transition-colors hover:text-gray-300"
          to="/service"
        >
          SERVICE
        </Link>

        <Link
          className="text-base tracking-wider transition-colors hover:text-gray-300"
          to="/aboutus"
        >
          ABOUT US
        </Link>

        <Link
          className="text-base tracking-wider transition-colors hover:text-gray-300"
          to="/contact"
        >
          CONTACT
        </Link>
          </nav>
       </div>

    </header>
  );
};

export default Header;
