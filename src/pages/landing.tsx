import React from "react";

import TopNavbar from '../components/header'
import CatchPhrase from '../components/catchPhrase';
import SocialButtons from '../components/socialButtons';
import DownloadCvButton from '../components/downloadCv';
import SkillsSection from '../components/skillsSection';
import ExperienceSection from '../components/experienceSection';
import ProjectsSection from '../components/projectsSection';
import Footer from '../components/footer';
import BlogSection from '../components/blogSection';
import BlogButton from "../components/blogButton";



import compass from '../assets/compass.png';
import compass2 from '../assets/compass2.png';
import crimpbyte from '../assets/crimpyte.png';
import szone from '../assets/szone.png';
import scanner from '../assets/scanner.png';
import rag from '../assets/rag.png';
import elaborate from '../assets/elaborate.png';
import { blogPosts } from '../contents/posts';



function LandingPage(){

    const navLinks = [
        { label: 'Projects', href: '#project' },
        { label: 'About', href: '#about' },
        { label: 'Say Hello', href: '#contact' },
      ];
    
      const frontend = [
        { name: 'Tailwind Css', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s' },
        { name: 'Flutter', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTks7GMBDrMiAOf66nZyzDSce2THZ-leOEpA&s' },
        { name: 'React', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
        { name: 'NextJs', imageUrl: 'https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg' },
      ];
    
      const backend = [
        { name: 'Express', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIrq4Je7z6sTWiUmCy2ROVBWjrkv67wBxhDA&s' },
        { name: 'Node.js', imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png' },
        { name: 'Firebase', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC1LWQEm5YGrBN5QQAJZDjVunPaXfRn_2WDw&s' },
        { name: 'Laravel', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWLusrEhuGwyB6Heq_sOUBnRbgXlm0iDF42A&s' },
        { name: 'GraphQL', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAt3c3IyQQ4ciJLsNIGKKouvF00KoDbXTAg&s' },
        
        
      ];
      const tools = [
        { name: 'Docker', imageUrl: 'https://www.docker.com/wp-content/uploads/2023/08/logo-dont-stretch.svg' },
        { name: 'Kubernetes', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX7oXZxS1xELdF5uAIDUpuyqEhPPpTQSlL2w&s' },
        { name: 'Postman', imageUrl: 'https://cdn.worldvectorlogo.com/logos/postman.svg' },
        { name: 'Git', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bctuHVp7CoSYIgexL8-iR5EfQq-E354UnA&s'},
        { name: 'Matlab', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7F_Sr2RjUOdbXAcMuq3jOtUypEUpQDkvaag&s'},
        { name: 'Streamlit', imageUrl: 'https://streamlit.io/images/brand/streamlit-mark-color.svg' },
        { name: 'Pytorch', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7SLyRBezarpEEzde4ryPQKw_gp5UmKCdMw&s' },
        { name: 'Godot', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Godot_icon.svg/2048px-Godot_icon.svg.png'},
        { name: 'Blender', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/939px-Blender_logo_no_text.svg.png'},
        { name: 'Figma', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZYisM7kdYMiF96V0d4Y5QEtAOopmWWCsaw&s'},
    ]
      
      const languages = [
        { name: 'Python', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUj8Su0VweSw_1jJY3OnHlSDthLcYZ-fyLw&s' },
        { name: 'JavaScript', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKso-FiHbcar_gMR70gMghvAD3mub8z8UmQ&s' },
        { name: 'C', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png'},
        { name: 'Rust', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3X6kNltLcXvHc8akxDy_JpYrZkABotlFLrQ&s' },
        { name: 'Dart', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Dart_logo.png'},
    
      ]
    
      const experience = [
        {
          title: 'Software Engineer',
          company: 'Crimpbyte Technologies Ltd',
          duration: 'June 2022 - Present',
          description: 'Developed user-friendly web applications with React and Tailwind CSS. Collaborated with backend developers to integrate APIs and enhance UI/UX designs.',
        },
        {
          title: 'Backend Developer ',
          company: 'WWRG AI labs',
          duration: 'April 2024 - Present',
          description: 'Assisted in building responsive web interfaces and debugging issues. Gained experience in working with Agile methodologies and software development practices.',
        },
        {
          title: 'Game Developer',
          company: 'Indie Freelance',
          duration: '2021 - Present',
          description: 'Designed wireframes and prototypes for various clients. Ensured all designs were consistent with brand guidelines and optimized for accessibility.',
        },
      ];
    
      const projects = [
        {
          name: 'Space Shooter Game',
          imageUrl: 'https://img.itch.zone/aW1nLzk5MzI1MjAuanBn/315x250%23c/H%2BJGCk.jpg',
          description: 'A fun and challenging 2D game built with Godot engine.',
          category: 'Game Development',
          projectUrl: 'https://obuh.itch.io/space',
        },
        {
          name: 'Compass Ai',
          imageUrl: compass,
          description: 'Mobile App for Student time Management Planning with Ai features',
          category: 'Mobile Apps',
          projectUrl: 'https://drive.google.com/file/d/1oEDQDRYBT879MQFivh2moAVwcAGcZ_nw/view?usp=sharing',
        },
        {
          name: 'Compass Ai Download Site',
          imageUrl: compass2,
          description: 'Download Sitefor Student time Management Planning with Ai features Mobile Application',
          category: 'Web Development',
          projectUrl: 'https://compassai.vercel.app/',
        },
        {
          name: 'Szone',
          imageUrl: szone,
          description: 'A blog Site for ranking and rating movies ad Trailers built using Next js and Graphql',
          category: 'Web Development',
          projectUrl: 'https://szone.com.ng',
        },
        {
          name: 'CPE AI',
          imageUrl: rag,
          description: 'A Retrieval Argumented Generation Model for Exploring the Department of Computer Engineering in Uniben built with Python',
          category: 'AI',
          projectUrl: 'https://github.com/obuhdaniel',
        },
        {
          name: 'Elaborate',
          imageUrl: elaborate,
          description: 'User Interface Design for the webSite',
          category: 'UI/UX',
          projectUrl: 'https://compassai.vercel.app/',
        },
        {
          name: 'Crimbbyte Technologies Ltd',
          imageUrl: crimpbyte,
          description: 'Development of the Landing Page using Tailwindcss and Next Js',
          category: 'Web Development',
          projectUrl: 'https://compassai.vercel.app/',
        },
    
        {
          name: 'Scanner + Obfuscator',
          imageUrl: scanner,
          description: 'Mobile App for scanning images and hiding Personal Information before sending to AI Models built using Flutter',
          category: 'Mobile Apps',
          projectUrl: 'https://github.com/obuhdaniel',
        },
        
      ];
    
    return(
        <>
        <main className="overflowx-hidden bg-gray-900">

        <TopNavbar
        title='Obuh Daniel'
        classname='sticky top-10'
        links={navLinks}

        />
    
        <CatchPhrase 
    
        subPhrase='Transforming Ideas into '
        subColor='text-white'
        mainPhrase='Scalable and Secure Digital Experiences'
        mainColor='bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500'
        subText='I’m Obuh Daniel, a versatile developer with expertise in full-stack development, mobile App development, Game development  and AI-driven applications. My focus is on delivering robust solutions that align with industry standards and the latest technological trends.'
        
        
        />
        <SocialButtons 
        
        className='mt-7 gap-40'/>
    
        <DownloadCvButton
        cvUrl='https://github.com/obuhdaniel'
        buttonText='Download My  CV'
        className='shadow-lg'
        />
    
        <SkillsSection
        skills={frontend}
        title='Frontend'
        
        />
    
        <SkillsSection
        skills={backend}
        title='Backend'
        
        />
    
        <SkillsSection
        skills={tools}
        title='Tools'
        />
    
        <SkillsSection
        skills={languages}
        title='Languages'
        />
    
        <ExperienceSection
        experiences={experience}
        title='Experience'
        />

        <div id="project">
        <ProjectsSection
        projects={projects}
        />

        </div>
    
       
    
    
        <BlogButton
        cvUrl="/blog/"
        buttonText="Blog"
        className="bg-purple-600"
        />

        <Footer/>

        </main>
        
    
    
        </>

    );
}

export default LandingPage