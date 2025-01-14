import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";

import accompanied from "./Components/assets/images/Accompanied.png";

const Info = {
  name: "Ashutosh Mishra",
  stack: [
    "Senior Product Engineer",
    "Frontend Developer",
  ],
  bio: "Senior Product Engineer with 4 year and 6 months of ongoing experience in building responsive web applications using React and MERN stack, with expertise in scalable full stack solutions. Skilled in JavaScript, TypeScript, and frameworks like Tailwind CSS, Material UI and Express.js, with MongoDB database. Experienced in Redux Toolkit for state management and code optimization, GitHub, and Jira. Focused on delivering scalable solutions and ensuring client satisfaction through timely project delivery. As a developer I'm eager to contribute to all aspects of development. A quick learner, I adapt to new technologies and stay ahead of industry trends.",
};

const ProjectInfo = [
  {
    title: "Temenos Enterprise Pricing",
    desc: "Temenos Enterprise Pricing (TEP) solution is a core agnostic microservices-based platform that empowers business users to launch pricing products across both financial and non-financial services. Financial institutions can create customer-centric and target pricing capabilities for rates, fees and charges at different levels including individual product pricing, package pricing, relationship pricing, household pricing etc regardless of the core system servicing the product.",
    image: accompanied,
    live: false,
    technologies: [
      "TypeScript",
      "UUX Components",
      "Material UI",
      "React",
      "Swagger",
      "Payment Gateways",
    ],
    link: "https://accompanied.ca/",
    github: "https://github.com/Code-Mars/Spotify-Clone",
  },
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React JS",
      "Angular",
      "Redux",
      "Tailwind CSS",
      "GSAP",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Springboot",
      "Node JS",
      "Express JS",
      "MySQL",
      "MongoDB",
      "PostgresSQL",
    ],
  },
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Github",
      "VS Code",
      "Postman",
      "MongoDB Compass",
    ],
  },
];
const socialLinks = [
  {
    link: "https://www.linkedin.com/in/ashu-mish/",
    icon: IconBrandLinkedin,
  },
];

const ExperienceInfo = [
  {
    role: "Senior Product Engineer",
    company: "Temenos India Pvt Ltd",
    date: "August 2022 - Present",
    desc: "Currently working as an Senior Product Engineer at Temenos India Pvt Ltd, Bengaluru, contributing to cutting-edge web application development. with 4 year and 6 months of ongoing experience, I have successfully delivered 3 projects and am actively involved in the development of a 4th project. My role primarily focuses on creating responsive and dynamic user interfaces using React JS, showcasing expertise in front-end development. I also have working knowledge of the MERN stack (MongoDB, Express.js, React, and Node.js) with cloud techs like AWS, Azure, which enables me to collaborate effectively on full-stack projects. At Temenos, I’ve honed my technical skills by adhering to industry best practices and ensuring timely delivery of client requirements.",
    skills: [
      "JavaScript",
      "TypeScript",
      "UUX Components",
      "React",
      "Redux Toolkit",
      "Material UI",
      "MongoDB",
      "Express.js",
      "Node.js",
      "GitHub",
      "Jira"
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Temenos India Pvt Ltd",
    date: "August 2021 - August 2022",
    desc: "Currently working as an Senior Software Engineer at Temenos India Pvt Ltd, Bengaluru, contributing to cutting-edge web application development. with 1 year of ongoing experience. My role primarily focuses on creating responsive and dynamic user interfaces using Visualizer and UUX Components, I’ve honed my technical skills by adhering to industry best practices and ensuring timely delivery of client requirements.",
    skills: [
      "JavaScript",
      "TypeScript",
      "UUX Components",
      "React",
      "Redux Toolkit",
      "Material UI",
      "MongoDB",
      "Express.js",
      "Node.js",
      "GitHub",
      "Jira"
    ],
  },
  {
    role: "Software Engineer",
    company: "Temenos India Pvt Ltd",
    date: "August 2020 - July 2021",
    desc: "Currently working as an software Engineer at Temenos India Pvt Ltd, Bengaluru, contributing to cutting-edge web application development. My role primarily focuses on creating responsive and dynamic user interfaces using Visualizer and fabric tools by Quantum.",
    skills: [
      "HTML",
      "CSS",
      "Visualizer",
      "Fabric",
      "JavaScript",
      "TypeScript",
      "UUX Components",
      "GitHub",
      "Jira"
    ],
  },
];
const Slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "mongodb",
  "nodedotjs",
  "express",
  "vercel",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };
