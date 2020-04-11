export default {
  head: {
    title: '',
    description: ''
  },
  links: {
    home: 'Pocetna stranica',
    about: 'O meni',
    portfolio: 'Portfolio',
    technologies: 'Tehnologije',
    contact: 'Kontakiraj me',
    resume: 'Resume',
    english: 'Engleski',
    serbian: 'Srpski',
    visitSite: 'Poseti sajt',
    viewMore: 'Prikazi vise',
    sourceCode: 'Izvorni kod'
  },
  home: {
    landingSection: {
      title: 'Samouki software i <span>web developer</span>'
    },
    servicesSection: {
      title: 'Some of my services',
      mobileFriendly: {
        title: 'Mobile-friendly',
        text:
          'A responsive design makes your website accessible to all users, regardless of their device.'
      },
      websiteAudits: {
        title: 'Website audits',
        text:
          'Looking to improve your page performance, SEO, or user experience? Request a free site audit.'
      },
      cms: {
        title: 'CMS(Content-Management-System)',
        text: 'Easily update content without knowing how to code.'
      },
      designDevelopment: {
        title: 'Design + Development',
        text:
          'Clean, modern designs - optimized for performance, search engines, and converting users to customers.'
      },
      eCommerce: {
        title: 'eCommerce',
        text:
          'Integration of eCommerce platforms, payment gateways, custom product templates, and more.'
      },
      analytics: {
        title: 'Analytics',
        text:
          'Get insights into who is browsing your site so that you can make smarter business decisions.'
      }
    },
    aboutSection: {
      title: 'Who Am I',
      firstPara:
        'I was never the best at school or academics, I’m just a super curious guy. I spend a lot of time building websites and web apps, but there’s also a lot more to it. Also I spent at least one hour a day working out or having some physical activity - for me health is most important thing, and then comes everything else.',
      secondPara:
        'I started my journey as a self-taught web and software developer in second year of High School. Ever since I have fallen in love with programming and spend most of my days taking my craft and skills to the next level.',
      thirdPara:
        'Nowadays I tend to code all of my projects from scratch in order to deliver a unique experience to every company. I spend my free time learning and using what i learn by building new and challenging projects.'
    },
    projectsSection: {
      gemMedia: {
        title: 'Gem Media - Social media project',
        overview:
          'To create this project, first I created setup with Webpack(module bundler). Once webpack setup is done correctly, he is responsible for fast development process and bundled minified code in production. Sass is used as css extension so i was able to to reuse css and organize it well. For all interactions with user vanilla JavaScript was used. Git and Github were used for version control.'
      },
      wlfClothing: {
        title: 'WLF(We love fashion) Clothing - eCommerce project',
        overview:
          'This project was created from two separate parts - frontend and backend. For frontend I used Nuxt.js to create SSR(Server Side Render) Vue.js application. For UI i used Vuetify.js(Material Design component framework). For backend I created REST API with Node.js(Express framework). For database MongoDB(NoSQL database) is used. For  interactions with MongoDB mongoose library is used. Some of features that are implemented are: Authentication & Authorization, Payment with paypal, CMS for users and products, pagination, email interactions, AWS S3 storage... basically everything one e-commerce must have.'
      },
      seoMind: {
        title: 'SEO Mind - Website project',
        overview:
          'This project was created from two separate parts - frontend and backend. For frontend I used Nuxt.js to create SSR(Server Side Render) Vue.js application. For UI i used Vuetify.js(Material Design component framework). For backend I created REST API with Node.js(Express framework). For database MongoDB(NoSQL database) is used. For  interactions with MongoDB mongoose library is used. To implement private messaging feature Socket.io library is used .Node.js REST API is tested with Mocha.js, Chai.js, Sinon.js...Also rate-limiting is implemented.'
      },
      greatAthlete: {
        title: 'Great Athlete - GYM website project',
        overview:
          'To create this project, first I used tool created by Nuxt.js team called create-nuxt-app. Nuxt.js is framework for Vue.js. In process of creating web application, for style is used Sass(Scss) and for version control is use Git & Github'
      }
    },
    technologiesSection: {
      title: 'Favourite Technologies',
      frontEnd: {
        title:
          'Technologies that I use to create beautiful front-end applications',
        subTitle:
          'Some of them are: HTML5, CSS3, JavaScript, Vue.js, Nuxt.js, Sass, Bootstrap, Vuetify.js, Webpack, Git & Github, etc.'
      },
      backEnd: {
        title:
          'Technologies that I use to create scaleable back-end applications',
        subTitle:
          'Some of them are: Node.js(Express), MongoDB, MySQL, Socket.io, GraphQL, Git & Github...'
      }
    },
    footer: {
      title: 'FOCUS. DISCIPLINE. SIMPLICITY.'
    }
  },
  contact: {
    buttons: {
      start: 'Click here to send a message',
      prev: 'Previous',
      cancel: 'Cancel',
      next: 'Next',
      submit: 'Submit'
    },
    labels: {
      name: {
        first: 'First Name',
        last: 'Last Name'
      },
      email: 'Email',
      subject: 'Subject',
      message: 'Message'
    }
  }
}
