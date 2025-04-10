'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon,
  ArrowLeftIcon, 
  CalendarIcon, 
  DocumentTextIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

// Certifications data
const certifications = [
  {
    id: 1,
    name: 'AWS Certified Cloud Practitioner - Foundational',
    issuer: 'Amazon Web Services',
    date: '2023-07-04',
    credentialId: '4G5L56EC81FEQFKE',
    description: 'Advanced certification for designing distributed systems on AWS. Covers complex architectural patterns, multi-account strategies, and advanced security implementations.',
    skills: ['AWS Architecture', 'Cloud Security', 'High Availability', 'Disaster Recovery', 'Cost Optimization'],
    logo: '/logos/aws-logo.svg'
  },
  {
    id: 2,
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: '2019-01-24',
    credentialId: '8VS8LJ81C2Q41MGH',
    description: 'Advanced certification for designing distributed systems on AWS. Covers complex architectural patterns, multi-account strategies, and advanced security implementations.',
    skills: ['AWS Architecture', 'Cloud Security', 'High Availability', 'Disaster Recovery', 'Cost Optimization'],
    logo: '/logos/aws-logo.svg'
  },
  {
    id: 3,
    name: 'AWS Certified Developer Engineer - Associate',
    issuer: 'Amazon Web Services',
    date: '2024-02-24',
    credentialId: '788fc4946beb4cd18391ea4793b2f7c3',
    description: 'Validates technical expertise in provisioning, operating, and managing distributed application systems on AWS. Covers CI/CD, monitoring, logging, and high availability.',
    skills: ['CI/CD', 'Infrastructure as Code', 'Monitoring', 'Logging', 'High Availability', 'Automation'],
    logo: '/logos/aws-logo.svg'
  },
  {
    id: 4,
    name: 'AWS Certified DevOps Engineer - Professional',
    issuer: 'Amazon Web Services',
    date: '2024-03-06',
    credentialId: '01b495a8edfa45ba92bcc1963deb3ada',
    description: 'Validates technical expertise in provisioning, operating, and managing distributed application systems on AWS. Covers CI/CD, monitoring, logging, and high availability.',
    skills: ['CI/CD', 'Infrastructure as Code', 'Monitoring', 'Logging', 'High Availability', 'Automation'],
    logo: '/logos/aws-logo.svg'
  },
  {
    id: 5,
    name: 'AWS Certified Security - Specialty',
    issuer: 'Amazon Web Services',
    date: '2024-03-29',
    credentialId: '2798c4686aa34bc8b5009ef82d58959e',
    description: 'Demonstrates expertise in security best practices and techniques specific to the AWS platform. Covers security controls, data protection, and incident response.',
    skills: ['Security Controls', 'Data Protection', 'Incident Response', 'Compliance', 'Security Automation'],
    logo: '/logos/aws-logo.svg'
  },
  // {
  //   id: 4,
  //   name: 'AWS Certified Database - Specialty',
  //   issuer: 'Amazon Web Services',
  //   date: 'December 2022',
  //   credentialId: 'AWS-456789',
  //   description: 'Validates expertise in designing, implementing, and troubleshooting AWS database solutions. Covers various database types and migration strategies.',
  //   skills: ['Database Design', 'Migration', 'Performance Tuning', 'High Availability', 'Backup & Recovery'],
  //   logo: '/logos/aws-logo.svg'
  // },
  // {
  //   id: 5,
  //   name: 'AWS Certified Machine Learning - Specialty',
  //   issuer: 'Amazon Web Services',
  //   date: 'November 2022',
  //   credentialId: 'AWS-567890',
  //   description: 'Demonstrates ability to design, implement, deploy, and maintain machine learning solutions on AWS. Covers ML frameworks, data processing, and model deployment.',
  //   skills: ['Machine Learning', 'Deep Learning', 'Data Processing', 'Model Deployment', 'ML Operations'],
  //   logo: '/logos/aws-logo.svg'
  // },
  {
    id: 6,
    name: 'AZ-100 Microsoft Azure Infrastructure and Deployment',
    issuer: 'Microsoft',
    date: 'January 30, 2019',
    credentialId: '8855cefd-4db5-42d5-9c7b-56bdefd0f55e',
    description: 'Validates skills in implementing, managing, and monitoring an organization\'s Microsoft Azure environment. Covers virtual networks, storage, compute, identity, security, and monitoring.',
    skills: ['Azure Portal', 'Azure CLI', 'PowerShell', 'ARM Templates', 'Azure Policy', 'Azure Monitor'],
    logo: '/logos/azure-logo.svg'
  },
  {
    id: 7,
    name: '532: Developing Microsoft Azure Solutions',
    issuer: 'Microsoft',
    date: 'November 23, 2018',
    credentialId: 'd2bdcec8-d472-4aaa-9a95-ef612cfa90b0',
    description: 'Validates skills in implementing, managing, and monitoring an organization\'s Microsoft Azure environment. Covers virtual networks, storage, compute, identity, security, and monitoring.',
    skills: ['Azure Portal', 'Azure CLI', 'PowerShell', 'ARM Templates', 'Azure Policy', 'Azure Monitor'],
    logo: '/logos/azure-logo.svg'
  },
  // {
  //   id: 7,
  //   name: 'Certified Kubernetes Administrator (CKA)',
  //   issuer: 'Cloud Native Computing Foundation',
  //   date: 'November 2022',
  //   credentialId: 'CKA-345678',
  //   description: 'Demonstrates the skills, knowledge, and competency to perform the responsibilities of Kubernetes administrators. Hands-on certification that requires solving real-world problems in a live environment.',
  //   skills: ['Kubernetes Architecture', 'Cluster Management', 'Security', 'Networking', 'Storage', 'Troubleshooting'],
  //   logo: '/logos/kubernetes-logo.svg'
  // },
  {
    id: 8,
    name: 'Red Hat Certified Engineer (RHCE)',
    issuer: 'Red Hat',
    date: 'August 2022',
    credentialId: 'RHCE-901234',
    description: 'Advanced certification for Red Hat Enterprise Linux system administration. Covers system configuration, security, networking, and service management.',
    skills: ['Linux Administration', 'System Security', 'Network Services', 'Storage Management', 'Automation'],
    logo: '/logos/redhat-logo.svg'
  },
  // {
  //   id: 9,
  //   name: 'HashiCorp Certified: Terraform Associate',
  //   issuer: 'HashiCorp',
  //   date: 'June 2022',
  //   credentialId: 'HCTA-567890',
  //   description: 'Validates skills in using Terraform to provision and manage infrastructure. Covers core concepts, state management, modules, and workspaces.',
  //   skills: ['Infrastructure as Code', 'Terraform Configuration', 'State Management', 'Modules', 'Workspaces'],
  //   logo: '/logos/terraform-logo.svg'
  // },
  // {
  //   id: 10,
  //   name: 'Google Cloud Professional Cloud Architect',
  //   issuer: 'Google Cloud',
  //   date: 'April 2022',
  //   credentialId: 'GCP-123789',
  //   description: 'Demonstrates the ability to design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions on Google Cloud Platform.',
  //   skills: ['GCP Architecture', 'Cloud Security', 'Data Solutions', 'Networking', 'Cost Management'],
  //   logo: '/logos/gcp-logo.svg'
  // }
];

