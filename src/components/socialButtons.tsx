import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

// Define the props interface (if needed for future customizations)
interface SocialButtonsProps {
  className?: string; // Optional className for additional styling
}

const SocialButtons: React.FC<SocialButtonsProps> = ({ className }) => {
  return (
    <div className={`flex justify-center hidden sm:hidden md:hidden lg:space-x-8 space-x-1 mt-20 ${className}`}>
      {/* GitHub Button */}
      <a
        href="https://github.com/obuhdaniel"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center border-2 px-6 py-2 text-purple-600 bg-gray-800 rounded-xl hover:bg-gray-700 border-purple-600"
      >
        <FaGithub 
        size={40}
        />
        <span className='text-2xl text-white px-4 font-poppins'>GitHub</span>
      </a>

      
      <a
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center border-2 px-6 py-2 text-purple-600 bg-gray-800 rounded-xl hover:bg-gray-700 border-purple-600"
      >
        <FaLinkedin 
        size={40}/>
        <span className='text-2xl text-white px-4 font-poppins'>LinkedIn</span>
      </a>

      {/* Email Button */}
      <a
        href="mailto:danielobuh05@gmail.com"
        className="flex items-center border-2 px-6 py-2 text-purple-600 bg-gray-800 rounded-xl hover:bg-gray-700 border-purple-600"
      >
        <FaEnvelope 
        size={40}/>
        <span className='text-2xl text-white px-4 font-poppins'>Email</span>
      </a>
    </div>
  );
};

export default SocialButtons;
