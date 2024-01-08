import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Abijith B",
  initials: "AB",
  location: "Kerala, India, IST",
  locationLink: "https://www.google.com/maps/place/kerala",
  about:
    "Dedicated software engineer, committed to quality and performance, embraces challenges.",
  summary:
    "I'm a frontend-focused software engineer who thrives on tackling diverse challenges. My commitment to clean code is evident through proactive contributions to team practices and strict code reviews. I do hobby projects in weekends for fun. Currently, I work mostly with TypeScript, React, Tailwind, and GraphQL",
  avatarUrl: "https://avatars.githubusercontent.com/u/59721339?v=4",
  personalWebsiteUrl: "https://twentyse7en.vercel.app/about",
  contact: {
    email: "abijithbahuleyan@gmail.com",
    tel: "+919048873931",
    blog: "https://twentyse7en.vercel.app/",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/twentyse7en/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abijith-b-771b98153/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "Govt. Engineering college, Palakkad",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      start: "2017",
      end: "2021"
    },
  ],
  work: [
    {
      company: "KeyValue Systems",
      link: "https://www.keyvalue.systems/",
      badges: ["React", "Typescript", "Javascript"],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "Jul 2021",
      end: "Present",
      description:
        "Implemented new features, Migrated project to React 18, Improved dev server uptime by 4x, Mentored 5+ juniors in react and javascript, Delivered responsive, cross-browser compatible React application with unit testing with 90% coverage",
    },
    {
      company: "Google Summer of Code",
      link: "https://summerofcode.withgoogle.com/",
      badges: ["React", "Typescript", "Python"],
      title: "Intern",
      logo: ParabolLogo,
      start: "Jun 2020",
      end: "Aug 2020",
      description:
        "Implemented new features, enhanced user experience, Fixed several bugs and made usability improvements in backend using python",
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Python",
    "Tailwind/SCSS"
  ],
  projects: [
    {
      title: "Record",
      year: "2023",
      techStack: ["Javascript", "Browser Extension"],
      description:
        "Record screen from browser and convert to mp4 without server",
      link: {
        label: "record",
        href: "https://github.com/twentyse7en/record",
      },
    },
    {
      title: "Timeline",
      year: "2023",
      techStack: ["Go", "Postgres"],
      description:
        "Save your thoughts instantly",
      link: {
        label: "timeline",
        href: "https://github.com/twentyse7en/timeline",
      },
    },
    {
      title: "Nexa",
      techStack: ["React", "Javascript"],
      year: "2023",
      description: "App for real-time spending analysis. Won first prize in a 24-hour hackathon among 23 other teams",
      logo: Minimal,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Artham",
      techStack: ["Javascript", "Browser Extension"],
      year: "2022",
      description: "Malayalam - English dictionary on double click 📖🦄",
      logo: Minimal,
      link: {
        label: "",
        href: "https://github.com/twentyse7en/artham",
      },
    },
    {
      title: "Notes",
      techStack: ["Hugo", "HTML", "CSS"],
      year: "2022",
      description:
        "Personal Blog",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Scripts",
      techStack: ["BASH"],
      year: "2022",
      description:
        "Collection of bash scripts I use daily",
      logo: Minimal,
      link: {
        label: "Scripts",
        href: "https://github.com/twentyse7en/scripts",
      },
    },
    {
      title: "Insider Scoreboard",
      techStack: ["React", "Python", "Postgres"],
      year: "2021",
      description: "Track insider trading in NSE and BSE",
      logo: Minimal,
      link: {
        label: "",
        href: "https://github.com/twentyse7en/Insiderscoreboard",
      },
    },
    {
      title: "Random Stock",
      techStack: ["React", "Javascript"],
      year: "2021",
      description: "Picks a random stock from BSE",
      logo: Minimal,
      link: {
        label: "",
        href: "https://github.com/twentyse7en/randomstock",
      },
    },
    {
      title: "pulse-cli",
      techStack: ["Python"],
      year: "2021",
      description: "Read stock news from terminal",
      logo: Minimal,
      link: {
        label: "",
        href: "https://github.com/twentyse7en/pulsecli",
      },
    },
    {
      title: "Olam-rofi",
      techStack: ["BASH"],
      year: "2021",
      description: "Simple malayalam dictionary using rofi",
      logo: Minimal,
      link: {
        label: "",
        href: "https://github.com/twentyse7en/OlamRofi",
      },
    },
  ],
} as const;