export default function CertificationsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeCert, setActiveCert] = useState<number | null>(null);

  // Check for dark mode preference
  useEffect(() => {
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModePreference.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    
    darkModePreference.addEventListener('change', handleChange);
    
    return () => {
      darkModePreference.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <main className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/" 
            className={`inline-flex items-center ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} mb-4`}
          >
            <ArrowLeftIcon className="h-5 w-5 mr-1" />
            Back to Home
          </Link>
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Professional Certifications</h1>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A comprehensive list of my professional certifications and achievements in cloud computing, DevOps, and system administration.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: cert.id * 0.1 }}
              className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow duration-200`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    <img
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold';
                          fallback.textContent = cert.issuer.charAt(0);
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{cert.name}</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{cert.issuer}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <CalendarIcon className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mr-1`} />
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{cert.date}</span>
                </div>
                
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-3`}>
                  {cert.description}
                </p>

                <div className="mb-4">
                  <h4 className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index} 
                        className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-blue-100 text-blue-800'}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <DocumentTextIcon className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mr-1`} />
                    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>ID: {cert.credentialId}</span>
                  </div>
                  <button
                    onClick={() => setActiveCert(activeCert === cert.id ? null : cert.id)}
                    className={`text-sm ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                  >
                    {activeCert === cert.id ? 'Hide Details' : 'View Details'}
                  </button>
                </div>
              </div>
      
              {/* Expanded Details */}
              {activeCert === cert.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}
                >
                  <h4 className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Certification Details</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    {cert.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>Issuer</h5>
                      <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{cert.issuer}</p>
                    </div>
                    <div>
                      <h5 className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>Date Earned</h5>
                      <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{cert.date}</p>
                    </div>
                    <div>
                      <h5 className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>Credential ID</h5>
                      <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{cert.credentialId}</p>
                    </div>
                    <div>
                      <h5 className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>Expiration</h5>
                      <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>March 2026</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <GlobeAltIcon className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mr-1`} />
                    <a 
                      href="#" 
                      className={`text-sm ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                    >
                      Verify Credential
                    </a>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 