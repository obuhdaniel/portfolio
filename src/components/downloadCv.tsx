import React from 'react';
import { FaDownload } from 'react-icons/fa'; // Import the download icon from react-icons

// Define props interface for potential future customization
interface DownloadCvButtonProps {
  cvUrl: string;  // URL of the CV file
  buttonText?: string; // Optional text to be displayed on the button (default: "Download CV")
  className?: string; // Optional className for additional styling
}

const DownloadCvButton: React.FC<DownloadCvButtonProps> = ({ cvUrl, buttonText = "Download CV", className }) => {
  return (
    <div className='flex justify-center items-center w-auto'>
        <a
      href={cvUrl}
      download
      className={`flex items-center text-center flex-row justify-center m-20 px-5 py-3 bg-transparent text-white rounded-2xl hover:border-2 hover:border-white ${className}`}
    >

      <FaDownload 
      
      size={40}/>
      
      <span className='font-poppins text-4xl px-6'>{buttonText}</span>
    </a>
    </div>
  );
};

export default DownloadCvButton;
