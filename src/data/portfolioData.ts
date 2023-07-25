import skills from '@data/skillsData';

const portfolioData = [
  {
    'id': 1,
    'company': 'BAE Systems Applied Intelligence',
    'companyShorthand': 'BAE Systems AI',
    'companyLink': 'https://www.baesystems.com/en/cybersecurity/home',
    'client': 'Lloyd\'s Register',
    'clientLink': 'https://www.lr.org/',
    'clientImage': '/images/lr1.webp',
    'product': 'MAST',
    'date': {
      'start': '08/09/2014',
      'end': '08/09/2020'
    },
    'skills': [
      skills.angular,
      skills.javascript,
      skills.electron,
      skills.jasmine,
      skills.webpack,
      skills.scrum
    ],
    'description': 'MAST was a large scale AngularJS project BAE Systems Applied Intelligence delivered for Lloyd\'s Register.',
    'productSummary': 'At a basic level MAST is essentially an MOT application that Lloyd\'s Register surveyors would use to survey all maritime vehicles, whether that be commercial or government. Not everything Lloyd’s Register provides certificates for can be docked, due to this a key feature of MAST was that surveys could be conducted offline whilst out at sea.',
    'myRole': 'MAST was my first venture into Software Development. I started as an apprentice being thrown into the deep-end, working as as front-end developer on one of many Scrum teams. Initially I focused on bug fixes within the defect team. This provided me the perfect opportunity to develop my debugging skills whilst expanding my JavaScript and AngularJs knowledge.\n \n It wasn\'t too long before I was able to join a feature team giving me the opportunity to learn from the experienced developers around me on how to plan my work and code for the next developer. As there was a strong focus on every member of the team having a voice, I gained extensive experience in Scrum and was expected to run various ceremonies.\n \n Over time as my knowledge and experience grew, I became the front-end lead on MAST supporting, guiding and mentoring junior members of the team. I was expected to provide solutions to client-side problems whilst working closely with the Engineering Manager and Architect to plan upcoming work.',
    'keyFeatures': [
      {
        'heading': 'Online/Offline',
        'description': 'Using NeDB MAST was able to work online & offline'
      },
      {
        'heading': 'PDF Creation',
        'description': 'MAST was able to create PDF documents to provide certificates to clients'
      },
      {
        'heading': 'Localised data',
        'description': 'Due to offline requirements, data had to be localised client side using JavaScript'
      }
    ],
  },
  {
    'id': 2,
    'company': 'BAE Systems Applied Intelligence',
    'companyShorthand': 'BAE Systems AI',
    'companyLink': 'https://www.baesystems.com/en/cybersecurity/home',
    'client': 'Lloyd\'s Register',
    'clientLink': 'https://www.lr.org/',
    'clientImage': '/images/lr2.webp',
    'product': 'Class Direct',
    'date': {
      'start': '08/09/2018',
      'end': '08/09/2020'
    },
    'skills': [
      skills.angular,
      skills.javascript,
      skills.electron,
      skills.webpack,
      skills.jasmine,
      skills.scrum
    ],
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida cursus metus ut feugiat. Vestibulum tincidunt eu metus id vehicula. Proin non vulputate ipsum, vel varius sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum sem vitae arcu mollis, vel pellentesque leo gravida. Suspendisse potenti.'
  },
  {
    'id': 3,
    'company': 'BAE Systems Applied Intelligence',
    'companyShorthand': 'BAE Systems AI',
    'product': 'Squad Health Check',
    'companyLink': 'https://www.baesystems.com/en/cybersecurity/home',
    'clientImage': '/images/bae.webp',
    'date': {
      'start': '08/09/2017',
      'end': '08/09/2020'
    },
    'skills': [
      skills.vue,
      skills.vueX,
      skills.javascript,
      skills.webpack,
      skills.scrum
    ],
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida cursus metus ut feugiat. Vestibulum tincidunt eu metus id vehicula. Proin non vulputate ipsum, vel varius sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum sem vitae arcu mollis, vel pellentesque leo gravida. Suspendisse potenti.'
  },
  {
    'id': 4,
    'company': 'AND Digital: Dynamo',
    'companyShorthand': 'AND Digital',
    'companyLink': 'https://www.and.digital/',
    'clientImage': '/images/murray.webp',
    'product': 'Dynamo',
    'date': {
      'start': '08/09/2017',
      'end': '08/09/2020'
    },
    'skills': [
      skills.reactNative,
      skills.javascript,
      skills.jest,
      skills.scrum
    ],
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida cursus metus ut feugiat. Vestibulum tincidunt eu metus id vehicula. Proin non vulputate ipsum, vel varius sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum sem vitae arcu mollis, vel pellentesque leo gravida. Suspendisse potenti.'
  },
  {
    'id': 5,
    'company': 'AND Digital',
    'companyShorthand': 'AND Digital',
    'companyLink': 'https://www.and.digital/',
    'client': 'Sky',
    'clientLink': 'https://www.sky.com/',
    'clientImage': '/images/sky.jpeg',
    'product': 'Customer Hub',
    'date': {
      'start': '08/09/2017',
      'end': '08/09/2020'
    },
    'skills': [
      skills.react,
      skills.javascript,
      skills.jest,
      skills.scrum,
      skills.contentStack,
      skills.optimizely
    ],
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida cursus metus ut feugiat. Vestibulum tincidunt eu metus id vehicula. Proin non vulputate ipsum, vel varius sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum sem vitae arcu mollis, vel pellentesque leo gravida. Suspendisse potenti.',
    showCaseItems : [
      { src: '/images/customer_hub_ios.png' },
      { src: '/images/customer_hub_macbook.png' },
      { src: '/images/customer_hub_ipad.png' },
    ]
  },
  {
    'id': 6,
    'company': 'AND Digital',
    'companyShorthand': 'AND Digital',
    'companyLink': 'https://www.and.digital/',
    'client': 'Sky',
    'clientLink': 'https://www.sky.com/',
    'clientImage': '/logos/sky.png',
    'product': 'My Sky App',
    'date': {
      'start': '08/09/2017',
      'end': '08/09/2020'
    },
    'skills': [
      skills.reactNative,
      skills.javascript,
      skills.jest,
      skills.scrum,
      skills.contentStack,
      skills.adobeAnalytics
    ],
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida cursus metus ut feugiat. Vestibulum tincidunt eu metus id vehicula. Proin non vulputate ipsum, vel varius sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum sem vitae arcu mollis, vel pellentesque leo gravida. Suspendisse potenti.',
    showCaseItems : [
      { src: '/images/msa_ios.png' },
      { src: '/images/msa_android.png' },
    ]
  }
];

export default portfolioData;