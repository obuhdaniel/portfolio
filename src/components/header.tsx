import React, { useEffect } from "react";

interface TopNavbarProps {
  title: string;
  logo?: string;
  links?: Array<{ label: string; href: string }>;
  classname?: string;
}

const TopNavbar: React.FC<TopNavbarProps> = ({ title, logo, links, classname }) => {
  
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
      // Get the element directly beneath the navbar
      const elementUnderNav = document.elementFromPoint(window.innerWidth / 2, navbar.offsetHeight + 1);
      
      if (elementUnderNav) {
        // Get the computed background color of the element under the navbar
        const bgColor = window.getComputedStyle(elementUnderNav).backgroundColor;
        
        // Apply the background color to the navbar
        navbar.style.backgroundColor = bgColor;
      }
    }
  }, []);

  return (
    <nav
      id="navbar"
      className={`bg-transparent rounded-3xl lg:px-20 px-10 lg:py-10 py-5 lg:mx-10 mx-5 mt-10 bg-opacity-75 backdrop-blur-lg fixed top-0 left-0 right-0 z-10 flex justify-around lg:justify-between ${classname || ''}`}
    >
      <div className="navbar-brand flex items-center">
        {logo && <img src={logo} alt={title} className="navbar-logo mr-4" />}
        <span className="text-white font-black text-xl">{title}</span>
      </div>
      {links && links.length > 0 && (
        <div className="hidden gap-10 justify-between text-md font-medium text-white lg:flex">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="navbar-link">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default TopNavbar;
