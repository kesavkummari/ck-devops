'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon, MapPinIcon, ArrowLeftIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Experience data
const experiences = [
  {
    id: 1,
    company: 'Tech Mahindra',
    role: 'Solution Architect, DevOps & FinOps Engineer',
    period: '2019 - Present',
    location: 'Hyderabad, India',
    description: 'Leading cloud architecture and DevOps initiatives for enterprise clients. Implementing infrastructure as code, CI/CD pipelines, and cloud cost optimization strategies.',
    skills: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI/CD'],
    achievements: [
      'Reduced cloud infrastructure costs by 35% through optimization strategies',
      'Implemented automated CI/CD pipelines reducing deployment time by 60%',
      'Led migration of legacy applications to cloud-native architecture'
    ],
    logo: '/logos/tech-mahindra-logo.svg'
  },
  {
    id: 2,
    company: 'Capgemini',
    role: 'Solution Architect & DevOps Engineer',
    period: '2017 - 2019',
    location: 'Bangalore, India',
    description: 'Designed and implemented cloud solutions for financial services clients. Managed DevOps practices and tools to improve development efficiency.',
    skills: ['AWS', 'Docker', 'Jenkins', 'Ansible', 'Python', 'Shell Scripting'],
    achievements: [
      'Architected multi-region cloud infrastructure for high availability',
      'Developed automated testing frameworks improving code quality',
      'Mentored junior team members on cloud and DevOps practices'
    ],
    logo: '/logos/capgemini-logo.svg'
  },
  {
    id: 3,
    company: 'Netxcell LTD',
    role: 'DevOps Engineer',
    period: '2014 - 2017',
    location: 'Hyderabad, India',
    description: 'Managed infrastructure and deployment pipelines for telecommunications clients. Implemented monitoring and alerting systems for production environments.',
    skills: ['Linux', 'Shell Scripting', 'Nagios', 'Jenkins', 'Git', 'AWS'],
    achievements: [
      'Implemented automated deployment pipelines reducing manual effort by 70%',
      'Set up comprehensive monitoring systems improving incident response time',
      'Automated routine maintenance tasks saving 15 hours per week'
    ],
    logo: '/logos/netxcell-logo.svg'
  },
  {
    id: 4,
    company: 'Teamware Solutions',
    role: 'DevOps Consultant',
    period: '2013 - 2014',
    location: 'Hyderabad, India',
    description: 'Managed server infrastructure and implemented automation scripts for routine tasks. Provided technical support and troubleshooting for production systems.',
    skills: ['Linux', 'Shell Scripting', 'Nagios', 'Apache', 'MySQL', 'Backup Systems'],
    achievements: [
      'Developed automation scripts reducing manual intervention by 50%',
      'Implemented backup and disaster recovery procedures',
      'Improved system uptime from 99.5% to 99.9%'
    ],
    logo: '/logos/wipro-logo.svg'
  },
  {
    id: 5,
    company: 'Prokarma',
    role: 'AWS Cloud Engineer',
    period: '2010 - 2013',
    location: 'Hyderabad, India',
    description: 'Supported infrastructure operations and implemented basic automation. Assisted senior team members with system maintenance and troubleshooting.',
    skills: ['Linux', 'Windows Server', 'Basic Scripting', 'Monitoring Tools', 'Help Desk Support'],
    achievements: [
      'Created documentation for common troubleshooting procedures',
      'Assisted in server migration projects',
      'Implemented basic monitoring for critical systems'
    ],
    logo: '/logos/infosys-logo.svg'
  }
];

export default function ExperiencePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Check for dark mode preference
  useEffect(() => {
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModePreference.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    
    darkModePreference.addEventListener('change', handleChange);
    return () => darkModePreference.removeEventListener('change', handleChange);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`py-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm sticky top-0 z-10`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold flex items-center">
              <BriefcaseIcon className="h-6 w-6 text-blue-500 mr-2" />
              Professional Experience
            </h1>
            <div className="w-24"></div> {/* Spacer for balanced layout */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              className={`rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300`}
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Card Header */}
              <div className={`p-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm">
                    {experience.logo ? (
                      <img src={experience.logo} alt={`${experience.company} logo`} className="w-8 h-8 object-contain" />
                    ) : (
                      <BriefcaseIcon className="h-6 w-6 text-blue-500" />
                    )}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{experience.company}</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{experience.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-sm mb-2">
                  <CalendarIcon className="h-4 w-4 mr-1 text-gray-500" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{experience.period}</span>
                </div>
                
                <div className="flex items-center text-sm">
                  <MapPinIcon className="h-4 w-4 mr-1 text-gray-500" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{experience.location}</span>
                </div>
              </div>
              
              {/* Card Body - Collapsible */}
              <motion.div 
                className={`overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                initial={{ height: 0 }}
                animate={{ height: activeCard === experience.id ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6">
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{experience.description}</p>
                  
                  <div className="mb-4">
                    <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className={`px-2 py-1 rounded-full text-xs ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-blue-100 text-blue-800'}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Key Achievements</h4>
                    <ul className={`list-disc pl-5 space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {experience.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              {/* Card Footer */}
              <div 
                className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} cursor-pointer flex items-center justify-center`}
                onClick={() => setActiveCard(activeCard === experience.id ? null : experience.id)}
              >
                <span className={`text-sm ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} mr-1`}>
                  {activeCard === experience.id ? 'Show Less' : 'Show More'}
                </span>
                {activeCard === experience.id ? (
                  <ChevronUpIcon className="h-4 w-4 text-blue-500" />
                ) : (
                  <ChevronDownIcon className="h-4 w-4 text-blue-500" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
} 