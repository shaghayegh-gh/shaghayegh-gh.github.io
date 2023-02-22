import { Me, Experiences, Skills, Certificates, Reviews } from './about-data-type'

export const me: Me = {
  title: 'Who am I?',
  description: [
    'I am a front-end developer with more than four years of experience who has worked with JavaScript, TypeScript, React.js, Style-component, SASS, and so on.',
    'I am working for Snapp, the largest ride-hailing company in the Middle East. Also, I used to work for a number of startup companies.',
    'I have the experience of working on small and large projects, either individually or in large Scrum teams. I tend to learn and improve my skills and share them with any team I am a part of.',
  ],
}

export const experiences: Experiences = [
  {
    title: 'Frontend Developer',
    company: 'Snapp',
    date: 'Jan 2022 - Present',
    description:
      'Snapp is the largest ride-hailing app in the Middle East and a supper app with diverse services',
  },
  {
    title: 'Frontend Developer',
    company: 'Malltina',
    date: 'Apr 2020 - Jan 2022',
    description:
      'Maltina is an e-commerce company that offers more than one million products through its website and application',
  },
  {
    title: 'Frontend Developer',
    company: 'Cinema Ticket',
    date: 'Sep 2018 - Apr 2020',
    description:
      'CinemaTicket is the largest online cinema ticket sales reference in Iran.',
  },
  {
    title: 'Frontend Developer',
    company: 'Maktab Sharif',
    date: '2017 - 2018',
    description:
      'Maktab Sharif is the first programming school in Iran. Students increase their programming skills by working on several projects in a team',
  },
  {
    title: 'Technical Support Engineer',
    company: 'PayamGostar',
    date: 'Oct 2016 - Nov 2017',
    description: '---- ---- ----',
  },
]

export const skills: Skills = [
  { icon: 'react.svg', subtitle: 'React.js' },
  { icon: 'javascript.svg', subtitle: 'JavaScript' },
  { icon: 'typescript.svg', subtitle: 'TypeScript' },
  { icon: 'nodejs.svg', subtitle: 'Node.js' },
  { icon: 'storybook.svg', subtitle: 'Storybook' },
  { icon: 'html.svg', subtitle: 'HTML' },
  { icon: 'css.svg', subtitle: 'CSS' },
  { icon: 'material-ui.svg', subtitle: 'Material UI' },
  { icon: 'webpack.svg', subtitle: 'Webpack' },
  { icon: 'eslint.svg', subtitle: 'Eslint' },
  { icon: 'git.svg', subtitle: 'Git' },
  { icon: 'npm.svg', subtitle: 'NPM' },
]

export const certificates: Certificates = [
  {
    icon: 'responsive-design.svg',
    title: 'Web Design Foundation',
    institute: 'Tehran Institute of Technology',
    date: '2015',
  },
  {
    icon: 'php.svg',
    title: 'Dynamic Website (PHP & MYSQL)',
    institute: 'Tehran Institute of Technology',
    date: '2015',
  },
  {
    icon: 'mysql.svg',
    title: 'Advanced PHP & MYSQL',
    institute: 'Tehran Institute of Technology',
    date: '2015',
  },
]

export const reviews: Reviews = [
  {
    writer: 'Mohammad Hosseini',
    comment:
      "Shaghayegh is one of the best front-end developers I've worked with. She is accurate and responsible. I've seen her effect on incidents many times. Due to her accuracy, we gained lots of performance optimizations, design/architecture patches, and a better customer experience. She can help every technical team. I'd highly recommend working with her.",
  },
  {
    writer: 'Ramin Ghahremani',
    comment:
      "Shaghayegh is always a cheerful and amiable colleague. She is a passionate, talented developer who always tries to share her knowledge with others and is willing to lend a hand to anyone who needs it. It's great to work with her.",
  },
  {
    writer: 'Sara Etefagh',
    comment:
      'I worked with shaghayegh for more than a year in separate but related team. She is smart, professional and bring joys everywhere she goes, I always heard about her accomplishments, she was, is and always will be the core member of the tech-team. 👏🏻👏🏻👏🏻',
  },
  {
    writer: 'Leila Moghisi',
    comment:
      'I had the pleasure of working with Shaghayegh for two years at the Cinematicket Company, collaborating on several project teams.Shaghyegh’s ability to juggle multiple projects was unlike any I’ve seen before and made a dramatic difference in the productivity level of our team.',
  },
  {
    writer: 'Shive Saremi',
    comment:
      'Shaghayegh is one of the most valuable people I have ever met. Both smart and professional. Experienced, deadline oriented and intelligent person. Highly recommended.❤️',
  },
  {
    writer: 'Ali Mirzaei',
    comment:
      'Shaghayegh performed exceptionally well on recent projects. I remember her as being very productive, multi-skilled, and knowledgeable. As a team player, she is thoughtful, proactive, self-motivated, and intelligent. I enjoyed working with her because she is a customer service-oriented colleague. In addition to having great relationships with current and potential clients, Shaghayegh has excellent interpersonal skills.',
  },
]
