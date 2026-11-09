window.LANG = window.LANG || {};
window.LANG.en = {
  meta: {
    title: "Deepak Patel",
    description: "Portfolio of Deepak Patel, software engineer based in Sapporo, Japan."
  },
  nav: { about: "About", experience: "Experience", education: "Education", skills: "Skills & Certifications", contact: "Contact" },
  hero: { title: "Software Engineer", location: "Sapporo, Japan" },
  sections: { work: "Work", projects: "Projects", skills: "Skills", profiles: "Coding profiles", certs: "Certifications", hobbies: "Hobbies" },
  about: {
    paragraphs: [
      "Hi, I'm Deepak, 23, living in Sapporo. I love problem solving, especially the kind where you stare at the screen for an hour and it suddenly makes sense. That moment never gets old, and watching something I wrote actually work is still my favorite part of the job.",
      "Other than software engineering, I've also spent some time in the Indian stock market, with options and swing trading. And in college I ran a small philosophy club. So yes, I do enjoy overthinking things.",
      "Outside of work, I play chess, listen to a ton of music, and watch way more movies than I probably should. Oh, and I love Max Verstappen. I also talk a lot, and I mean that kindly. I love hearing how people from different places see the world, because the same problem looks different to everyone, and I don't think my curiosity about that will ever run out.",
      "So if you want to chat about code, movies, F1, or nothing in particular, send me a message. Even if you're not much of a talker, send one anyway. I'd really love to be friends."
    ],
    languagesHeading: "Languages"
  },
  languages: {
    english:  { name: "English",  level: "Fluent" },
    hindi:    { name: "Hindi",    level: "Native" },
    chhattisgarhi: { name: "Chhattisgarhi", level: "Native" },
    japanese: { name: "Japanese", level: "JLPT N3, N2 in Dec 2026" }
  },
  projects: { demo: "Open", code: "Source code" },
  skills: { groups: { languages: "Languages", tools: "Frameworks & tools", core: "Core" } },
  hobbies: { open: "Open" },
  contact: { email: "Email", copy: "Copy", copied: "Copied", locationLabel: "Location", location: "Sapporo, Hokkaido, Japan" },

  experienceText: {
    "vista-engineer": {
      title: "Software Engineer",
      org: "Vista (Cimpress India)",
      location: "Remote",
      period: "Jul 2025 – Mar 2026",
      proofLabel: "Experience certificate",
      points: [
        "Migrated monolithic services into Ubik, Vista's micro-frontend framework, moving from Next.js to a decoupled architecture.",
        "Led the infrastructure migration from Caddy to Cloudflare and the move from JavaScript to TypeScript, improving reliability.",
        "Built the invitation system end to end: database schema, RESTful API endpoints, and event-store logic.",
        "Developed responsive workspace pages and email templates from Figma designs for a multi-market rollout."
      ]
    },
    "vista-intern": {
      title: "Software Engineer Intern",
      org: "Vista (Cimpress India)",
      location: "Remote",
      period: "Jan 2025 – Jun 2025",
      proofLabel: "Internship certificate",
      points: [
        "Integrated Contentful CMS into VistaPrint pages so marketing teams can manage content without developer help.",
        "Designed content models in Contentful and automated user role provisioning to speed up onboarding.",
        "Refactored React components and wrote GraphQL queries to fetch and render CMS-driven content.",
        "Shipped the CMS integration live across multiple international markets."
      ]
    }
  },
  educationText: {
    hokkaido: {
      title: "Japanese language studies",
      org: "Hokkaido Japanese Language Academy, Main Campus",
      location: "Sapporo",
      period: "Apr 2026 – Mar 2027",
      subjects: ["Japanese language"]
    },
    nit: {
      title: "B.Tech, Information Technology",
      org: "National Institute of Technology, Raipur",
      location: "Raipur, India",
      period: "2021 – 2025",
      proofLabel: "Medium of instruction certificate (English)",
      subjects: ["Web Development", "Data Structures & Algorithms", "Database Management Systems", "Operating Systems", "Engineering Mathematics", "Engineering Physics", "Theory of Computation", "Machine Learning", "Basic Electrical Engineering"]
    },
    resonance: {
      title: "JEE coaching (Classes 10–11)",
      org: "Resonance",
      location: "Kota, Rajasthan, India",
      period: "2019 – 2020",
      subjects: ["Physics", "Chemistry", "Mathematics"]
    },
    school: {
      title: "12th grade",
      org: "Shambhavi Public School",
      location: "Raipur, India",
      period: "2020 – 2021",
      subjects: ["Physics", "Chemistry", "Mathematics", "Hindi", "English"]
    }
  },
  projectText: {
    gwent: {
      title: "Gwent-Classic",
      description: "A Witcher-inspired card game that runs in the browser.",
      points: [
        "Built with vanilla JavaScript (ES6+), HTML5, and CSS3.",
        "Implemented turn-based mechanics, state management, and real-time score calculation.",
        "Designed a responsive UI with CSS animations inspired by the original Gwent."
      ]
    }
  },
  certText: {
    "cert-webdev":     { title: "The Complete 2023 Web Development Bootcamp", issuer: "Udemy", year: "Oct 2023" },
    "cert-css":        { title: "CSS Fundamentals: Unlock the Power of Web Styling", issuer: "LinkedIn Learning", year: "Dec 2025" },
    "cert-styled":     { title: "React with Styled Components", issuer: "LinkedIn Learning", year: "Apr 2025" },
    "cert-responsive": { title: "Creating a Responsive Web Design", issuer: "LinkedIn Learning", year: "Apr 2025" },
    "cert-gatsby":     { title: "Learning Gatsby", issuer: "LinkedIn Learning", year: "Mar 2025" },
    "cert-rest":       { title: "Building RESTful APIs with Node.js and Express", issuer: "LinkedIn Learning", year: "Mar 2025" }
  },
  hobbyText: {
    movies: { title: "Movies", description: "A running list of everything I watch" },
    chess:  { title: "Chess", description: "Games and puzzles on chess.com" },
    music:  { title: "Music", description: "Weird music of all kinds, on Spotify" }
  }
};
