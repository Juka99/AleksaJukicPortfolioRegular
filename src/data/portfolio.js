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
    title: 'Iterate',
    type: 'Self Improvement',
    description:
      'A focused React app for improving your life with iteration, built with a clean feature structure, Supabase, and polished product-style UI.',
    tags: ['React', 'TypeScript', 'Supabase'],
    logo: '/iterateLogo.png',
    liveUrl: 'https://iterate-jade.vercel.app/',
    codeUrl: 'https://github.com/Juka99/.iterate',
    accent: 'mint',
  },
  {
    title: 'Orbit',
    type: 'Personal Dashboard',
    description:
      'A Vue 3 and TypeScript app for keeping important personal things in check, starting with notes, water, and calorie tracking.',
    tags: ['Vue 3', 'TypeScript', 'Supabase'],
    logo: '/orbitLogo.png',
    liveUrl: 'https://orbit-ten-murex.vercel.app/',
    codeUrl: 'https://github.com/Juka99/Orbit',
    accent: 'coral',
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
