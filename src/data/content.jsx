import React, { useState } from "react";
import { School, GraduationCap } from "lucide-react";

export const experience = [
  {
    title: "Software Consultant",
    company: "FinMechanics",
    period: "Apr 2024 - Present",
    items: [
      "Integrated bullion indent order workflow in Spring Boot microservices, achieving 30% faster response times vs legacy competitor solutions",
      "Led AI-enabled reporting automation using Ollama & Gemini API, reducing manual effort by 80% and accelerating report configuration",
      "Developed a fault‑tolerant trade ingestion interface using Hazelcast queues, processing 40K+ trades/day with 40% lower latency and 99% uptime",
      "Optimized DB and microservices performance via indexing and logic refactors, cutting DB latency by 80% and heap usage by 40%"
    ],
    tags: ["Spring Boot", "AWS", "Rest API", "GitLab", "AI", "PostgreSQL", "MS SQL"]
  },
  {
    title: "Associate Consultant",
    company: "FinMechanics",
    period: "Jun 2022 - Mar 2024",
    items: [
      "Built a UI-driven report scheduler using Quartz & Hazelcast queues, deploying a dedicated multithreaded microservice for custom scheduling",
      "Designed and implemented SMTP-based automated email alerts for interface failures, mitigating risk of business loss from undetected system issues",
      "Configured 50+ Groovy-based risk limits to enable sub‑minute valuation of 200K+ trades for NOP, Credit, and Market Risk metrics",
      "Resolved security flaws in 10+ modules via XSS checks, JS libraries upgrades, and CSP headers to prevent injection and HTTP smuggling attacks"
    ],
    tags: ["Spring Boot", "Java", "MS SQL", "Oracle", "Tomcat", "HTTP", "Groovy", "Hazelcast"]
  },
  {
    title: "DevOps Engineering Intern",
    company: "Abzooba",
    period: "May 2021 - Jun 2021",
    items: [
      "Integrated Zabbix for scalable monitoring of 5K+ metrics across 10+ Kubernetes services, improving system-wide visibility and proactive fault detection",
      "Automated platform resilience by scripting self-healing workflows to restart unresponsive pods, reducing manual recovery effort by ~80% and improving SLA adherence",
      "Developed a CoreDNS plugin for cross-cluster service discovery, enabling scalable Kubernetes routing and eliminating static IP dependencies"
    ],
    tags: ["Python", "Zabbix", "Kubernetes", "Docker", "Shell"]
  },
  {
    title: "Web Developer",
    company: "Agrivision4U",
    period: "May 2020 -  Dec 2021",
    items: [
      "Developed Laravel website with login, user dashboards, and PDF reader, enhancing user experience and engagement",
      "Integrated Razorpay payment gateway for registrations, enabling the platform’s first revenue with 1000+ applications",
      "Scaled reach to 30K+ visitors from 20+ countries by deploying on GoDaddy with 99% uptime and leveraging Google Analytics insights"
    ],
    tags: ["Laravel", "PHP", "GoDaddy", "Razorpay", "Google Analytics"]
  },
];


export const allProjects = [
  {
    title: "CRM Dashboard",
    description: "A simple Django web application for employee and role management in a corporate setting, featuring CRUD functionality and MySQL database for efficient data storage and retrieval with secure login access and an interactive user dashboard.",
    skills: ["Django", "Python", "MySQL"],
    date: "2024",
    link: "https://github.com/krnchittora2/DjangoCRUD",
    platform: "Self"
  },
  {
    title: "Portfolio Website",
    description: "A dynamic portfolio using React, Framer Motion, and Vite hosted on GitHub Pages with theme support.",
    skills: ["React", "ChatGPT"],
    date: "2025",
    link: "https://krnchittora2.github.io/portfolio/",
    platform: "Self"
  },
  {
    title: "House Price Prediction",
    description: "Random Forest Regression model to predict the prices of houses in a city using 80 features. Accuracy Score - 0.87.",
    skills: ["Machine Learning", "Python"],
    date: "2021",
    link: "https://github.com/krnchittora2/ML-House-Price-Prediction-Regression-Modelling",
    platform: "Technical Council, IIT Bombay"
  },
  {
    title: "Blockchain for EHR",
    description: "An innovative user-centric data-driven digital platform to link medical facilities with financial aid, incorporating blockchain technology for secure and transparent transactions.",
    skills: ["Product Design"],
    date: "2019",
    link: "https://github.com/krnchittora2/Projects/tree/main/Blockchain%20for%20EHR",
    platform: "Prof. Nina Sabnani, IIT Bombay"
  }
];


