import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Import icon for project link


interface Project {
  name: string;
  imageUrl: string;
  description: string;
  category: any; // Categories for tabs
  projectUrl: string;
}


interface ProjectsSectionProps {
  projects: Project[]; 
  className?: string;  
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, className }) => {

  const [activeTab, setActiveTab] = useState<'All' | 'Mobile Apps' | 'AI' | 'Web Development' | 'UI/UX' | 'Game Development'>('All');


let filteredProjects = projects.filter(project => project.category === activeTab);


if (activeTab === 'All') {
  filteredProjects = projects;
}

 
  const tabs = ['Mobile Apps', 'AI', 'Web Development', 'UI/UX', 'Game Development'];

  return (
    <section className={`py-12  px-4 font-poppins bg-gray-900 ${className}`}>
 
      <h2 className="text-3xl font-bold text-white text-center underline underline-offset-8 mb-12">My Projects</h2>

      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4 mb-8">
  {tabs.map((tab, index) => (
    <button
      key={index}
      onClick={() => setActiveTab(tab as typeof activeTab)}
      className={`py-2 px-4 rounded-md text-lg font-medium ${
        activeTab === tab ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
      }`}
    >
      {tab}
    </button>
  ))}
</div>



      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={index} className="relative bg-white shadow-md rounded-lg overflow-hidden group">

            <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover" />


            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition duration-200"
              >
                View Project <FaExternalLinkAlt  />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
