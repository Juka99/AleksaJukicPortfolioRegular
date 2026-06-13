export const profile = {
  name: 'Aleksa',
  fullName: 'Aleksa Jukić',
  role: 'Frontend Developer',
  location: 'Serbia',
  email: 'aleksa.jukic.web@gmail.com',
  github: 'https://github.com/Juka99?tab=repositories',
  intro:
    "Well, it's mostly internal use web apps and tables, but what can you do, right? 🤔",
};

export const projects = [
  {
    title: 'SIGMA',
    type: 'Brand Website',
    description:
      'A polished front-end build focused on bold visual rhythm, responsive layout, and a clear brand presentation.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://juka99.github.io/Sigma/',
    codeUrl: 'https://github.com/Juka99/Sigma',
    accent: 'mint',
  },
  {
    title: 'Darken Inc.',
    type: 'Landing Page',
    description:
      'A darker, atmosphere-heavy website with custom sections, animation details, and a more cinematic visual direction.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://juka99.github.io/Darken-Inc/',
    codeUrl: 'https://github.com/Juka99/Darken-Inc',
    accent: 'coral',
  },
  {
    title: 'Henry',
    type: 'Beta Project',
    description:
      'An experimental front-end project with custom UI touches and a playful identity, built while exploring stronger interaction patterns.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://juka99.github.io/Henry/',
    codeUrl: 'https://github.com/Juka99/Henry',
    accent: 'sky',
  },
  {
    title: 'FitExtreme',
    type: 'Fitness App',
    description:
      'A fitness-focused project with energetic screens, routing, responsive composition, and practical app-style structure.',
    tags: ['Vue', 'JavaScript', 'CSS'],
    liveUrl: 'https://juka99.github.io/FitExtreme/#/',
    codeUrl: 'https://github.com/Juka99/FitExtreme/tree/gh-pages',
    accent: 'amber',
  },
];

export const principles = [
  {
    title: 'Playful but clean',
    icon: 'fa-solid fa-gamepad',
    text: 'I like websites with character, but the interaction still has to feel clear and usable.',
  },
  {
    title: 'Clean under the hood',
    icon: 'fa-solid fa-code',
    text: "Good UI starts with boring stuff done well: structure, naming, and code that won't haunt me six months later.",
  },
  {
    title: 'Responsive by default',
    icon: 'fa-solid fa-mobile-screen-button',
    text: 'Desktop, laptop, tablet, phone: the layout should adapt without losing its personality.',
  },
];

export const skills = [
  {
    group: 'Core Frontend',
    items: ['HTML', 'SCSS', 'JavaScript', 'Responsive UI', 'Accessibility'],
  },
  {
    group: 'Frameworks',
    items: ['Vue 3', 'React', 'Next.js', 'Component Architecture'],
  },
  {
    group: 'Workflow',
    items: ['BEM', 'GitHub', 'Vite', 'Clean Refactors', 'UI Polish'],
  },
];

export const processSteps = [
  {
    title: 'Map the experience',
    icon: 'fa-solid fa-map-location-dot',
    text: 'I start with the flow: what the visitor needs to understand first, and what should feel effortless after that.',
  },
  {
    title: 'Build the system',
    icon: 'fa-solid fa-layer-group',
    text: 'Reusable components, clear classes, and styling tokens keep the page consistent as it grows.',
  },
  {
    title: 'Tune the feeling',
    icon: 'fa-solid fa-wand-magic-sparkles',
    text: 'Spacing, hover states, motion, mobile rhythm, and tiny details get adjusted until the UI feels intentional.',
  },
];
