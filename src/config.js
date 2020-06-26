module.exports = {
  siteTitle: 'Kihwan Kim | Research Software Engineer',
  siteDescription:
    'Kihwan Kim is a research software engineer based in South Korea who specializes in building visualization tools for understanding AI',
  siteKeywords:
    'Kihwan Kim, Kihwan, simulacre7, research software engineer, front-end engineer, AutoML, data visualization, web developer, javascript, UNIST',
  siteUrl: 'https://kihwan.kim',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-169382421-1',
  googleVerification: 'dr8HhGR4OkwEdtWRxWXVR8XVoG6cKkKP3y6Cj_rEOX8',
  name: 'Kihwan Kim',
  location: 'South Korea',
  email: 'kihwan@kakao.com',
  github: 'https://github.com/simulacre7',
  twitterHandle: '@simulacre7',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/simulacre7',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/1875',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
