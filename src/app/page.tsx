'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  BriefcaseIcon, 
  AcademicCapIcon, 
  CodeBracketIcon, 
  EnvelopeIcon,
  ArrowDownTrayIcon,
  CloudIcon,
  ServerIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  HomeIcon,
  UserIcon,
  BookmarkIcon,
  BellIcon,
  ChatBubbleLeftIcon,
  AcademicCapIcon as CertIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  PhoneIcon,
  MapPinIcon,
  CogIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
      {/* Top Navigation Bar */}
      <nav className={`fixed top-0 w-full ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14">
            <div className="flex items-center">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
              >
                CK
              </motion.span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}
              >
                {isDarkMode ? '🌞' : '🌙'}
              </button>
              <button 
                onClick={() => setActiveSection('about')}
                className={`p-2 rounded-full ${activeSection === 'about' ? (isDarkMode ? 'text-blue-400' : 'text-blue-600') : (isDarkMode ? 'text-gray-300' : 'text-gray-600')} ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                <HomeIcon className="h-6 w-6" />
              </button>
              <button 
                onClick={() => setActiveSection('experience')}
                className={`p-2 rounded-full ${activeSection === 'experience' ? (isDarkMode ? 'text-blue-400' : 'text-blue-600') : (isDarkMode ? 'text-gray-300' : 'text-gray-600')} ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                <BriefcaseIcon className="h-6 w-6" />
              </button>
              <button 
                onClick={() => setActiveSection('skills')}
                className={`p-2 rounded-full ${activeSection === 'skills' ? (isDarkMode ? 'text-blue-400' : 'text-blue-600') : (isDarkMode ? 'text-gray-300' : 'text-gray-600')} ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                <CodeBracketIcon className="h-6 w-6" />
              </button>
              <button 
                onClick={() => setActiveSection('certifications')}
                className={`p-2 rounded-full ${activeSection === 'certifications' ? (isDarkMode ? 'text-blue-400' : 'text-blue-600') : (isDarkMode ? 'text-gray-300' : 'text-gray-600')} ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                <CertIcon className="h-6 w-6" />
              </button>
              <button 
                onClick={() => setActiveSection('training')}
                className={`p-2 rounded-full ${activeSection === 'training' ? (isDarkMode ? 'text-blue-400' : 'text-blue-600') : (isDarkMode ? 'text-gray-300' : 'text-gray-600')} ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                <UserGroupIcon className="h-6 w-6" />
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className={`p-2 rounded-full ${activeSection === 'contact' ? (isDarkMode ? 'text-blue-400' : 'text-blue-600') : (isDarkMode ? 'text-gray-300' : 'text-gray-600')} ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                <EnvelopeIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Layout */}
      <div className="pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Sidebar */}
            <div className="col-span-3">
              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border overflow-hidden`}>
                <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-800"></div>
                <div className="px-4 pb-4">
                  <div className="relative -mt-16">
                    <div className="w-24 h-24 rounded-full border-4 border-white bg-white overflow-hidden mx-auto">
                      <img 
                        src="/ck-pick.jpeg" 
                        alt="Chennakesavulu Kummari" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <div className="text-center">
                      <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Chennakesavulu Kummari</h2>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>Preferred Name: CK or Kesav</p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>DevOps & FinOps Engineer</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex justify-between text-sm">
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Profile views</span>
                        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>500+</span>
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Post impressions</span>
                        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>1.2k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Certifications Card - Moved to left sidebar */}
              <div className={`mt-4 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border p-4`}>
                <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2 flex items-center`}>
                  <CertIcon className="h-5 w-5 text-blue-500 mr-2" />
                  Professional Certifications
                </h3>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  {/* AWS Certifications */}
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 flex flex-col items-center justify-center`}>
                    <div className="w-12 h-12 mb-2">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path d="M6.763 4.29a1.724 1.724 0 0 0-1.045.328c-.32.22-.48.53-.48.93 0 .4.16.71.48.93.32.22.7.33 1.14.33.44 0 .82-.11 1.14-.33.32-.22.48-.53.48-.93 0-.4-.16-.71-.48-.93a1.724 1.724 0 0 0-1.14-.328zm10.474 0a1.724 1.724 0 0 0-1.045.328c-.32.22-.48.53-.48.93 0 .4.16.71.48.93.32.22.7.33 1.14.33.44 0 .82-.11 1.14-.33.32-.22.48-.53.48-.93 0-.4-.16-.71-.48-.93a1.724 1.724 0 0 0-1.14-.328zM12 4.29a1.724 1.724 0 0 0-1.045.328c-.32.22-.48.53-.48.93 0 .4.16.71.48.93.32.22.7.33 1.14.33.44 0 .82-.11 1.14-.33.32-.22.48-.53.48-.93 0-.4-.16-.71-.48-.93A1.724 1.724 0 0 0 12 4.29z" fill="#FF9900"/>
                      </svg>
                    </div>
                    <div className={`text-center ${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm font-medium`}>AWS</div>
                    <div className={`text-xs text-center mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Solutions Architect</div>
                  </div>
                  
                  {/* Azure Certifications */}
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 flex flex-col items-center justify-center`}>
                    <div className="w-12 h-12 mb-2">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path d="M11.4 24H0l11.4-11.4L22.8 24H11.4zm0-11.4L0 0h11.4l11.4 11.4H11.4z" fill="#0078D4"/>
                      </svg>
                    </div>
                    <div className={`text-center ${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm font-medium`}>Azure</div>
                    <div className={`text-xs text-center mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Administrator</div>
                  </div>
                  
                  {/* Red Hat Certifications */}
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 flex flex-col items-center justify-center`}>
                    <div className="w-12 h-12 mb-2">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#EE0000" strokeWidth="1.5" fill="none"/>
                      </svg>
                    </div>
                    <div className={`text-center ${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm font-medium`}>Red Hat</div>
                    <div className={`text-xs text-center mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>RHCSA</div>
                  </div>
                  
                  {/* Kubernetes Certifications */}
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 flex flex-col items-center justify-center`}>
                    <div className="w-12 h-12 mb-2">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#326CE5" strokeWidth="1.5" fill="none"/>
                      </svg>
                    </div>
                    <div className={`text-center ${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm font-medium`}>Kubernetes</div>
                    <div className={`text-xs text-center mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>CKA</div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <a 
                    href="/certifications" 
                    className={`text-sm ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} flex items-center`}
                  >
                    <CertIcon className="h-4 w-4 mr-1" />
                    View All Certifications
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-span-6">
              <AnimatePresence mode="wait">
                {activeSection === 'about' && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    {/* About Me Card */}
                    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border p-4`}>
                      <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2 flex items-center`}>
                        <UserIcon className="h-5 w-5 text-blue-500 mr-2" />
                        About Me
                      </h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        A seasoned DevOps & FinOps Engineer with 15+ years of experience in cloud infrastructure, automation, and cost optimization.
                      </p>
                    </div>

                    {/* Key Expertise Areas Card */}
                    <div className={`mt-4 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border p-4`}>
                      <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2 flex items-center`}>
                        <CogIcon className="h-5 w-5 text-blue-500 mr-2" />
                        Key Expertise Areas
                      </h3>
                      <div className="space-y-2">
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                          <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Cloud & DevOps</h4>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>AWS, Azure, GCP, Kubernetes, Terraform, CI/CD</p>
                        </div>
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                          <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>FinOps & Cost Optimization</h4>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Cloud Cost Management, Budgeting, Resource Optimization</p>
                        </div>
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                          <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Infrastructure as Code</h4>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Terraform, CloudFormation, ARM Templates</p>
                        </div>
                      </div>
                    </div>

                    {/* Leadership & Team Management Card */}
                    <div className={`mt-4 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border p-4`}>
                      <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2 flex items-center`}>
                        <UserGroupIcon className="h-5 w-5 text-blue-500 mr-2" />
                        Leadership & Team Management
                      </h3>
                      <div className="space-y-2">
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                          <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Team Leadership</h4>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Leading cross-functional teams, mentoring junior engineers</p>
                        </div>
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                          <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Project Management</h4>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Agile methodologies, sprint planning, stakeholder management</p>
                        </div>
                      </div>
                    </div>

                    {/* Career Highlights Card */}
                    <div className={`mt-4 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border p-4`}>
                      <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2 flex items-center`}>
                        <StarIcon className="h-5 w-5 text-blue-500 mr-2" />
                        Career Highlights
                      </h3>
                      <div className="space-y-2">
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                          <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Cloud Architecture</h4>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>AWS & Azure Cloud Architect role, designing scalable and secure cloud solutions</p>
                        </div>
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                          <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Infrastructure as Code</h4>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Infrastructure provisioning using Terraform, managing multi-cloud environments</p>
                        </div>
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                          <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Configuration Management</h4>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Automated configuration management using Ansible for consistent deployments</p>
                        </div>
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                          <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Containerization</h4>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Containerization using Docker and orchestration with Kubernetes</p>
                        </div>
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                          <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Cloud Migration</h4>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Successfully migrated 50+ applications to cloud platforms</p>
                        </div>
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                          <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Cost Optimization</h4>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Reduced cloud costs by 40% through optimization strategies</p>
                        </div>
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                          <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Automation</h4>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Implemented CI/CD pipelines reducing deployment time by 70%</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSection === 'experience' && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border p-6`}>
                      <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4 flex items-center`}>
                        <BriefcaseIcon className="h-6 w-6 text-blue-500 mr-2" />
                        Experience
                      </h2>
                      <div className="space-y-6">
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Solution Architect, DevOps & FinOps Engineer</h3>
                          <p className="text-blue-600 font-medium">Tech Mahindra • 2019 - Present</p>
                          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                            Leading cloud migration and DevOps initiatives for enterprise clients. Implementing CI/CD pipelines, 
                            infrastructure as code, and cloud security best practices. Managing FinOps strategies to optimize cloud costs.
                          </p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Solution Architect & DevOps Engineer</h3>
                          <p className="text-blue-600 font-medium">Capgemini • 2017 - 2019</p>
                          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                            Designed and implemented cloud solutions for Fortune 500 companies. Managed multi-cloud environments 
                            and automated infrastructure deployment. Led DevOps transformation initiatives.
                          </p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>DevOps Engineer</h3>
                          <p className="text-blue-600 font-medium">Netxcell LTD • 2014 - 2017</p>
                          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                            Implemented CI/CD pipelines and automated deployment processes. Managed containerized applications 
                            using Docker and Kubernetes. Optimized application performance and reliability.
                          </p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>DevOps Consultant</h3>
                          <p className="text-blue-600 font-medium">Teamware Solutions • 2013 - 2014</p>
                          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                            Provided consulting services for DevOps implementation. Assisted clients in transitioning to 
                            automated deployment and continuous integration practices.
                          </p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>AWS Cloud Engineer</h3>
                          <p className="text-blue-600 font-medium">Prokarma • 2010 - 2013</p>
                          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                            Designed and implemented AWS cloud infrastructure. Managed EC2, S3, and other AWS services. 
                            Implemented security best practices for cloud environments.
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-center">
                        <a 
                          href="/experience" 
                          className={`px-4 py-2 rounded-md ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'} transition-colors duration-200 flex items-center`}
                        >
                          <BriefcaseIcon className="h-5 w-5 mr-2" />
                          View Full Experience
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSection === 'skills' && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border p-6`}>
                      <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4 flex items-center`}>
                        <CodeBracketIcon className="h-6 w-6 text-blue-500 mr-2" />
                        Skills
                      </h2>
                      <div className="space-y-4">
                        {/* Cloud & DevOps Section */}
                        <div>
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                              <CloudIcon className="h-5 w-5 text-blue-600" />
                            </div>
                            <h3 className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Cloud & DevOps</h3>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>AWS</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>EC2, S3, IAM, CloudWatch</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Azure</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Compute, Storage, Database</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Docker & Kubernetes</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Containerization & Orchestration</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Jenkins & CI/CD</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Continuous Integration & Deployment</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Terraform & CloudFormation</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Infrastructure as Code</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* DevOps Tools & Technologies Section */}
                        <div>
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                              <ServerIcon className="h-5 w-5 text-green-600" />
                            </div>
                            <h3 className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>DevOps Tools</h3>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Version Control</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Git, GitHub, GitLab, AWS CodeCommit, Azure Repos</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>CI/CD Tools</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Jenkins, AWS CodeBuild, AWS CodePipeline, Azure Pipelines</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Code Quality & Security</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>SonarQube, Black Duck</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Artifact Repositories</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Nexus Sonatype, JFrog, Artifact</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Web Servers</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Httpd, Apache2, Nginx</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Application Servers</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Apache Tomcat, JBoss, GlassFish, WildFly, IIS</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Containerization</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Docker</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Container Orchestration</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Kubernetes (K8s), AWS EKS, AWS ECS, Azure AKS</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>GitOps Tools</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>ArgoCD, FluxCD</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Storage Solutions</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>AWS S3, Azure Blob Storage</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Disaster Recovery</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>CloudEndure, AWS Elastic Disaster Recovery (EDR)</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Backup & Recovery</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>CloudRanger</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>FinOps Tools</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>CloudHealth</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Visualization Tool</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Tableau</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Infrastructure & Automation Section */}
                        <div>
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                              <ShieldCheckIcon className="h-5 w-5 text-purple-600" />
                            </div>
                            <h3 className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Infrastructure & Automation</h3>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Infrastructure as Code (IaC)</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>AWS CloudFormation, Bicep, ARM Templates, Terraform</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Configuration Management (CM)</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Ansible</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>GitOps</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>GitOps Practices & Workflows</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Golden Image Creation</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Packer</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Monitoring & Observability</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Amazon CloudWatch, NewRelic</p>
                              </div>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-sm transition-shadow duration-200 flex items-center`}>
                              <div className="w-1 h-8 bg-orange-500 rounded-l-lg mr-2"></div>
                              <div>
                                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Shell Scripting & Python</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Automation & Scripting</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSection === 'certifications' && (
                  <motion.div
                    key="certifications"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border p-6`}>
                      <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4 flex items-center`}>
                        <CertIcon className="h-6 w-6 text-blue-500 mr-2" />
                        Certifications
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {/* Red Hat Certifications */}
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-md transition-shadow duration-200`}>
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-2">
                              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#EE0000" strokeWidth="1.5" fill="none"/>
                              </svg>
                            </div>
                            <h3 className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Red Hat</h3>
                          </div>
                          <div className="space-y-2">
                            <div className={`${isDarkMode ? 'bg-gray-600' : 'bg-white'} rounded-lg p-2 shadow-sm`}>
                              <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>RHCSA</p>
                              <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Red Hat Certified System Administrator</p>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-600' : 'bg-white'} rounded-lg p-2 shadow-sm`}>
                              <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>RHCE</p>
                              <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Red Hat Certified Engineer</p>
                            </div>
                          </div>
                        </div>

                        {/* AWS Certifications */}
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-md transition-shadow duration-200`}>
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-2">
                              <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.763 4.29a1.724 1.724 0 0 0-1.045.328c-.32.22-.48.53-.48.93 0 .4.16.71.48.93.32.22.7.33 1.14.33.44 0 .82-.11 1.14-.33.32-.22.48-.53.48-.93 0-.4-.16-.71-.48-.93a1.724 1.724 0 0 0-1.14-.328zm10.474 0a1.724 1.724 0 0 0-1.045.328c-.32.22-.48.53-.48.93 0 .4.16.71.48.93.32.22.7.33 1.14.33.44 0 .82-.11 1.14-.33.32-.22.48-.53.48-.93 0-.4-.16-.71-.48-.93a1.724 1.724 0 0 0-1.14-.328zM12 4.29a1.724 1.724 0 0 0-1.045.328c-.32.22-.48.53-.48.93 0 .4.16.71.48.93.32.22.7.33 1.14.33.44 0 .82-.11 1.14-.33.32-.22.48-.53.48-.93 0-.4-.16-.71-.48-.93A1.724 1.724 0 0 0 12 4.29zM6.763 8.29a1.724 1.724 0 0 0-1.045.328c-.32.22-.48.53-.48.93 0 .4.16.71.48.93.32.22.7.33 1.14.33.44 0 .82-.11 1.14-.33.32-.22.48-.53.48-.93 0-.4-.16-.71-.48-.93a1.724 1.724 0 0 0-1.14-.328zm10.474 0a1.724 1.724 0 0 0-1.045.328c-.32.22-.48.53-.48.93 0 .4.16.71.48.93.32.22.7.33 1.14.33.44 0 .82-.11 1.14-.33.32-.22.48-.53.48-.93 0-.4-.16-.71-.48-.93a1.724 1.724 0 0 0-1.14-.328zM12 8.29a1.724 1.724 0 0 0-1.045.328c-.32.22-.48.53-.48.93 0 .4.16.71.48.93.32.22.7.33 1.14.33.44 0 .82-.11 1.14-.33.32-.22.48-.53.48-.93 0-.4-.16-.71-.48-.93A1.724 1.724 0 0 0 12 8.29zM6.763 12.29a1.724 1.724 0 0 0-1.045.328c-.32.22-.48.53-.48.93 0 .4.16.71.48.93.32.22.7.33 1.14.33.44 0 .82-.11 1.14-.33.32-.22.48-.53.48-.93 0-.4-.16-.71-.48-.93a1.724 1.724 0 0 0-1.14-.328zm10.474 0a1.724 1.724 0 0 0-1.045.328c-.32.22-.48.53-.48.93 0 .4.16.71.48.93.32.22.7.33 1.14.33.44 0 .82-.11 1.14-.33.32-.22.48-.53.48-.93 0-.4-.16-.71-.48-.93a1.724 1.724 0 0 0-1.14-.328zM12 12.29a1.724 1.724 0 0 0-1.045.328c-.32.22-.48.53-.48.93 0 .4.16.71.48.93.32.22.7.33 1.14.33.44 0 .82-.11 1.14-.33.32-.22.48-.53.48-.93 0-.4-.16-.71-.48-.93A1.724 1.724 0 0 0 12 12.29z"></path>
                              </svg>
                            </div>
                            <h3 className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>AWS</h3>
                          </div>
                          <div className="space-y-2">
                            <div className={`${isDarkMode ? 'bg-gray-600' : 'bg-white'} rounded-lg p-2 shadow-sm`}>
                              <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Cloud Practitioner</p>
                              <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>AWS Certified Cloud Practitioner</p>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-600' : 'bg-white'} rounded-lg p-2 shadow-sm`}>
                              <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Solutions Architect</p>
                              <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>AWS Certified Solutions Architect</p>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-600' : 'bg-white'} rounded-lg p-2 shadow-sm`}>
                              <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Developer</p>
                              <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>AWS Certified Developer - Associate</p>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-600' : 'bg-white'} rounded-lg p-2 shadow-sm`}>
                              <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>DevOps Engineer</p>
                              <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>AWS Certified DevOps Engineer - Professional</p>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-600' : 'bg-white'} rounded-lg p-2 shadow-sm`}>
                              <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Security</p>
                              <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>AWS Certified Security - Specialty</p>
                            </div>
                          </div>
                        </div>

                        {/* Azure Certifications */}
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-md transition-shadow duration-200`}>
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.4 24H0l11.4-11.4L22.8 24H11.4zm0-11.4L0 0h11.4l11.4 11.4H11.4z" fill="#0078D4"/>
                              </svg>
                            </div>
                            <h3 className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Azure</h3>
                          </div>
                          <div className="space-y-2">
                            <div className={`${isDarkMode ? 'bg-gray-600' : 'bg-white'} rounded-lg p-2 shadow-sm`}>
                              <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Azure Infrastructure and Deployment</p>
                              <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>AZ-100 Microsoft Azure Infrastructure and Deployment</p>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-600' : 'bg-white'} rounded-lg p-2 shadow-sm`}>
                              <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>Azure Developer</p>
                              <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>532: Developing Microsoft Azure Solutions</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSection === 'training' && (
                  <motion.div
                    key="training"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border p-6`}>
                      <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4 flex items-center`}>
                        <UserGroupIcon className="h-6 w-6 text-blue-500 mr-2" />
                        Training & Workshops
                      </h2>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        I offer comprehensive training programs and workshops in cloud technologies, DevOps practices, and infrastructure automation.
                        These sessions are designed for both beginners and advanced professionals looking to enhance their skills.
                      </p>
                      
                      <div className="mt-6 space-y-4">
                        {/* AWS Training */}
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-2">
                              <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.763 4.29a1.724 1.724 0 0 0-1.045.328c-.32.22-.48.53-.48.93 0 .4.16.71.48.93.32.22.7.33 1.14.33.44 0 .82-.11 1.14-.33.32-.22.48-.53.48-.93 0-.4-.16-.71-.48-.93a1.724 1.724 0 0 0-1.14-.328zm10.474 0a1.724 1.724 0 0 0-1.045.328c-.32.22-.48.53-.48.93 0 .4.16.71.48.93.32.22.7.33 1.14.33.44 0 .82-.11 1.14-.33.32-.22.48-.53.48-.93 0-.4-.16-.71-.48-.93a1.724 1.724 0 0 0-1.14-.328zM12 4.29a1.724 1.724 0 0 0-1.045.328c-.32.22-.48.53-.48.93 0 .4.16.71.48.93.32.22.7.33 1.14.33.44 0 .82-.11 1.14-.33.32-.22.48-.53.48-.93 0-.4-.16-.71-.48-.93A1.724 1.724 0 0 0 12 4.29z" fill="#FF9900"/>
                              </svg>
                            </div>
                            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>AWS Cloud Training</h3>
                          </div>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
                            Comprehensive training covering AWS core services, architecture best practices, and certification preparation.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-600 text-gray-200' : 'bg-blue-100 text-blue-800'}`}>Solutions Architect</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-600 text-gray-200' : 'bg-blue-100 text-blue-800'}`}>Cloud Practitioner</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-600 text-gray-200' : 'bg-blue-100 text-blue-800'}`}>DevOps</span>
                          </div>
                        </div>
                        
                        {/* Azure Training */}
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.4 24H0l11.4-11.4L22.8 24H11.4zm0-11.4L0 0h11.4l11.4 11.4H11.4z" fill="#0078D4"/>
                              </svg>
                            </div>
                            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Azure Cloud Training</h3>
                          </div>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
                            In-depth training on Azure services, administration, development, and certification paths.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-600 text-gray-200' : 'bg-blue-100 text-blue-800'}`}>Administrator</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-600 text-gray-200' : 'bg-blue-100 text-blue-800'}`}>Developer</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-600 text-gray-200' : 'bg-blue-100 text-blue-800'}`}>DevOps</span>
                          </div>
                        </div>
                        
                        {/* DevOps Training */}
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                              <ServerIcon className="h-5 w-5 text-green-600" />
                            </div>
                            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>DevOps & CI/CD Training</h3>
                          </div>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
                            Practical training on DevOps methodologies, CI/CD pipelines, containerization, and infrastructure as code.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-600 text-gray-200' : 'bg-blue-100 text-blue-800'}`}>Docker</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-600 text-gray-200' : 'bg-blue-100 text-blue-800'}`}>Kubernetes</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-600 text-gray-200' : 'bg-blue-100 text-blue-800'}`}>Jenkins</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-600 text-gray-200' : 'bg-blue-100 text-blue-800'}`}>Terraform</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* <div className="mt-6 flex justify-center">
                        <a 
                          href="/training" 
                          className={`px-4 py-2 rounded-md ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'} transition-colors duration-200 flex items-center`}
                        >
                          <UserGroupIcon className="h-5 w-5 mr-2" />
                          View All Training Programs
                        </a>
                      </div> */}
                    </div>
                  </motion.div>
                )}

                {activeSection === 'contact' && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border p-6`}>
                      <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4 flex items-center`}>
                        <EnvelopeIcon className="h-6 w-6 text-blue-500 mr-2" />
                        Contact Me
                      </h2>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        Feel free to reach out to me through any of the following channels.
                      </p>
                      
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Contact Information */}
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Contact Information</h3>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <MapPinIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                              <div>
                                <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Location</p>
                                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                  Hyderabad, India
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Social Media */}
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Connect With Me</h3>
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                              </div>
                              <a href="https://www.linkedin.com/in/ck-devops/" target="_blank" rel="noopener noreferrer" className={`text-sm ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                                LinkedIn
                              </a>
                            </div>
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.995 16.979H7.005v-9.97h9.99v9.97zM12 5.5c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5z"/>
                                </svg>
                              </div>
                              <a href="https://github.com/kesavkummari/" target="_blank" rel="noopener noreferrer" className={`text-sm ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                                GitHub
                              </a>
                            </div>
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center mr-2">
                                <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                              </div>
                              <a href="https://www.instagram.com/kesavkummari/" target="_blank" rel="noopener noreferrer" className={`text-sm ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                                Instagram
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Contact Form */}
                      <div className={`mt-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Send Me a Message</h3>
                        <form className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Name</label>
                              <input 
                                type="text" 
                                id="name" 
                                className={`w-full px-3 py-2 rounded-md ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                placeholder="Your name"
                              />
                            </div>
                            <div>
                              <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Email</label>
                              <input 
                                type="email" 
                                id="email" 
                                className={`w-full px-3 py-2 rounded-md ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                placeholder="Your email"
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="subject" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Subject</label>
                            <input 
                              type="text" 
                              id="subject" 
                              className={`w-full px-3 py-2 rounded-md ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                              placeholder="Subject"
                            />
                          </div>
                          <div>
                            <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Message</label>
                            <textarea 
                              id="message" 
                              rows={4} 
                              className={`w-full px-3 py-2 rounded-md ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                              placeholder="Your message"
                            ></textarea>
                          </div>
                          <div className="flex justify-end">
                            <button 
                              type="submit" 
                              className={`px-4 py-2 rounded-md ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'} transition-colors duration-200`}
                            >
                              Send Message
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Sidebar */}
            <div className="col-span-3">
              {/* Experience Summary Card - Moved to right sidebar */}
              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border p-4`}>
                <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2 flex items-center`}>
                  <BriefcaseIcon className="h-5 w-5 text-blue-500 mr-2" />
                  Experience Summary
                </h3>
                <div className="space-y-3">
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Tech Mahindra</h4>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Solution Architect, DevOps & FinOps Engineer</p>
                    <p className="text-xs text-blue-600">2019 - Present</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Capgemini</h4>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Solution Architect & DevOps Engineer</p>
                    <p className="text-xs text-blue-600">2017 - 2019</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Netxcell LTD</h4>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>DevOps Engineer</p>
                    <p className="text-xs text-blue-600">2014 - 2017</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Teamware Solutions</h4>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>DevOps Consultant</p>
                    <p className="text-xs text-blue-600">2013 - 2014</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Prokarma</h4>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>AWS Cloud Engineer</p>
                    <p className="text-xs text-blue-600">2010 - 2013</p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <a 
                    href="/experience" 
                    className={`text-sm ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} flex items-center`}
                  >
                    <BriefcaseIcon className="h-4 w-4 mr-1" />
                    View Full Experience
                  </a>
                </div>
              </div>

              {/* Education Card */}
              <div className={`mt-4 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border p-4`}>
                <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2 flex items-center`}>
                  <AcademicCapIcon className="h-5 w-5 text-blue-500 mr-2" />
                  Education
                </h3>
                <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Osmania University</h4>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Master in Business Administration (Information Technology)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}