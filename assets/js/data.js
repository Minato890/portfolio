// Language-independent content. Edit this file for links, tech stacks, and the lists.
// Leave a url as "" to hide it automatically.

// Your movie list (Notion for now; swap in the new website's URL when it's ready)
const MOVIE_LIST_URL = "https://secretive-wedelia-913.notion.site/CINEMA-2dd95c47255a80048febc25f4995f234";

window.SITE = {
  name: { en: "Deepak Patel", ja: "ディーパック・パテル" },
  email: "milkyway4a@gmail.com",

  // Sidebar icons (only entries with a url) and the Contact tab, in this order.
  // An entry with a handle but no url (Discord) shows on Contact and copies the handle on click.
  links: {
    linkedin: { url: "https://www.linkedin.com/in/deepak-patel-8331b824a", handle: "deepak-patel" },
    github:   { url: "https://github.com/Minato890", handle: "Minato890" },
    chess:    { url: "https://www.chess.com/member/morty_q7", handle: "morty_q7" },
    spotify:  { url: "https://open.spotify.com/user/313jiy75ikdz6rwe5psghmudu63e", handle: "" },
    discord:  { url: "", handle: "dr_jupiter7" }
  },

  // Icons shown in the left panel, in order (keys from links or codingProfiles below)
  sidebar: ["linkedin", "github", "leetcode", "codechef"],

  // Shown on the Skills & Certifications tab
  codingProfiles: {
    leetcode: { url: "https://leetcode.com/u/Minato_10/", handle: "Minato_10" },
    codechef: { url: "https://www.codechef.com/users/deepakq7", handle: "deepakq7" },
    gfg:      { url: "https://www.geeksforgeeks.org/profile/deepak_7", handle: "deepak_7" }
  },

  // level = filled bars out of 5. target = the next goal, shown as a dashed bar.
  languages: [
    { key: "english",  level: 5 },
    { key: "hindi",    level: 5 },
    { key: "chhattisgarhi", level: 5 },
    { key: "japanese", level: 3, target: 4 }
  ],

  // Group names live in lang files (skills.groups.<key>)
  skills: [
    { key: "languages", items: ["TypeScript", "JavaScript", "C++", "HTML", "CSS"] },
    { key: "tools",     items: ["React", "Next.js", "Node.js", "GraphQL", "PostgreSQL", "Contentful", "Git", "GitLab", "Figma", "Jira", "Notion", "Slack"] },
    { key: "core",      items: ["Data Structures & Algorithms"] }
  ],

  // Newest first. Each "url" points to the PDF in assets/docs/certificates/
  // (swap for the public LinkedIn Learning certificate link if you prefer).
  // Text for each id lives in certText in both lang files.
  certifications: [
    { id: "cert-webdev",     url: "assets/docs/certificates/udemy-web-development-bootcamp.pdf" },
    { id: "cert-css",        url: "assets/docs/certificates/linkedin-css-fundamentals.pdf" },
    { id: "cert-styled",     url: "assets/docs/certificates/linkedin-react-styled-components.pdf" },
    { id: "cert-responsive", url: "assets/docs/certificates/linkedin-responsive-web-design.pdf" },
    { id: "cert-gatsby",     url: "assets/docs/certificates/linkedin-learning-gatsby.pdf" },
    { id: "cert-rest",       url: "assets/docs/certificates/linkedin-restful-apis-nodejs-express.pdf" }
  ],

  // Text for each id lives in lang/en.js and lang/ja.js (experienceText, educationText, projectText)
  experience: [
    { id: "vista-engineer", tech: ["TypeScript", "Next.js", "Cloudflare", "REST APIs", "Figma"],
      proof: "assets/docs/experience-certificate.pdf" },
    { id: "vista-intern",   tech: ["Contentful", "React", "GraphQL"],
      proof: "assets/docs/internship-certificate.pdf" }
  ],

  education: [
    { id: "hokkaido" },
    { id: "nit", proof: "assets/docs/nit-medium-of-instruction.pdf" },
    { id: "school" },
    { id: "resonance" }
  ],

  projects: [
    { id: "gwent", tech: ["JavaScript", "HTML5", "CSS3"], demo: "", code: "" }
  ],

  // Shown on the About tab. Use url, or linkKey to reuse an entry from links above.
  hobbies: [
    { id: "movies", icon: "clapper", url: MOVIE_LIST_URL },
    { id: "chess",  icon: "pawn",    linkKey: "chess" },
    { id: "music",  icon: "music",   linkKey: "spotify" }
  ]
};
