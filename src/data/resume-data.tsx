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
      start: "2021",
      end: "Present",
      description:
        "Implemented new features, Migrated project to React 18, Improved dev server uptime by 4x, Mentored 5+ juniors in react and javascript, Delivered responsive, cross-browser compatible React application with unit testing with 90% coverage",
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
      year: 2023,
      techStack: ["Javascript", "Browser Extension"],
      description:
        "Record screen from browser and convert to mp4 without server",
      link: {
        label: "record",
        href: "https://github.com/twentyse7en/record",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
