import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
// import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am an enthusiastic data analyst at the beginning of my journey, with a growing expertise in extracting insights and making data-driven decisions. As I develop my skills in data visualization, statistical analysis, and tools like Excel, SQL, and Python, my goal is to transform raw data into actionable insights that support informed business strategies. I am driven by a curiosity to explore data patterns and a commitment to improving decision-making through analytics.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Smart Attendance System",
    image: project1,
    description:
      "A smart attendance system that uses facial recognition to mark attendance in real-time, ensuring accuracy and efficiency. This system captures faces, verifies identities, and records attendance with restrictions to prevent duplicate entries.",
    technologies: ["Python", "OpenCV", "SQLite", "Tkinter","HaarCascade"],
  },
  {
    title: "Speed Recognition System",
    image: project2,
    description:
      "A speed recognition system leveraging YOLOv8 to detect and estimate the speed of moving objects in real-time, with applications in traffic monitoring and safety analysis.",
    technologies: ["Python", "YOLOv8", "OpenCV", "NumPy"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "ReactJs"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Plot No-12, Judges Colony,Malhour-Lolai,Lucknow,Uttar Pradesh ",
  phoneNo: "+91 63068 32158 ",
  email: "adarshkumarsrivastava56@gmail.com",
};