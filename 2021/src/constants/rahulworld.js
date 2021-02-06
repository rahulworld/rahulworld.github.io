import { IMAGES } from './images';
export const THEMES = ['Simple', 'Image', 'Backgrond'];
export const RESUME_DATA = {
  first_name: 'Rahul',
  family_name: 'Chauhan',
  name: 'Rahul Chauhan',
  bio: 'Full Stack Developer',
  machine_bio1:
    "I'm a software developer with strong Scientific and Mathematical Background. I have extensive research experience in Statistical Data Analysis, Image Processing and Mathematical Modeling.",
  machine_bio2:
    "My interests lie in Machine Learning, Design & Analysis of Algorithms, Probabilistic & Statistical Models, Image Processing and Cryptography.",
  nick_name: 'rahulworld',
  mobile_no: '+91-8279634070',
  email: 'rahulnitsxr@gmail.com',
  profile_image_url: IMAGES.profilePicture,
  profile_url: [],
  profile_background: IMAGES.backgroundPictures,
  address: 'India',
  website_url: 'https://rahulworld.github.io',
  social_media_profiles: {
    email: {
      icon: '',
      url: 'mailto:rahul.nitsxr@gmail.com',
      name: 'Mail',
    },
    github: {
      icon: '',
      url: 'https://github.com/rahulworld',
      name: 'Github',
    },
    linked_in: {
      icon: '',
      url: 'https://linkedin.com/in/rahulworld',
      name: 'Linked In',
    },
    behance: {
      icon: '',
      url: 'https://behance.net/rahul_world',
      name: 'rahul_world',
    },
    twitter: {
      icon: '',
      url: 'https://twitter.com/imRahulworld',
      name: 'rahulworld',
    },
    stack_over_flow: {
      icon: '',
      url: 'https://stackoverflow.com/users/6715368/rahulworld',
      name: 'rahulworld',
    },
    facebook: {
      icon: '',
      url: 'https://www.facebook.com/imRahulworld',
      name: 'rahulworld',
    },
    instagram: {
      icon: '',
      url: 'https://www.facebook.com/imRahulworld',
      name: 'rahulworld',
    },
  },
  education: [
    {
      institute_logo: '',
      qualification_name: 'B. Tech. in Computer Science & Engineering',
      institute_url: 'http://www.nitsri.ac.in/',
      session: 'July 2014 - June 2018',
      institute_name: 'National Institute of Technology Srinagar, J&K, India',
      marks: 'CGPA: 8.195/10',
      coursework: [
        'Basic Data Structures',
        'Algorithms',
        'Discrete Maths',
        'Artificial Intelligence',
        'Cryptography',
        'Distributed',
        'Parallel Computing',
        'Unix and Shell Programming',
      ],
    },
  ],
  experiences: {
    professional_experiences: [
      {
        company_logo: '',
        company_url: 'https://www.ideaboard.in/',
        company_name: 'IdeaBoard Technology, Bangalore, Startup',
        designation: 'Software Engineer',
        period: 'May - Aug 2018',
        worked_on: [
          'Joined IdeaBoard as 4th Member of Tech Team.',
          'Developed ReactJS app having personalised student performance dashboard, teacher-classroom dashboard, automated assignments creation tool, dynamic survey builder, real time data management tools, single sign on.',
          'Developed React Native/Redux mobile application having real time personalised students performance and statistics reports, search tool, offline and online data access, data sync and push-notification using FCM.',
          'Developed OMR (Optical Mark Recognition) scanner tool for institutes and content tool for teachers reduced time by 2 days to 1 hours by using automation creation tool.',
          'Responsible for day to day product bug fixes, removing customer pain and releases.',
          'Contributed to each project (setup, analysis and development) in different roles and took ownership.',
        ],
        tools_and_technologies_used: [
          'Data Analysis',
          'Computer Vision',
          'Ruby on Rails',
          'React Native / Redux',
          'ReactJS',
          'PostgreSQL',
          'Sidekiq',
        ],
        links: [],
        certificates: [''],
      },
      {
        company_logo: '',
        company_url: 'https://www.osgeo.org/',
        company_name: 'OSGeo (Open Source Geospatial)',
        designation: 'Google Summer of Code 2018 Student Developer',
        period: 'May 2018 - Aug 2018',
        worked_on: [
          'Created Research Project - Support of Unit of Measure Conversion in istSOS3 (Open Source).',
          'Mentored by Prof. Massimiliano Cannata, Milan Antonovic, Institute of Earth Sciences, SUPSI, Switzerland.',
          'Developed two plugins for istsos3 using postgresql-unit extension and Pint python library and Tornado.',
          'Increased performance by 500% on large observation using postgresql-unit extension in postgresql database.',
          'Developed plugins for istsos3 (Open Source Tool) where scientists can insert different observation and perform operations on large observation.',
        ],
        tools_and_technologies_used: [
          'Pint',
          'postgresql-unit',
          'Data Analysis',
          'PostgreSQL',
          'Tornado web server',
        ],
        links: [
          {
            icon: '',
            name: 'Project Link',
            url:
              'https://summerofcode.withgoogle.com/archive/2017/projects/4902267350155264/',
          },
          {
            icon: '',
            name: 'Completion Letter',
            url:
              'https://drive.google.com/open?id=1t7-SFktvkzxVO3JHhz2k5Mtj-Yf0Gpaa',
          },
          {
            icon: '',
            name: 'Report',
            url:
              'https://github.com/rahulworld/Support-of-Unit-Of-Measure-conversion-in-istSOS3/wiki/Wiki',
          },
          {
            icon: '',
            name: 'Documentation Wiki',
            url:
              'https://github.com/rahulworld/Support-of-Unit-Of-Measure-conversion-in-istSOS3/wiki/Wiki',
          },
          {
            icon: '',
            name: 'Merged Pull Request',
            url:
              'https://github.com/istSOS/istsos3-unit-conversion/graphs/contributors',
          },
        ],
        certificates: [
          {
            icon: '',
            name: 'Google PDF',
            url:
              'https://drive.google.com/open?id=1t7-SFktvkzxVO3JHhz2k5Mtj-Yf0Gpaa',
          },
        ],
      },
      {
        company_logo: '',
        company_url: 'https://www.osgeo.org/',
        company_name: 'OSGeo (Open Source Geospatial)',
        designation: 'Google Summer of Code 2017 Student Developer',
        period: 'May 2017 - Aug 2017',
        worked_on: [
          'Created Data Science Project - Data Analysis and Statistical Tool Suit (Open Source)',
          'Mentored by Prof. Massimiliano Cannata, Milan Antonovic, Institute of Earth Sciences, SUPSI, Switzerland.',
          'Developed and Designed OAT (Observation Analysis Tools) extension for istsos2 (insert sensor, process and analyze observations) where scientist can execute time-series visualisation, pre-processing of data for model development and post-processing of sensor observations data using RestFul Web Api.',
        ],
        tools_and_technologies_used: [
          'ExtJS',
          'Dygraph.js',
          'D3.js',
          'Python',
          'Machine Learning',
          'django',
          'Pandas',
          'Numpy',
          'Scipy',
        ],
        links: [
          {
            icon: '',
            name: 'Project Link',
            url:
              'https://summerofcode.withgoogle.com/archive/2017/projects/4902267350155264/',
          },
          {
            icon: '',
            name: 'Completion Letter',
            url:
              'https://drive.google.com/open?id=1BQmAlKEkQFZ5P4rddegd81l_GYsIP8lI',
          },
          {
            icon: '',
            name: 'Final Report',
            url:
              'https://github.com/rahulworld/Data-analysis/blob/master/examples/GSoC.md',
          },
          {
            icon: '',
            name: 'Implement OAT Methods',
            url:
              'https://github.com/rahulworld/Data-analysis/blob/master/examples/README.md',
          },
        ],
        certificates: [
          {
            icon: '',
            name: 'Google PDF',
            url:
              'https://drive.google.com/open?id=1BQmAlKEkQFZ5P4rddegd81l_GYsIP8lI',
          },
        ],
      },
      {
        company_logo: '',
        company_url: 'http://aero.iisc.ac.in/',
        company_name: 'IISc, Bangalore',
        designation: 'Research Intern in Image Processing',
        period: 'Dec 2016 - Jan 2017',
        worked_on: [
          'Mentored by Chief Research Scientist Dr. S N Omkar and PhD Scholar Mr. Sukanta Roy, Department of Aerospace Engineering, IISc Bangalore.',
          'Developed Algorithm for data interpolation method which populate the spectral band information with the influence of high spatial information and analysis of hyperspectral band with panchromatic images.',
          'Improved accuracy by 15% using interpolation technique.',
        ],
        tools_and_technologies_used: [
          'Satellite images (Hyperspectral and Panchromatic images)',
          'Machine Learning',
          'BSpline curve',
          'Java',
        ],
        links: [],
        certificates: [],
      },
      {
        company_logo: '',
        company_url: '',
        company_name: 'Smokey, Bangalore (Startup)',
        designation: 'Software Engineering Intern',
        period: 'Oct 2015 - July 2016',
        worked_on: [
          'Design and Developed a location based services application using Google Map, Android, PHP, MySQL',
        ],
        tools_and_technologies_used: [
          'Satellite images (Hyperspectral and Panchromatic images)',
          'Machine Learning',
          'BSpline curve',
          'Java',
        ],
        links: [],
        certificates: [],
      },
    ],
    others: [
      {
        company_logo: '',
        company_url: 'https://www.osgeo.org/',
        company_name: 'OSGeo (Open Source Geospatial)',
        designation: 'Charter Member',
        period: '',
        worked_on: [
          'Google Code In where in pre-university students participated by contributing to open source organisation.',
        ],
        tools_and_technologies_used: [
          'Pint',
          'postgresql-unit',
          'Data Analysis',
          'PostgreSQL',
          'Tornado web server',
        ],
        links: [],
        certificates: [
          {
            icon: '',
            name: 'Google PDF',
            url:
              'https://drive.google.com/open?id=1t7-SFktvkzxVO3JHhz2k5Mtj-Yf0Gpaa',
          },
        ],
      },
      {
        company_logo: '',
        company_url: 'https://www.osgeo.org/',
        company_name: 'OSGeo (Open Source Geospatial)',
        designation: 'Google Summer of Code 2020 Admin',
        period: 'Feb 2020 - Aug 2019',
        worked_on: [
          'Google Code In where in pre-university students participated by contributing to open source organisation.',
        ],
        tools_and_technologies_used: [
          'Pint',
          'postgresql-unit',
          'Data Analysis',
          'PostgreSQL',
          'Tornado web server',
        ],
        links: [],
        certificates: [
          {
            icon: '',
            name: 'Google PDF',
            url:
              'https://drive.google.com/open?id=1t7-SFktvkzxVO3JHhz2k5Mtj-Yf0Gpaa',
          },
        ],
      },
      {
        company_logo: '',
        company_url: 'https://www.osgeo.org/',
        company_name: 'OSGeo (Open Source Geospatial)',
        designation: 'Google Code In 2019 Admin',
        period: 'Oct 2019 - Dec 2019',
        worked_on: [
          'Google Code In where in pre-university students participated by contributing to open source organisation.',
        ],
        tools_and_technologies_used: [
          'Pint',
          'postgresql-unit',
          'Data Analysis',
          'PostgreSQL',
          'Tornado web server',
        ],
        links: [],
        certificates: [
          {
            icon: '',
            name: 'Google PDF',
            url:
              'https://drive.google.com/open?id=1t7-SFktvkzxVO3JHhz2k5Mtj-Yf0Gpaa',
          },
        ],
      },
      {
        company_logo: '',
        company_url: 'https://www.osgeo.org/',
        company_name: 'OSGeo (Open Source Geospatial)',
        designation: 'Google Code In 2018 Mentor',
        period: 'Oct 2018 - Dec 2018',
        worked_on: [
          'Google Code In where in pre-university students participated by contributing to open source organisation.',
        ],
        tools_and_technologies_used: [
          'Pint',
          'postgresql-unit',
          'Data Analysis',
          'PostgreSQL',
          'Tornado web server',
        ],
        links: [],
        certificates: [
          {
            icon: '',
            name: 'Google PDF',
            url:
              'https://drive.google.com/open?id=1t7-SFktvkzxVO3JHhz2k5Mtj-Yf0Gpaa',
          },
        ],
      },
    ],
  },
  projects: [
    {
      project_logo: '',
      project_url: 'http://vaptool.herokuapp.com/',
      project_name: 'VAP (3D Visualisation)',
      github_link: 'http://vaptool.herokuapp.com/',
      designation: 'Developer',
      period: 'July 2018',
      worked_on: [
        'Design and Developed a real time 3D visualisation web app Tool for smart city.',
        'Implemented module of add 3D models and edit their size, angle of heading, pitch, roll and position in real-time on Nasa WorldWind.',
      ],
      tools_and_technologies_used: [
        'GIS',
        'Openstreetmap',
        'Javascript',
        'Flask',
      ],
      links: [],
      certificates: [],
    },
    {
      project_logo: '',
      project_url: 'http://digital-certificate-dapp.herokuapp.com/',
      project_name: 'Digital Certificate Dapp using Ethereum',
      github_link: 'http://vaptool.herokuapp.com/',
      designation: 'Developer',
      period: 'Apr 2018',
      worked_on: [
        'Implemented Blockchain for managing fast, simple, and reliable digital grade sheets certificates.',
        'A Distributed App deals with creating, issuing, viewing, sharable and verifying blockchain based grade sheets.',
      ],
      tools_and_technologies_used: ['Blockchain', 'Solidity', 'Web3JS'],
      links: [],
      certificates: [],
    },
  ],
  skills: {
    languages: [
      {
        name: 'Javascript',
        years_of_experience: 2,
        comment: '',
      },
      {
        name: 'Java',
        years_of_experience: 2,
        comment: '',
      },
      {
        name: 'Python',
        years_of_experience: 1,
        comment: '',
      },
      {
        name: 'Ruby',
        years_of_experience: 1,
        comment: '',
      },
      {
        name: 'C/C++',
        years_of_experience: 1,
        comment: '',
      },
    ],
    tools: [
      {
        name: 'Javascript',
        years_of_experience: 2,
        comment: '',
      },
      {
        name: 'Java',
        years_of_experience: 2,
        comment: '',
      },
      {
        name: 'Python',
        years_of_experience: 1,
        comment: '',
      },
      {
        name: 'Ruby',
        years_of_experience: 1,
        comment: '',
      },
      {
        name: 'C/C++',
        years_of_experience: 1,
        comment: '',
      },
    ],
    frameworks: [
      {
        name: 'Ruby on Rails',
        years_of_experience: 2,
        comment: '',
      },
      {
        name: 'React-Native/Redux',
        years_of_experience: 2,
        comment: '',
      },
      {
        name: 'ReactJS',
        years_of_experience: 2,
        comment: '',
      },
      {
        name: 'Data Analysis',
        years_of_experience: 3,
        comment: '',
      },
      {
        name: 'Heroku',
        years_of_experience: 2,
        comment: '',
      },
      {
        name: 'AWS',
        years_of_experience: 1,
        comment: '',
      },
      {
        name: 'GCP',
        years_of_experience: 1,
        comment: '',
      },
      {
        name: 'Blockchain',
        years_of_experience: 1,
        comment: '',
      },
      {
        name: 'Postgresql',
        years_of_experience: 3,
        comment: '',
      },
      {
        name: 'Redis',
        years_of_experience: 1,
        comment: '',
      },
      {
        name: 'Sidekiq',
        years_of_experience: 1,
        comment: '',
      },
      {
        name: 'Elastic Search',
        years_of_experience: 1,
        comment: '',
      },
      {
        name: 'GIS',
        years_of_experience: 1,
        comment: '',
      },
      {
        name: 'Git',
        years_of_experience: 5,
        comment: '',
      },
      {
        name: 'Android',
        years_of_experience: 2,
        comment: '',
      },
    ],
  },
  research_publication: [],
  speaker: [],
  achievement_and_awards: [
    {
      icon: '',
      name:
        'Angelhack, Jaipur, 2017, Won 2nd place in hackathon with standout Smart Contract Dapp.',
      link: '',
    },
    {
      icon: '',
      name:
        'Competitive Coding Participation (Member Handle - rahulworld) HackerEarth, Spoj etc. 2015 - 2017.',
      link: '',
    },
    {
      icon: '',
      name:
        'Selected as Convenor (Head) of Tech Team NIT Srinagar, 2016 -  2017.',
      link: '',
    },
    {
      icon: '',
      name:
        'Digital India (Hackathon), 2015, Won 2nd place in hackathon with best theme web app.',
      link: '',
    },
    {
      icon: '',
      name: 'LogoFad, Won fourth place in logo competition, 2015.',
      link: '',
    },
    {
      icon: '',
      name:
        'Selected as one of the few students statewide for prestigious Inspire Scholarship 2012 for higher studies.',
      link: '',
    },
    {
      icon: '',
      name: 'Gave talks on GSoC, Open Source, Git, 2017.',
      link: '',
    },
    {
      icon: '',
      name:
        'Convenor of Machine Learning club #Slash, NIT Srinagar 2017 - 2018.',
      link: '',
    },
  ],
  hobbies: [
    'Cooking',
    'Traveling',
    'Hackathons',
    'Watching Documentaries',
    'Solving Puzzle',
  ],
};