export const journeyTree = [
  {
    year: "2018-2022",
    school: "IIT Bombay",
    icon: <GraduationCap className="text-teal-400 w-5 h-5" />,
    activities: [
      {
        title: "Student Satellite Program",
        jobTitle: "Web Manager",
        jobPeriod: "Jan 2020 - Jan 2021",
        description: "SSP is aimed at making IIT Bombay a Center Of Excellence in Satellite and Space Technology. "
        + "I led a team of 4 members directing them in development, outreach, and content design. " 
        + "I designed the UI for the website using PHP and Bootstrap 4 considering latency, ease of navigation and accessibility. ",
        tags: ["PHP", "Bootstrap 4", "HTML5"]
      },
      {
        title: "Aakaar 2020",
        jobTitle: "Web Head",
        jobPeriod: "Aug 2019 - July 2020",
        description: "Aakaar is the annual technical festival of Department of Civil Engineering, IIT Bombay. "
        + "I created responsive website, dashboard and sign-in panel of festival with auto-generated user IDs. "
        + "I developed a registration panel for events in the festival using PHP streamlining the process for 1000+ participants.",
        tags: ["PHP", "Bootstrap 4", "HTML5"]
      },
      {
        title: "Mood Indigo 2019",
        jobTitle: "Events Coordinator",
        jobPeriod: "Apr 2019 - Dec 2019",
        description: "Mood Indigo is the Asia’s largest annual cultural fest hosted by IIT Bombay with a footfall of 146000+ visitors. "
        + "I ideated and executed the Mock IPL Auction event for the first time in the festival. "
        + "I was also involved in negotiations with the artists and vendors to curate unique events in the festival.",
        tags: ["Management", "Leadership"]
      },
      {
        title: "Abhyuday",
        jobTitle: "Creatives Coordinator",
        jobPeriod: "Sep 2019 - Mar 2020",
        description: "Abhyuday is the social body of IIT Bombay aimed at creating a sense of social responsibility among Indian youth. "
        + "I provided career guidance to students in Career Counseling Campaign organised by Abhyuday. "
        + "I outlined the structure of various events including Lecture Series, Panel Discussion and competitions.",
        tags: ["Management", "Leadership"]
      }
    ]
  },
  {
    year: "2016-2018",
    school: "JNV Bengaluru Urban",
    icon: <School className="text-teal-400 w-5 h-5" />,
    activities: [
      {
        title: "Dakshana Foundation",
        jobTitle: "JEE Scholarship",
        jobPeriod: "2018",
        description: "Placed in top 1 percentile in JEE Advanced-2018 among more than 2.3 lacs students.",
        tags: ["Competition", "Scholastic"]
      },
      {
        title: "NSEC by IAPT",
        jobTitle: "Chemistry Olympiad",
        jobPeriod: "2018",
        description: "Honored with Certificate of Merit for being placed in state-wide top 1% in NSEC by IAPT.",
        tags: ["Competition", "Scholastic"]
      }
    ]
  },
  {
    year: "2014-2016",
    school: "JNV Kota",
    icon: <School className="text-teal-400 w-5 h-5" />,
    activities: [
      {
        title: "Nation Cadet Corps (NCC)",
        jobTitle: "Cadet",
        jobPeriod: "2016",
        description: "Received A-Certificate by NCC for completion of Combined Annual Training Camp.",
        tags: ["Training", "Service"]
      },
      {
        title: "JNV-ST",
        jobTitle: "Qualified",
        jobPeriod: "2014",
        description: "Participated and reserved a seat in Jawahar Navodaya Vidyalaya by qualiying in JNV Selection Test for Lateral Entry.",
        tags: ["Competition", "Scholastic"]
      }
    ]
  // },
  // {
  //   year: "2003-2014",
  //   school: "Central Public School",
  //   icon: <School className="text-teal-400 w-5 h-5" />,
  //   activities: []
  }
];
