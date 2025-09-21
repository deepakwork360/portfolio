import React, { useEffect } from "react";
import Spline from '@splinetool/react-spline';
import gsap from "gsap";
import "../Contact.css";

const Contact = () => {
  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-item");

    const toggleSiblingClass = (items, index, offset, className, add) => {
      const sibling = items[index + offset];
      if (sibling) sibling.classList.toggle(className, add);
    };

    navItems.forEach((item, index) => {
      const onEnter = () => {
        item.classList.add("hover");
        toggleSiblingClass(navItems, index, -1, "sibling-close", true);
        toggleSiblingClass(navItems, index, 1, "sibling-close", true);
        toggleSiblingClass(navItems, index, -2, "sibling-far", true);
        toggleSiblingClass(navItems, index, 2, "sibling-far", true);
      };

      const onLeave = () => {
        item.classList.remove("hover");
        toggleSiblingClass(navItems, index, -1, "sibling-close", false);
        toggleSiblingClass(navItems, index, 1, "sibling-close", false);
        toggleSiblingClass(navItems, index, -2, "sibling-far", false);
        toggleSiblingClass(navItems, index, 2, "sibling-far", false);
      };

      item.addEventListener("mouseenter", onEnter);
      item.addEventListener("mouseleave", onLeave);

      return () => {
        item.removeEventListener("mouseenter", onEnter);
        item.removeEventListener("mouseleave", onLeave);
      };
    });
  }, []);

  // ✅ WhatsApp function
  const handleWhatsAppClick = () => {
    const phoneNumber = "918178050588"; // Replace with YOUR number
    const message = "Hello, I want to connect with you!"; // Optional message
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
       <div className="flex justify-center mt-20">
         <a className="playbtn" onClick={handleWhatsAppClick}>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
          CONNECT
        </a>
       </div>
     

      {/* Osmo Nav */}
      <section className="cloneable">
        <div className="nav-wrap">
          <nav className="nav-bar">
            <ul className="nav-list">
              {[
                { name: "Notion", img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be92ee5ddf0080fb90_notion.png" },
                { name: "GSAP", img: "https://avatars.githubusercontent.com/u/2386673?v=4" },
                { name: "Tailwind", img: "https://pbs.twimg.com/profile_images/1260924852028026881/48VQXP0n_400x400.jpg" },
                { name: "MongoDB", img: "https://yt3.googleusercontent.com/jTCHCZRGRBENFlEOeeUO1C-Vvg3h0c7vRqWzmlsKnn2N4ieevWVVjG-MvricQD8kzWfrXIk3Yw=s900-c-k-c0x00ffffff-no-rj" },
                { name: "Spotify", img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6bea97e140677496dae_spotify.png" },
                { name: "Webflow", img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6bea73fcc6ee568f6f0_webflow.png" },
                { name: "Spline", img: "https://yt3.googleusercontent.com/Idxls5gflKqlPBP9Sn6LJkwQ4uW-f291qq0gaKsvNJo6hvUigK35W8Ha-zm8eZAYPuGoZ6lk=s900-c-k-c0x00ffffff-no-rj" },
                { name: "Express JS", img: "https://www.manektech.com/storage/developer/1646733543.webp" },
                { name: "Figma", img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be1de916069b5e1aaa_figma.png" },
                { name: "React JS", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTokZliYkKkA5G-4WfbuaNpKj5f9PYnTUPLA&s" },
                { name: "Node JS", img: "https://www.angularminds.com/tech-logos/nodejs-logo.svg" },
              ].map((app, i) => (
                <li className="nav-item" key={i}>
                  <a href="#" className="nav-item__link">
                    <img src={app.img} alt={app.name} className="image" />
                  </a>
                  <div className="nav-item__tooltip">
                    <div>{app.name}</div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Credits */}
      <div className="osmo-credits">
        <p className="osmo-credits__p">
          Resource by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.osmo.supply/"
            className="osmo-credits__p-a"
          >
            Osmo
          </a>
        </p>
          
      </div>
    </>
  );
};


        
 
export default Contact