export const WEB_SCHEMA = {
  pages: {
    home: {
      title: 'rahulworld || Rahul Chauhan',
      description: '',
    },
    about: {
      title: 'About',
      description: '',
    },
    work: {
      title: 'Work',
      description: '',
    },
    project: {
      title: 'Projects',
      description: '',
    },
  },
  common_links: {
    main: 'https://nextjs.org',
  },
  cards: [
    {
      name: 'Introduction',
      description: 'Introduction',
    },
  ],
};

export const COMMON = {
  introduction: {
    title: 'Introduction',
    description: '',
    next: 'More about me',
  },
  about: {
    title: 'Introduction',
    description: '',
    next: 'More about me',
  },
  projects: {
    title: 'Projects',
    description: '',
    next: 'See all projects',
  },
  work: {
    title: 'Professional Work Experiences',
    period: 'Aug 2020 - now',
    designation: 'Software Engineer @ WhiteHat Jr',
    description: '',
    next: 'See all experiences',
  },
  skills: {
    title: 'Skills',
    period: 'Aug 2020 - now',
    designation: 'Software Engineer @ WhiteHat Jr',
    description: '',
    next: 'More skills',
  },
  education: {
    title: 'Education',
    period: 'Aug 2014 - June 2018',
    designation: 'Computer Science & Engineering',
    description: 'National Institute of Technology, Srinagar, J&K, India',
    next: 'My Studies',
  },
  hobbies: {
    title: 'Hobbies',
    period: 'Aug 2014 - June 2018',
    designation: 'Computer Science & Engineering',
    description: 'National Institute of Technology, Srinagar, J&K, India',
    next: 'See all hobies',
  },
};
