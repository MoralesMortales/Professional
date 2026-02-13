import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUIStore } from './uiStore'
import { translations, type Language } from '@/translations'

import placeit from '@/assets/projects/placeIt/1.jpeg'
import placeit_2 from '@/assets/projects/placeIt/2.jpeg'
import placeit_3 from '@/assets/projects/placeIt/3.jpeg'
import placeit_4 from '@/assets/projects/placeIt/4.jpeg'
import placeit_5 from '@/assets/projects/placeIt/5.jpeg'
import placeit_6 from '@/assets/projects/placeIt/6.jpeg'
import placeit_7 from '@/assets/projects/placeIt/7.jpeg'
import placeit_8 from '@/assets/projects/placeIt/8.jpeg'

import nomina1 from '@/assets/projects/nomina/msin.png'
import nomina2 from '@/assets/projects/nomina/2.png'
import nomina3 from '@/assets/projects/nomina/3.png'
import nomina4 from '@/assets/projects/nomina/4.png'

import paycheck1 from '@/assets/projects/paycheck_2_web/1.png'
import paycheck2 from '@/assets/projects/paycheck_2_web/2.png'
import paycheck3 from '@/assets/projects/paycheck_2_web/3.png'
import paycheck4 from '@/assets/projects/paycheck_2_web/4.png'

import letterSoup1 from '@/assets/projects/letter_soup/1.png'
import letterSoup2 from '@/assets/projects/letter_soup/2.png'
import letterSoup3 from '@/assets/projects/letter_soup/3.png'
import letterSoup4 from '@/assets/projects/letter_soup/4.png'
import letterSoup5 from '@/assets/projects/letter_soup/5.png'

import recipeMaster1 from '@/assets/projects/recipeMaster/1.png'
import recipeMaster2 from '@/assets/projects/recipeMaster/2.png'
import recipeMaster3 from '@/assets/projects/recipeMaster/3.png'

import loggingSystem1 from '@/assets/projects/networkLoggingSystem/3.jpeg'
import loggingSystem2 from '@/assets/projects/networkLoggingSystem/2.jpeg'
import loggingSystem3 from '@/assets/projects/networkLoggingSystem/1.jpeg'
import loggingSystem4 from '@/assets/projects/networkLoggingSystem/4.jpeg'
import loggingSystem5 from '@/assets/projects/networkLoggingSystem/5.jpeg'
import loggingSystem6 from '@/assets/projects/networkLoggingSystem/6.jpeg'
import loggingSystem7 from '@/assets/projects/networkLoggingSystem/7.jpeg'

import intruder1 from '@/assets/projects/intruderDetect/1.jpeg'
import intruder2 from '@/assets/projects/intruderDetect/2.jpeg'
import intruder3 from '@/assets/projects/intruderDetect/3.jpeg'
import intruder4 from '@/assets/projects/intruderDetect/4.jpeg'
import intruder5 from '@/assets/projects/intruderDetect/5.jpeg'

