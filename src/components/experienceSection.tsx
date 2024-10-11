import React from 'react';


interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}


interface ExperienceSectionProps {
  experiences: Experience[]; 
  title?: string;
  className?: string; 
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences, title = "My Experience", className }) => {
  return (
    <section className={`py-12  px-4 font-poppins bg-gray-900 ${className}`}>
   
      <h2 className="text-3xl underline underline-offset-8 font-bold text-center mb-12 text-white">{title}</h2>

 
      <div className="max-w-6xl mx-auto space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-gray-300 shadow-md rounded-lg p-6 hover:shadow-lg transition duration-200"
          >

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              <span className="text-gray-600">{experience.duration}</span>
            </div>

            <h4 className="text-lg font-medium text-green-600 mb-2">{experience.company}</h4>


            <p className="text-gray-700 lg:text-lg sm:text-sm md:text-md">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
