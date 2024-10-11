import React from 'react';

// Define the structure of each skill in the props
interface Skill {
  name: string;
  imageUrl: string;
}

// Define props for the SkillsSection component
interface SkillsSectionProps {
  skills: Skill[]; // Array of skill objects with name and imageUrl
  title?: string; // Optional title for the section (default: "My Skills")
  className?: string; // Optional className for additional styling
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, title = "My Skills", className }) => {
  return (
    <section className={`py-12 font-poppins px-4 bg-gray-900 ${className}`}>
      {/* Section Title */}
      <h2 className="lg:text-3xl text-xl font-bold text-center text-white mb-8">{title}</h2>

      {/* Skills Grid */}
      <div className="lg:max-w-6xl max-w-xl lg:mx-40 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex justify-around text-gray-100 border-2 hover:bg-gray-800 border-gray-700 flex-col items-center p-2 bg-transparent rounded-lg shadow-md hover:shadow-lg transition duration-200">
            {/* Skill Image */}
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className="lg:w-16 lg:h-16 w-8 h-8 object-contain mb-2 lg:mb-4"
            />
            {/* Skill Name */}
            <span className="lg:text-lg md:text-md sm:text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
