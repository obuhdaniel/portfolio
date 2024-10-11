import React from 'react';
 
import { FaNewspaper } from 'react-icons/fa';// Import the download icon from react-icons

// Define props interface for potential future customization
interface DownloadCvButtonProps {
  cvUrl: string;  // URL of the CV file
  buttonText?: string; // Optional text to be displayed on the button (default: "Download CV")
  className?: string; // Optional className for additional styling
}

const DownloadCvButton: React.FC<DownloadCvButtonProps> = ({ cvUrl, buttonText = "Download CV", className }) => {
  return (
    <div className="flex font-poppins flex-col justify-center items-center w-auto">
  <span className="text-white text-center text-lg mb-4">
    Navigate to our blog to get updated with trending topics
  </span>
  <a
    href={cvUrl}
    className={`flex items-center text-center flex-row justify-center px-5 py-3 bg-transparent text-white rounded-2xl ${className}`}
  >
    <FaNewspaper size={20} />
    <span className="font-poppins text-xl px-2">{buttonText}</span>
  </a>
</div>

  );
};

export default DownloadCvButton;
