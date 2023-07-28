import skills from '@data/skillsData';

const portfolioData = [
  {
    id: 1,
    company: 'BAE Systems Applied Intelligence',
    companyShorthand: 'BAE Systems AI',
    companyLink: 'https://www.baesystems.com/en/cybersecurity/home',
    client: 'Lloyd\'s Register',
    clientLink: 'https://www.lr.org/',
    clientImage: '/images/lr1.webp',
    product: 'MAST',
    date: {
      start: '08/09/2014',
      end: '08/09/2020'
    },
    personalProject: false,
    skills: [
      skills.angular,
      skills.javascript,
      skills.electron,
      skills.jasmine,
      skills.webpack,
      skills.scrum
    ],
    description: 'MAST was a large scale AngularJS project BAE Systems Applied Intelligence delivered for Lloyd\'s Register.',
    productSummary: 'At a basic level MAST is essentially an MOT application that Lloyd\'s Register surveyors would use to survey all maritime vehicles, whether that be commercial or government. Not everything Lloyd’s Register provides certificates for can be docked, due to this a key feature of MAST was that surveys could be conducted offline whilst out at sea.',
    myRole: 'MAST was my first venture into Software Development. I started as an apprentice being thrown into the deep-end, working as as front-end developer on one of many Scrum teams. Initially I focused on bug fixes within the defect team. This provided me the perfect opportunity to develop my debugging skills whilst expanding my JavaScript and AngularJs knowledge.\n \n It wasn\'t too long before I was able to join a feature team giving me the opportunity to learn from the experienced developers around me on how to plan my work and code for the next developer. As there was a strong focus on every member of the team having a voice, I gained extensive experience in Scrum and was expected to run various ceremonies.\n \n Over time as my knowledge and experience grew, I became the front-end lead on MAST supporting, guiding and mentoring junior members of the team. I was expected to provide solutions to client-side problems whilst working closely with the Engineering Manager and Architect to plan upcoming work.',
    keyFeatures: [
      {
        id: 1,
        heading: 'Online/Offline',
        description: 'Using NeDB MAST was able to work online & offline'
      },
      {
        id: 2,
        heading: 'PDF Creation',
        description: 'MAST was able to create PDF documents to provide certificates to clients'
      },
      {
        id: 3,
        heading: 'Localised data',
        description: 'Due to offline requirements, data had to be localised client side using JavaScript'
      }
    ],
  },
  {
    id: 2,
    company: 'BAE Systems Applied Intelligence',
    companyShorthand: 'BAE Systems AI',
    companyLink: 'https://www.baesystems.com/en/cybersecurity/home',
    client: 'Lloyd\'s Register',
    clientLink: 'https://www.lr.org/',
    clientImage: '/images/lr2.webp',
    product: 'Class Direct',
    date: {
      start: '08/09/2018',
      end: '08/09/2020'
    },
    personalProject: false,
    skills: [
      skills.angular,
      skills.javascript,
      skills.electron,
      skills.webpack,
      skills.jasmine,
      skills.scrum
    ],
    description: 'Class Direct was the sister project to MAST. It was used for Lloyd\'s Register\'s staff to be able to access certificates and information for clients.',
    productSummary: 'Class Direct was basically an application built with AngularJS that allowed Lloyd\'s Register staff to be able to access information on clients vessels. This information could have been the previously created certificates generated in MAST or it could have been when the next survey was scheduled.',
    keyFeatures: [
      {
        id: 1,
        heading: 'Responsive Design',
        description: 'Class Direct was created to work on various screen sizes'
      },
      {
        id: 2,
        heading: 'PDF Creation',
        description: 'MAST was able to create PDF documents to provide certificates to clients'
      },
      {
        id: 3,
        heading: 'Localised data',
        description: 'Due to offline requirements, data had to be localised client side using JavaScript'
      }
    ],
  },
  {
    id: 3,
    company: 'BAE Systems Applied Intelligence',
    companyShorthand: 'BAE Systems AI',
    product: 'Squad Health Check',
    companyLink: 'https://www.baesystems.com/en/cybersecurity/home',
    clientImage: '/images/bae.webp',
    date: {
      start: '08/09/2017',
      end: '08/09/2020'
    },
    personalProject: false,
    skills: [
      skills.vue,
      skills.vueX,
      skills.javascript,
      skills.webpack,
      skills.scrum
    ],
    description: 'Squad Health Check was an internal project at BAE Applied Intelligence to give a bespoke tool for Scrum teams.',
    productSummary: 'The Squad Health Check (SHC) tool was designed and developed with the purpose of offering a bespoke and customisable tool for Scrum teams within BAE Systems Applied Intelligence to use to complete their squad health checks. Due to the focus on continuous improvements a the SHC tool allowed the user to compare scores against previous health checks.',
    keyFeatures: [
      {
        id: 1,
        heading: 'Responsive Design',
        description: 'Squad Health Check was created to work on desktop and mobile devices'
      },
      {
        id: 2,
        heading: 'Firebase Integration',
        description: 'Firebase was used as a database and CMS'
      },
      {
        id: 3,
        heading: 'Data Analysis',
        description: 'A great feature was added to compare health check data against previous data sets'
      }
    ],
  },
  {
    id: 4,
    company: 'AND Digital: Dynamo',
    companyShorthand: 'AND Digital',
    companyLink: 'https://www.and.digital/',
    clientImage: '/images/murray.webp',
    product: 'Dynamo',
    date: {
      start: '08/09/2017',
      end: '08/09/2020'
    },
    personalProject: false,
    skills: [
      skills.reactNative,
      skills.javascript,
      skills.jest,
      skills.scrum
    ],
    description: 'To promote greener travel and a healthier lifestyle, Dynamo allows users to gain rewards by cycling around Leeds.',
    productSummary: 'Dynamo was a product of three ambitious developers working at AND Digital that were allowed to build the application via the Incubator initiative offered by AND Digital. This initiative allowed the developers to take advantage of the expertise and skills of the many professionals that AND have to offer.\nThe purpose of Dynamo is to promote a greener and healthier lifestyle using a mobile application developed with React Native that will track the users travel and offer them reward points based on their length of activity. As Dynamo is only designed to give points via walking, running and cycling, an anti-cheat system was also developed.',
    keyFeatures: [
      {
        id: 1,
        heading: 'Responsive Design',
        description: 'Dynamo was created to work on various screen sizes'
      },
      {
        id: 2,
        heading: 'Anti-cheat',
        description: 'Using CLLocationManager Dynamo can determine a users speed'
      },
      {
        id: 3,
        heading: 'Historic Data Analysis',
        description: 'Dynamo allows users to track and compare previous activities'
      }
    ],
  },
  {
    id: 5,
    company: 'AND Digital',
    companyShorthand: 'AND Digital',
    companyLink: 'https://www.and.digital/',
    client: 'Sky',
    clientLink: 'https://www.sky.com/',
    clientImage: '/images/sky.jpeg',
    product: 'Customer Hub',
    date: {
      start: '08/09/2017',
      end: '08/09/2020'
    },
    personalProject: false,
    skills: [
      skills.react,
      skills.javascript,
      skills.jest,
      skills.scrum,
      skills.contentStack,
      skills.optimizely
    ],
    description: 'Sky\'s Customer Hub is the name given to the TV Hub, the webpage where users can purchase TV products.',
    productSummary: 'Sky\'s Customer Hub is a heavily visited part of Sky.com. The purpose of the Customer Hub is to upsell Sky TV packages and hardware to customers, as well as allow them to easily cancel subscriptions.\n\nWith a heavy focus on continuous improvement and data analysis A/B testing was a very common practice, taking advantage of Optimizely and Adobe Analytics to easily run AB testing and find the most effective features. Optimizely was also used for feature toggles allowing the development of features without being slowed down by external bottlenecks.',
    keyFeatures: [
      {
        id: 1,
        heading: 'Responsive Design',
        description: 'Customer Hub was created to work on various screen sizes'
      },
      {
        id: 2,
        heading: 'A/B Testing',
        description: 'Using Optimizely A/B Testing was an extremely common practice'
      },
      {
        id: 3,
        heading: 'Feature Toggling',
        description: 'Using Optimizely\'s features could be developed and schedules to be turned on at a lated date'
      }
    ],
    showCaseItems : [
      { 
        id: 1,
        src: '/images/customer_hub_ios.png' 
      },
      { 
        id: 2,
        src: '/images/customer_hub_macbook.png' 
      },
      { 
        id: 3,
        src: '/images/customer_hub_ipad.png' 
      },
    ]
  },
  {
    id: 6,
    company: 'AND Digital',
    companyShorthand: 'AND Digital',
    companyLink: 'https://www.and.digital/',
    client: 'Sky',
    clientLink: 'https://www.sky.com/',
    clientImage: '/logos/sky.png',
    product: 'My Sky App',
    date: {
      start: '08/09/2017',
      end: '08/09/2020'
    },
    personalProject: false,
    skills: [
      skills.reactNative,
      skills.javascript,
      skills.jest,
      skills.scrum,
      skills.contentStack,
      skills.adobeAnalytics
    ],
    description: 'MSA v3 is the third iteration of the My Sky App developed using React Native.',
    productSummary: 'MSA v3 is the third iteration of the My Sky App that was released in 2023. Originally v3 was developed to be a feature parity successor to v2, although this time built from the ground up with React Native instead of Sky\'s internally developed custom language/library.\n\nTo enable Sky\'s ambition to become App first the purpose of MSA was to assist customers with all their needs and help ease the pressure on call centres. MSA is a hub for customers to manage all their Sky needs, whether that is TV, Mobile or Broadband. There is also a huge drive for peronsalisation using Adobe Target to provide a personalised experience per customer.',
    keyFeatures: [
      {
        id: 1,
        heading: 'Personalised Experience',
        description: 'Using Adobe Target MSA offers a personalised experience for each customer'
      },
      {
        id: 2,
        heading: 'Responsive Design',
        description: 'MSA was created to work on various screen sizes and devices'
      },
      {
        id: 3,
        heading: 'Feature Toggling',
        description: 'Using Firebase Remote config features could be developed and schedules to be turned on at a lated date'
      }
    ],
    showCaseItems : [
      {
        id: 1, 
        src: '/images/msa_ios.png'
      },
      { 
        id: 2,
        src: '/images/msa_android.png'
      },
    ]
  },
  {
    id: 7,
    companyLink: 'https://www.and.digital/',
    clientLink: 'https://www.sky.com/',
    clientImage: '/logos/sky.png',
    product: 'Portfolio Website',
    date: {
      start: '08/09/2017',
      end: '08/09/2020'
    },
    personalProject: true,
    skills: [
      skills.react,
      skills.javascript,
      skills.jest,
    ],
    description: 'A personal Portfolio to assist in further explaining my experiences and journey.',
    productSummary: 'MSA v3 is the third iteration of the My Sky App that was released in 2023. Originally v3 was developed to be a feature parity successor to v2, although this time built from the ground up with React Native instead of Sky\'s internally developed custom language/library.\n\nTo enable Sky\'s ambition to become App first the purpose of MSA was to assist customers with all their needs and help ease the pressure on call centres. MSA is a hub for customers to manage all their Sky needs, whether that is TV, Mobile or Broadband. There is also a huge drive for peronsalisation using Adobe Target to provide a personalised experience per customer.',
    keyFeatures: [
      {
        id: 1,
        heading: 'Personalised Experience',
        description: 'Using Adobe Target MSA offers a personalised experience for each customer'
      },
      {
        id: 2,
        heading: 'Responsive Design',
        description: 'MSA was created to work on various screen sizes and devices'
      },
      {
        id: 3,
        heading: 'Feature Toggling',
        description: 'Using Firebase Remote config features could be developed and schedules to be turned on at a lated date'
      }
    ],
    showCaseItems : [
      {
        id: 1, 
        src: '/images/msa_ios.png'
      },
      { 
        id: 2,
        src: '/images/msa_android.png'
      },
    ]
  }
];

export default portfolioData;