import trainSystem1 from '@/assets/projects/trainSystem_laravel/5.png'
import trainSystem2 from '@/assets/projects/trainSystem_laravel/1.png'
import trainSystem3 from '@/assets/projects/trainSystem_laravel/2.png'
import trainSystem4 from '@/assets/projects/trainSystem_laravel/3.png'
import trainSystem5 from '@/assets/projects/trainSystem_laravel/4.png'
import trainSystem6 from '@/assets/projects/trainSystem_laravel/7.png'
export const useProjectsStore = defineStore('projects', () => {
  const uiStore = useUIStore()
  
  // Estado - Lista base de proyectos con múltiples imágenes
  const projectsBase = ref([
    {
      id: 1,
      key: 'placeit',
      title: 'Place It - Find Stores Nearby!',
      description: 'An app that helps users find nearby stores and services based on their location.',
      longDescription: 'A mobile application designed to help users discover local businesses and services in real-time. Features include interactive maps, location-based search, user reviews, favorites list, and turn-by-turn navigation. Built with React Native for cross-platform compatibility.',
      technologies: ['React Native', 'SQLite', 'MapBox API', 'TypeScript', 'React', 'ApiRest'],
      hasLiveDemo: "https://drive.google.com/file/d/1x3yaZFCNfhOF6uP5xtii7fOBAMuyGSq7/view",
      demoLink: "https://drive.google.com/file/d/1x3yaZFCNfhOF6uP5xtii7fOBAMuyGSq7/view",
      codeLink: null,
      colorClass: 'project-purple',
      images: [placeit, placeit_2, placeit_3, placeit_4, placeit_5, placeit_6, placeit_7, placeit_8],
      alt: 'Place It App Preview',
      deviceType: 'mobile',
      imageFitClass: 'contain',
      imageClass: 'mobile',
      featureKeys: [
        'placeitFeature1',
        'placeitFeature2',
        'placeitFeature3',
        'placeitFeature4',
        'placeitFeature5',
        'placeitFeature6'
      ]
    },
    {
      id: 2,
      key: 'payrollDesktop',
      title: 'Payroll Desktop Program',
      description: 'A desktop application that helps users calculate and manage Fundación del Niño\'s payroll.',
      longDescription: 'A comprehensive desktop application developed for Fundación del Niño to automate and streamline payroll management. Features employee registration, automatic salary calculations, tax deductions, benefits management, and detailed payroll reports. Built with Electron and SQLite for offline functionality.',
      technologies: ['Python', 'PyQt', 'Qt', 'Qt Designer', 'MariaDB'],
      hasLiveDemo: null,
      demoLink: null,
      codeLink: 'https://github.com/MoralesMortales/Payroll_Program',
      colorClass: 'project-blue',
      images: [nomina1, nomina2, nomina3, nomina4],
      alt: 'Payroll Desktop Program Preview',
      deviceType: 'desktop',
      imageFitClass: 'cover',
      imageClass: 'desktop',
      featureKeys: [
        'payrollDesktopFeature1',
        'payrollDesktopFeature2',
        'payrollDesktopFeature3',
        'payrollDesktopFeature4',
        'payrollDesktopFeature5',
        'payrollDesktopFeature6'
      ]
    },
    {
      id: 3,
      key: 'payrollWeb',
      title: 'Payroll Web App',
      description: 'A web application for managing payroll for the Legislative Council of the State of Anzoátegui.',
      longDescription: 'A robust web-based payroll management system for the Legislative Council of Anzoátegui. Includes multi-user role management, complex salary structures, legislative compliance calculations, audit trails, and comprehensive reporting. Developed with Laravel and MySQL.',
      technologies: ['ExpressJs', 'React', 'JavaScript', 'MariaDB', 'ApiRest'],
      hasLiveDemo: null,
      demoLink: null,
      codeLink: null,
      colorClass: 'project-green',
      images: [paycheck1, paycheck2, paycheck3, paycheck4],
      alt: 'Payroll Web App Preview',
      deviceType: 'desktop',
      imageFitClass: 'cover',
      imageClass: 'desktop',
      featureKeys: [
        'payrollWebFeature1',
        'payrollWebFeature2',
        'payrollWebFeature3',
        'payrollWebFeature4',
        'payrollWebFeature5',
        'payrollWebFeature6'
      ]
    },
    {
      id: 4,
      key: 'letterSoup',
      title: 'Letter Soup Game',
      description: 'An interactive word search puzzle game with multiple difficulty levels and categories.',
      longDescription: 'A classic word search puzzle game reimagined with modern features. Includes multiple difficulty levels, themed word categories, timer challenges, hints system, and daily puzzles. Perfect for improving vocabulary and cognitive skills. Built with vanilla JavaScript and Canvas.',
      technologies: ['JavaScript', 'VueJs', 'Django', 'Python', 'ApiRest', 'MariaDB'],
      hasLiveDemo: null,
      demoLink: null,
      codeLink: 'https://github.com/MoralesMortales/letters_soup',
      colorClass: 'project-purple',
      images: [letterSoup1, letterSoup2, letterSoup3, letterSoup4, letterSoup5],
      alt: 'Letter Soup Game Preview',
      deviceType: 'desktop',
      imageFitClass: 'contain',
      imageClass: 'desktop',
      featureKeys: [
        'letterSoupFeature1',
        'letterSoupFeature2',
        'letterSoupFeature3',
        'letterSoupFeature4',
        'letterSoupFeature5',
        'letterSoupFeature6'
      ]
    },
    {
      id: 5,
      key: 'recipeMaster',
      title: 'Recipe Master',
      description: 'An application for discovering, saving, and sharing recipes with personalized recommendations.',
      longDescription: 'A culinary companion app that helps users discover new recipes, save their favorites, and share their own creations. Features include ingredient-based search, dietary filters, step-by-step cooking mode, meal planning calendar, and shopping list generator. Built with React and Firebase.',
      technologies: ['VueJs', 'JavaScript', 'Tailwind CSS', 'Quasar', 'Django', 'Python', 'ApiRest', 'MariaDB'],
      hasLiveDemo: null,
      demoLink: null,
      codeLink: 'https://github.com/MoralesMortales/recipeMaster',
      colorClass: 'project-blue',
      images: [recipeMaster1, recipeMaster2, recipeMaster3],
      alt: 'Recipe Master Preview',
      deviceType: 'desktop',
      imageFitClass: 'cover',
      imageClass: 'desktop',
      featureKeys: [
        'recipeMasterFeature1',
        'recipeMasterFeature2',
        'recipeMasterFeature3',
        'recipeMasterFeature4',
        'recipeMasterFeature5',
        'recipeMasterFeature6'
      ]
    },
    {
      id: 6,
      key: 'networkLogging',
      title: 'Smart Attendance & Network Logging System',
      description: 'An application for tracking attendance and logging network activity with real-time analytics.',
      longDescription: 'An enterprise-grade system for tracking employee attendance and monitoring network activity in real-time. Features include biometric integration, network packet analysis, suspicious activity alerts, detailed logs, and customizable reports. Developed with Python and Electron.',
      technologies: ['React Native', 'TypeScript', 'Django', 'Python', 'ApiRest', 'MariaDB', 'Arduino', 'C++', 'ESP_01S Wifi Module'],
      hasLiveDemo: null,
      demoLink: null,
      codeLink: 'https://github.com/MoralesMortales/BackendStudenttValidator',
      colorClass: 'project-green',
      images: [loggingSystem1, loggingSystem2, loggingSystem3, loggingSystem4, loggingSystem5, loggingSystem6, loggingSystem7],
      alt: 'Smart Attendance & Network Logging System Preview',
      deviceType: 'desktop',
      imageFitClass: 'cover',
      imageClass: 'desktop',
      featureKeys: [
        'networkLoggingFeature1',
        'networkLoggingFeature2',
        'networkLoggingFeature3',
        'networkLoggingFeature4',
        'networkLoggingFeature5',
        'networkLoggingFeature6'
      ]
    },
    {
      id: 7,
      key: 'intruderDetection',
      title: 'Intruder Detection System',
      description: 'An application for detecting and logging intrusions in real-time with automated alerts.',
      longDescription: 'A security system that uses computer vision to detect and log unauthorized access attempts. Features include motion detection, facial recognition, instant SMS/email alerts, video recording, and cloud backup. Built with OpenCV, Python, and TensorFlow Lite.',
      technologies: ['Arduino', 'C++'],
      hasLiveDemo: null,
      demoLink: null,
      codeLink: 'https://github.com/MoralesMortales/Alarm_ino',
      colorClass: 'project-purple',
      images: [intruder1, intruder2, intruder3, intruder4, intruder5],
      alt: 'Intruder Detection System Preview',
      deviceType: 'desktop',
      imageFitClass: 'cover',
      imageClass: 'desktop',
      featureKeys: [
        'intruderFeature1',
        'intruderFeature2',
        'intruderFeature3',
        'intruderFeature4',
        'intruderFeature5',
        'intruderFeature6'
      ]
    },
    {
      id: 8,
      key: 'trainSystem',
      title: 'Train Management System',
      description: 'An application for monitoring and managing train systems with real-time data visualization.',
      longDescription: 'A comprehensive train management system for monitoring schedules, tracking train locations, and managing maintenance operations. Features include real-time GPS tracking, predictive maintenance alerts, passenger counting, and performance analytics. Developed with Laravel and Vue.js.',
      technologies: ['Laravel', 'PHP', 'MariaDB'],
      hasLiveDemo: null,
      demoLink: null,
      codeLink: 'https://github.com/MoralesMortales/trainSystem',
      colorClass: 'project-blue',
      images: [trainSystem1, trainSystem2, trainSystem3, trainSystem4, trainSystem5, trainSystem6],
      alt: 'Train System Preview',
      deviceType: 'desktop',
      imageFitClass: 'cover',
      imageClass: 'desktop',
      featureKeys: [
        'trainFeature1',
        'trainFeature2',
        'trainFeature3',
        'trainFeature4',
        'trainFeature5',
        'trainFeature6'
      ]
    }
  ])
  
  // Getters - Proyectos con traducciones
  const projectsList = computed(() => {
    const t = translations[uiStore.language as Language] || translations.en
    
    return projectsBase.value.map(project => {
      let translatedTitle = project.title
      let translatedDescription = project.description
      let translatedLongDescription = project.longDescription
      let translatedFeatures = project.featureKeys.map(key => t[key as keyof typeof t] || key)
      
      switch(project.key) {
        case 'placeit':
          translatedTitle = t.project1Title
          translatedDescription = t.project1Desc
          translatedLongDescription = t.project1LongDesc
          break
        case 'payrollDesktop':
          translatedTitle = t.project2Title
          translatedDescription = t.project2Desc
          translatedLongDescription = t.project2LongDesc
          break
        case 'payrollWeb':
          translatedTitle = t.project3Title
          translatedDescription = t.project3Desc
          translatedLongDescription = t.project3LongDesc
          break
        case 'letterSoup':
          translatedTitle = t.project4Title
          translatedDescription = t.project4Desc
          translatedLongDescription = t.project4LongDesc
          break
        case 'recipeMaster':
          translatedTitle = t.project5Title
          translatedDescription = t.project5Desc
          translatedLongDescription = t.project5LongDesc
          break
        case 'networkLogging':
          translatedTitle = t.project6Title
          translatedDescription = t.project6Desc
          translatedLongDescription = t.project6LongDesc
          break
        case 'intruderDetection':
          translatedTitle = t.project7Title
          translatedDescription = t.project7Desc
          translatedLongDescription = t.project7LongDesc
          break
        case 'trainSystem':
          translatedTitle = t.project8Title
          translatedDescription = t.project8Desc
          translatedLongDescription = t.project8LongDesc
          break
      }
      
      return {
        ...project,
        title: translatedTitle,
        description: translatedDescription,
        longDescription: translatedLongDescription,
        features: translatedFeatures,
        
      }
    })
  })

  return {
    projectsBase,
    projectsList
  }
})