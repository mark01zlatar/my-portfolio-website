export default {
  head: {
    title: '',
    description: ''
  },
  links: {
    home: 'Home',
    about: 'About me',
    portfolio: 'Portfolio',
    technologies: 'Technologies',
    contact: 'Contact me',
    resume: 'Resume',
    english: 'English',
    serbian: 'Serbian',
    visitSite: 'Visit Site',
    viewMore: 'View More',
    sourceCode: 'Source Code'
  },
  home: {
    landingSection: {
      title: 'Self taught software and web developer'
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
      title: 'My story',
      firstPara:
        'I was never the best at school or academics, I’m just a super passionate and hard working guy. Most of my time I spend building websites and web apps, but there’s also a lot more to it. Also I spent at least one hour a day working out or having some physical activity - for me health is most important thing, and then comes everything else.',
      secondPara:
        'I started my journey as a self-taught web and software developer in second year of High School. Ever since I have fallen in love with programming and spend most of my days taking my craft and skills to the next level.',
      thirdPara:
        'Nowadays I tend to code all of my projects from scratch in order to deliver a unique experience to every company. I spend my free time learning and using what i learn by building new and challenging projects.'
    },
    projectsSection: {
      title: 'Portfolio',
      dialogTechnologies: 'Technologies used',
      dialogOverview: 'Overview',
      gemMedia: {
        title: 'Gem Media - Social media project',
        overview:
          'This project was created from two separate parts - frontend and backend. For frontend I used Nuxt.js to create SSR(Server Side Render) Vue.js application. For UI i used Vuetify.js(Material Design component framework). For backend I created REST API with Node.js(Express framework). For database MongoDB(NoSQL database) is used. For  interactions with MongoDB mongoose library is used. To implement private messaging feature Socket.io library is used .Node.js REST API is tested with Mocha.js, Chai.js, Sinon.js...Also rate-limiting is implemented.'
      },
      wlfClothing: {
        title: 'WLF(We love fashion) Clothing - eCommerce project',
        overview:
          'This project was created from two separate parts - frontend and backend. For frontend I used Nuxt.js to create SSR(Server Side Render) Vue.js application. For UI i used Vuetify.js(Material Design component framework). For backend I created REST API with Node.js(Express framework). For database MongoDB(NoSQL database) is used. For  interactions with MongoDB mongoose library is used. Some of features that are implemented are: Authentication & Authorization, Payment with paypal, CMS for users and products, pagination, email interactions, AWS S3 storage... basically everything one e-commerce must have.'
      },
      seoMind: {
        title: 'SEO Mind - Website project',
        overview:
          'To create this project, first I used tool created by Nuxt.js team called create-nuxt-app. In process of creating web application, for style is used Sass(Scss) and for version control is use Git & Github'
      },
      greatAthlete: {
        title: 'Great Athlete - GYM website project',
        overview:
          'To create this project, first I created setup with Webpack(module bundler). Once webpack setup is done correctly, he is responsible for fast development process and bundled minified code in production. Sass is used as css extension so i was able to to reuse css and organize it well. For all interactions with user vanilla JavaScript was used. Git and Github were used for version control.'
      }
    },
    technologiesSection: {
      title: 'Favourite Technologies',
      frontend: {
        title:
          'Technologies that I use to create beautiful front-end applications',
        subtitle:
          'Some of them are: HTML5, CSS3, JavaScript, Vue.js, Nuxt.js, Sass, Bootstrap, Vuetify.js, Webpack, Git & Github, etc.'
      },
      backend: {
        title:
          'Technologies that I use to create functional back-end applications',
        subtitle:
          'Some of them are: Node.js(Express), MongoDB, MySQL, Socket.io, GraphQL, Git & Github...'
      }
    }
  },
  footer: {
    title: 'DISCIPLINE. FREEDOM.'
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
        last: 'Last Name',
        errorText: 'Enter a valid text'
      },
      email: {
        title: 'Email',
        errorText: 'Please enter a valid email'
      },
      subject: {
        title: 'Subject',
        errorText: 'Please enter a valid subject'
      },
      message: {
        title: 'Message',
        errorText: 'Please enter a valid message'
      }
    }
  }
}
