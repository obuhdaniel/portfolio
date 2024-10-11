import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`bg-gray-900 border-t-2 border-opacity-40 border-gray-950 font-poppins w-full mt-10 text-gray-300 py-10 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Logo or Brand Name */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold text-white">Obuh Daniel</h1>
          <p className="text-sm mt-2">Creating beautiful and functional web experiences</p>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="mb-6 md:mb-0">
          <ul className="flex flex-wrap space-x-6">
            <li>
              <a href="#home" className="hover:text-white transition duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition duration-200">
                Projects
              </a>
            </li>
            <li>
              <a href="/blog/" className="hover:text-white transition duration-200">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/obuhdaniel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-white transition duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://ng.linkedin.com/in/daniel-obuh-04665a2b9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-white transition duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/obuhdaniel2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-white transition duration-200"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom Section: Copyright Information */}
      <div className="text-center mt-8 text-sm text-gray-400">
        © {new Date().getFullYear()} Obuh Daniel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
