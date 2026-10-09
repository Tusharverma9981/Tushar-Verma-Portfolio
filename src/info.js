/* ==========================================================================
   YOUR INFORMATION FILE
   --------------------------------------------------------------------------
   This is the only file you need to edit to personalise the portfolio.
   - Replace every "Your ..." / example value with your own.
   - To hide a section completely, set its list to an empty array: []
   - To hide a single contact link, set it to "" (empty string).
   - Keep the quotes and commas. Save the file and the page updates itself.
   ========================================================================== */

const info = {
  /* ---------- Basics (shown in the hero and the browser tab) ---------- */
  name: "Tushar Verma",
  role: "Software Engineer",
  tagline:
    " Skilled in RESTful API design, relational and NoSQL databases MySQL, MongoDB, modern front-end frameworks, version control (Git), and data analytics using Python, Pandas, NumPy, and data visualization techniques.",
  openToWork: true, // true or false, shown inside the Developer.java card

  /* Lines shown inside the code card in the hero. Keep this list short (3-5). */
  heroStack: ["Java", "MERN", "Data Analytics", "full-stack development",],

  /* ---------- About ---------- */
  // Each string becomes one paragraph.
  about: [
    "I’m a tech enthusiast with skills in both Full Stack Development and Data Analytics. I build web applications using Java, Spring Boot, React.js, and Node.js, while also working with Python, SQL, Pandas, and Power BI to analyze data, uncover insights, and create meaningful visualizations. I enjoy combining software development and data-driven problem-solving to build practical, impactful solutions.",
    "I’m looking for opportunities where I can apply and grow my skills in both software development and data analytics. I enjoy building real-world applications, exploring datasets, solving problems, and turning data into actionable insights. I’m eager to collaborate with teams, learn new technologies, and contribute to projects that create meaningful impact.",
  ],

  /* ---------- Contact ---------- */
  contact: {
    email: "vermatushar0209@gmail.com",
    phone: "+91 9981939820", // e.g. "+91 9981939820"  (leave "" to hide)
    location: "Indore, India", // leave "" to hide
    github: "https://github.com/Tusharverma9981",
    linkedin: "https://www.linkedin.com/in/tushharverma/",
    twitter: "", // leave "" to hide
    website: "", // leave "" to hide
  },
  contactText:
    "I am open to Software Engineer roles. Reach out directly, or download my resume to see everything in one page.",

  /* ---------- Resume ----------
     Put your PDF in the "public" folder, name it resume.pdf,
     and keep this path. Or paste a full link (Google Drive, etc.). */
  resume: "Resume TUSHAR (1) - Copy.pdf",

  /* ---------- Skills ---------- */
  skills: [
    { group: "Languages", items: ["Java", "Python", "JavaScript"] },
    { group: "Frameworks", items: ["Spring Boot", "React.js", "Node.js"] },
    { group: "Databases", items: ["MySQL", "MongoDB"] },
    { group: "Data Analytics", items: ["Pandas", "NumPy", "Power BI","Excel"] },
    { group: "Tools", items: ["Git", "Maven", "Docker", "Postman"] },

  ],

  /* ---------- Work experience (newest first) ---------- */
  experience: [
    
    {
      role: "Software Development Intern",
      company: "Company Name",
      period: "July 2024 - Jan 2025",
      location: "Remote",
      points: [
        "Developed features in React.js and Node.js under senior guidance.",
        "Fixed bugs and took part in code reviews.",
      ],
    },
  ],

  /* ---------- Projects ----------
     summary  = one line shown on the card
     details  = bullet points shown when the card is clicked
     github / live = optional links, use "" to hide a button */
  projects: [
    {
      title: "Expense Tracker",
      summary: "Full-stack app built with React.js and Node.js.",
      tech: ["JavaScript", "React.js", "Node.js", "MongoDB"],
      details: [
        "Built a full-stack expense tracker application with user authentication and CRUD functionality.",
        "Implemented RESTful APIs with Node.js and Express.js, and connected to a MongoDB database.",
        "Designed a responsive front-end using React.js and tailwind CSS.",
      ],
      github: "https://github.com/Tusharverma9981/Expense-Tracker",
      live: "https://expense-tracker-oqsa.vercel.app/",
    },
    {
      title: "Hostel Marketplace Platform",
     summary: "Full-stack app built with React.js and Node.js.",
      tech: ["JavaScript", "React.js", "Node.js", "MongoDB", "Express.js",],
      details: [
        "Developed a full-stack hostel marketplace platform with user authentication and CRUD functionality.",
        "Implemented RESTful APIs with Node.js and Express.js, and connected to a MongoDB database.",
        "Designed a responsive front-end using React.js and tailwind CSS.",
      ],
      github: "https://github.com/Tusharverma9981/Hostle-App",
      live: "https://hostle-app.vercel.app/",
    },
    
  ],

  /* ---------- Key achievements ----------
     value = the big text (a number, rank, etc.), label = what it means */
  achievements: [
    { value: "100+", label: "Problems solved on coding platforms" },
    { value: "3", label: "Production-grade projects shipped" },
    { value: "Top 10%", label: "Rank in a university or hackathon contest" },
  ],

  /* ---------- Education (newest first) ---------- */
  education: [
    {
      degree: "B.Tech in Computer Science",
      school: "Swami Vivekanand College of Engineering, Indore",
      period: "2022 - 2026",
      grade: "CGPA 7.0 / 10", // leave "" to hide
    },
  ],

  /* ---------- Look and feel (optional) ---------- */
  theme: {
    accent: "#5eead4", // main highlight color
    accent2: "#818cf8", // second color used in gradients
  },
};

export default info;
