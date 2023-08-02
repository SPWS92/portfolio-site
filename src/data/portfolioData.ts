import skills, { SkillProps } from '@data/skillsData';

const portfolioData = [
  {
    id: 1,
    company: 'BAE Systems Applied Intelligence',
    companyShorthand: 'BAE Systems AI',
    companyLink: 'https://www.baesystems.com/en/cybersecurity/home',
    client: 'Lloyd\'s Register',
    clientDescription: 'For 260 years, we have shown relentless curiosity to discover our clients\' challenges and to work together to identify the best solutions. We enable better safety, technical, operational and business performance in the Maritime sector, serving clients across the globe.',
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
    clientDescription: 'For 260 years, we have shown relentless curiosity to discover our clients\' challenges and to work together to identify the best solutions. We enable better safety, technical, operational and business performance in the Maritime sector, serving clients across the globe.',
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
    productSummary: 'Class Direct was an application built with AngularJS that allowed Lloyd\'s Register staff to be able to access information on clients vessels. This information could have been the previously created certificates generated in MAST or it could have been when the next survey was scheduled.',
    myRole: 'When I inherited the lead Front-end developer responsibilities of MAST, we as a team also inherited the project "Class Direct" from a team in Kuala Lumpar. Similarly to MAST, my role was to support junior members of the team whilst helping plan, design and implement features alonside fixing bugs.\n\nClass Direct used a combination of AngularJS and Pug which meant that this combined with little warning and knowledge transfer, we had the interesting task of bringing ourselves up to speed with the codebase and it\'s capabilities. The benefit of working on Class Direct and MAST at the same time was that I could now see the full picture of what BAE had been delivering for Lloyd\'s Register.',
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
    clientDescription: 'BAE Systems Digital Intelligence is home to more than 4,500 digital, cyber and intelligence experts. We work collaboratively across 10 countries to collect, connect and understand complex data, so that governments, nation states, armed forces and commercial businesses can unlock digital advantage in the most demanding environments.',
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
    description: 'Squad Health Check was an internal project at BAE Systems Applied Intelligence to give a bespoke tool for Scrum teams.',
    productSummary: 'The Squad Health Check (SHC) tool was designed and developed with the purpose of offering a bespoke and customisable tool for Scrum teams within BAE Systems Applied Intelligence to use to complete their squad health checks. Due to the focus on continuous improvements a the SHC tool allowed the user to compare scores against previous health checks.',
    myRole: 'Alongside my other responsibilities at BAE Systems Applied Intelligence, I volunteered to aid another developer in the creation of the Squad Health Check app. Although the development of the SHC was to be completed in our own time, we still held daily Standups, Refinement sessions and Sprint Reviews.\n\nA key feature I completed the discovery work for and finally delivered was the introduction of VueX. Early on in the project a need for a state management system became apparent and I was fortunate enough to be able to take on the task and successfully integrate VueX into a quickly growing project.',
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
    clientDescription: 'We support you on everything digital from short and focused strategic planning to end-to-end digital transformation.',
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
      skills.scrum,
      skills.swift
    ],
    description: 'To promote greener travel and a healthier lifestyle, Dynamo allows users to gain rewards by cycling around Leeds.',
    productSummary: 'Dynamo was a product of three ambitious developers working at AND Digital that were allowed to build the application via the Incubator initiative offered by AND Digital. This initiative allowed the developers to take advantage of the expertise and skills of the many professionals that AND have to offer.\nThe purpose of Dynamo is to promote a greener and healthier lifestyle using a mobile application developed with React Native that will track the users travel and offer them reward points based on their length of activity. As Dynamo is only designed to give points via walking, running and cycling, an anti-cheat system was also developed.',
    myRole: 'My time on Dynamo was fairly short lived as it was an incubator project at AND I was placed on whilst my permanant position was being finalised, although, my responsibilities were no different as to if I was on client. The majority of the team consisted of graduate developers new to React Native so I was tasked with supporting them and helping them develop their skills.\n\nAs it was known I would only be on the project for short period, I was asked to pick up the most pressing ticket, anti-cheating. Although I was new to Swift I was able to implement this feature on IOS using CLLocationManager.',
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
    clientDescription: 'Sky is one of Europe\'s leading media and entertainment companies and we are proud to be part of Comcast Corporation. Across six countries our innovative products connect 23 million customers to the best apps, and all the entertainment, sports, news and arts they love, including our own award-winning original content.',
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
    myRole: 'I entered the Customer Hub team with little industry experience with React but very quickly found my feet as I\'d spent a considerable amount of my personal time learning the library and building my own websites.\n\nAlthough on the service it looked like we were only working with two webpages, it very quickly became apparent that the codebase that we were working with was very large with many new aspects I hadn\'t previously had to consider. To me I\'d never needed to work with a CMS, feature toggles or A\\B testing but I very quickly became the SME for all of these within our project. Not only was I heavily involved in the planning and development of new features but I was one of two people with admin/production privliages for adding new content, feature toggles and A\\B tests.\n\nThe high level access and knowledge of Sky\'s implementation of Content Stack set me up for a great position for a future Sky project.',
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
    clientDescription: 'Sky is one of Europe\'s leading media and entertainment companies and we are proud to be part of Comcast Corporation. Across six countries our innovative products connect 23 million customers to the best apps, and all the entertainment, sports, news and arts they love, including our own award-winning original content.',
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
    myRole: 'As the new MSA project was gaining traction AND Digital was helping Sky to deliver, I was asked to move from the Customer Hub into a new squad as my experience with Sky\'s codebases was a unique advantage.\n\nAs a React Native Developer in one of three Scrum teams I was tasked with developing new componants for our quickly growing library whilst also ensuring feature parity with MSAv2. As should be within any development team I also had the responsibility of supporting the other developers in their development journey.\n\nSky was migrating much of their content from a MSAv2 specific stack in Content Stack over to the company wide one, something I had a vast amount of experience with. I quickly jumped at the opportunity to share my experiences, knowledge and tips with the Tech Leads, something that then resulted in me being one four people with full write access and the only non Tech Lead.\n\nAfter we delivered MSAv2 to the public we moved away from feature parity and started to introduced personalised experiences for customers. I have been heavily involved in the planning and introduction of personalised experiences and journeys into the Home and TV Screen.',
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
    clientImage: '/images/portfolio.png',
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
    productSummary: 'At the most basic level, the purpose of my Portfolio website is to enrich my CV. Due to a career in consulting and contracting, a CV can become extremely long, whereas it is normally advised to keep it short. Having this Portfolio allows me to focus my CV for a particular role and link my Portfolio to allow others to understand more about my experiences and the journey I have taken to get to this point.\n\nThe Portfolio website will have two primary pages, the "About me" page where my history in the Software industry can be discovered, and my Portfolio, a page that lists my industry and personal experience.',
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
    myRole: 'As the sole developer working on this React website, I designed and developed it from start to finish. Although there are upcoming changes to how data and content is accessed, it was decided that the initial MVP will have all data and content hardcoded. Future integration with a CMS will happen, but a decision is to be made on whether that will be an industry recognised service such Contentful or a one created by myself.',
    showCaseItems : [
      {
        id: 1, 
        src: '/images/portfolio_ios.png'
      },
      { 
        id: 2,
        src: '/images/portfolio_mac2.png'
      },
      { 
        id: 3,
        src: '/images/portfolio_ipad.png'
      },
    ]
  }
];

export interface FeatureProps {
  id: number;
  heading: string;
  description: string;
}
interface ShowcaseProps {
  id: number;
  src: string;
}

export interface ProjectProps {
  id: number;
  company?: string;
  companyShorthand?: string;
  companyLink?: string;
  client?: string;
  clientDescription?: string;
  clientLink?: string;
  clientImage?: string;
  product: string;
  personalProject: boolean;
  skills?: SkillProps[];
  description?: string;
  productSummary: string;
  myRole: string;
  keyFeatures?: FeatureProps[];
  showCaseItems?: ShowcaseProps[]
}

export default portfolioData;