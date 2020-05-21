export default {
  links: {
    home: 'Početna stranica',
    about: 'O meni',
    portfolio: 'Portfolio',
    technologies: 'Tehnologije',
    contact: 'Kontaktiraj me',
    resume: 'Rezime',
    english: 'Engleski',
    serbian: 'Srpski',
    visitSite: 'Poseti sajt',
    viewMore: 'Prikaži više',
    sourceCode: 'Izvorni kod',
  },
  home: {
    head: {
      title: 'Početna stranica',
      description:
        'Marko Zlatar - Samouki softver i web developer. Vreme provodim unapređujući svoje znanje i veštine na viši nivo.',
      keywords:
        'Marko Zlatar, Samouki web developer, Programiranje, kreiranje websajta',
    },
    landingSection: {
      title: 'Samouki Software i Web developer',
    },
    servicesSection: {
      title: 'Neke od mojih usluga',
      mobileFriendly: {
        title: 'Dizajn prikladan svim uređajima',
        text:
          'Dizajn koji omogućava pristup svim korisnicima bez obzira na kom su uređaju.',
      },
      websiteAudits: {
        title: 'Unapređivanje sajta',
        text:
          'U koliko želite da poboljšate performanse sajta, SEO, ili da povećate zadovoljstvo vaših korisnika, kroz jednostavan proces možemo učiniti to zajedno',
      },
      cms: {
        title: 'CMS(Content-Management-System)',
        text:
          'Jednostavno i brzo upravljenje kontentom bez potrebe za kodovanjem',
      },
      designDevelopment: {
        title: 'Dizajn + Kreiranje',
        text:
          'Jednostavan, moderan dizajn - optimizovan za performanse, SEO i pretvaranje korisnika u klijente',
      },
      eCommerce: {
        title: 'eCommerce - Internet Prodavnice',
        text:
          'Integrisanje eCommerce platformi, načina plaćanja, kreiranje željenog izgleda proizvoda na sajtu i još mnogo toga',
      },
      analytics: {
        title: 'Analitika',
        text:
          'Saznajte ko su vaši korisnici kako bi ste mogli doneti pametnije biznis odluke.',
      },
    },
    aboutSection: {
      title: 'Moja priča',
      firstPara:
        'Nikada nisam bio najbolji u školi, jednostavno volim da radim i da se fokusiram na ono što me stvarno zanima. Najveći deo svog vremena posvećujem kreiranju web stranica i web aplikacija, ali postoji još mnogo stvari pored toga. Takođe svaki dan se bavim fizičkom aktivnošću - za mene je zdravlje najbitnija stvar, posle tog dolazi sve ostalo.',
      secondPara:
        'Moje iskustvo kao samouki web i software developer je počelo u drugoj godini srednje škole. Iako mi u početku nije bilo sasvim prirodno da razmišljam na drugačiji način, da zavolim programiranje nije mi trebalo mnogo vremena. Posvećivao sam sve više i više vremena za računarom kako bi kreirao nove stvari i unapredio svoje veštine na najbolji mogući način.',
      thirdPara:
        'Danas sam spreman da se suočim sa svim problemima koji mogu nastati kako bih dostavio najbolje moguće rezultate svakom klijentu. U slobodno vreme učim nove tehnologije i koristim naučeno kako bih kreirao nove projekte i postavio sebi nove izazove.',
    },
    projectsSection: {
      title: 'Portfolio',
      dialogTechnologies: 'Korišćene tehnologije',
      dialogOverview: 'Ukratko o projektu',
      gemMedia: {
        title: 'Gem Media - Socijalna mreža',
        overview:
          'Ovaj projekat je kreiran iz dva odvojena dela - frontend i backend. Na frontend-u koristio sam Nuxt.js kako bi postigao SSR(Server Side Render) Vue.js aplikacije. Za UI(User Interface) koristio sam Vuetify.js(Material Design framework). Za backend koristio sam REST API sa Node.js(Express framework). Kao bazu podataka koristio sam MongoDB(NoSQL baza podataka). Za interakciju sa MongoDB bazom podataka koristio sam mongoose biblioteku. Kako bih kreirao mogućnost slanja privatnih poruka, koristio sam socket.io biblioteku. Node.js aplikacija je testirana pomoću Mocha.js, Chai.js, Sinon.js... Takođe je integrisan rate-limit.',
      },
      wlfClothing: {
        title: 'WLF(We love fashion) Clothing - eCommerce projekat',
        overview:
          'Ovaj projekat je kreiran iz dva odvojena dela - frontend i backend.  Na frontend-u koristio sam Nuxt.js kako bi postigao SSR(Server Side Render) Vue.js aplikacije. Za UI(User Interface) koristio sam Vuetify.js(Material Design framework). Za backend koristio sam REST API sa Node.js(Express framework). Kao bazu podataka koristio sam MongoDB(NoSQL baza podataka). Za interakciju sa MongoDB bazom podataka koristio sam mongoose biblioteku. Neke od mogućnosti koje su kreirane u aplikaciji su: Autentikacija & Autorizacija, plaćanje pomoću Paypal-a, CMS za korisnike i proizvode, paginacija, slanje email-a, AWS S3 skladištenje... Sve što bi jedan eCommerce morao imati.',
      },
      seoMind: {
        title: 'SEO Mind - Website projekat',
        overview:
          'Kako bih kreirao ovaj projekat, koristio sam alatku kreiranu od strane Nuxt.js tima zvanu create-nuxt-app. U procesu kreiranja web aplikacije, kako bih organizovao CSS i bolje iskoristio kod, korišćen je Scss a za kontrolu verzije je korišćen Git uz Github',
      },
      greatAthlete: {
        title: 'Great Athlete - Websajt za Teretanu',
        overview:
          'Kako bih kreirao ovaj projekat, prvo sam iskoristio Webpack(module bundler). Kada je Webpack iskorišćen korektno, on je odgovoran za brže proces rada i za smanjenju veličinu koda u produkciji(bundled minified code). Sass je korišćen kao ekstenzija za CSS, čime sam bio u mogućnosti da organizujem i bolje iskoristim kod. Za sve interakcije sa korisnikom je korišćen vanilla JavaScript. Git i Github su korišćeni za kontrolu verzije.',
      },
    },
    technologiesSection: {
      title: 'Moje Tehnologije',
      frontend: {
        title:
          'Tehnologije koje koristim kako bih kreirao prelepe frontend aplikacije.',
        subtitle:
          'Neke od njih su: HTML5, CSS3, JavaScript, Vue.js, Nuxt.js, Sass, Bootstrap, Vuetify.js, Webpack, Gulp, PWA, Git & Github, itd.',
      },
      backend: {
        title:
          'Tehnologije koje koristim kako bih kreirao funkcionalne backend aplikacije.',
        subtitle:
          'Neke od njih su: Node.js(Express), TypeScript, MongoDB, MySQL, Socket.io, GraphQL, Git & Github...',
      },
    },
  },
  footer: {
    title: 'RAD. DISCIPLINA. SLOBODA.',
  },
  contact: {
    head: {
      title: 'Kontakt stranica ',
      description:
        'Recite šta imate na umu - Ovde možete da mi pošaljete poruku na željenu temu.',
      keywords: 'Kontakt Marko Zlatar',
    },
    buttons: {
      start: 'Klikni ovde kako bi poslao poruku',
      prev: 'Prethodno',
      cancel: 'Odustani',
      next: 'Sledeće',
      submit: 'Pošalji',
    },
    labels: {
      name: {
        first: 'Ime',
        last: 'Prezime',
        errorText: 'Unesite ispravne podatke',
      },
      email: {
        title: 'Email',
        errorText: 'Unesite ispravan email',
      },
      subject: {
        title: 'Tema',
        errorText: 'Unesite ispravnu temu',
      },
      message: {
        title: 'Poruka',
        errorText: 'Unesite ispravnu poruku',
      },
    },
    notifications: {
      success: {
        title: 'Poruka uspešno poslata',
        message:
          'Pozdrav, uspešno ste poslali poruku, pokušat ću da odgovorim u što kraćem roku.',
      },
      error: {
        title: 'Došlo je do greške',
        message:
          'U procesu slanja poruke je došlo do greške, radim na popravci...',
      },
    },
  },
  cookies: {
    message: 'Kolačići se koriste kako bi se poboljšalo iskustvo korisnika',
    button: 'Prihvati',
  },
  error: {
    firstPara: '',
    secondPara: '',
    mainMessage: 'Stranica koju tražite nije pronađena.',
  },
}
