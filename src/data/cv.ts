export interface CvType {
  jobs: JobItemType[]
  education: EducationItemType[]
  languages: LanguageItemType[]
}

export interface JobItemType {
  title: string
  company: string
  companyUrl: string
  companyLogo: string
  location: Location
  startDate: string
  endDate: string
  description: string
  technologies?: string[]
}

export interface EducationItemType {
  school: string
  schoolUrl: string
  schoolLogo: string
  location: Location
  degree: string
  startDate: string
  endDate: string
  description: string
}

export interface LanguageItemType {
  id: string
  name: string
  level: string
  country: string
}

interface Location {
  country: Country
  city: string
}

interface Country {
  id: string
  name: string
}

export const cv = {
  jobs: [
    {
      company: "Miro",
      companyUrl: "http://www.miro.com/",
      companyLogo: "miro.png",
      title: "Senior Software Engineer - Accessibility",
      description:
        "Responsible for actively participating in the analysis of accessibility issues & goals, do research and determine solutions’ requirements, as well as making architectural decisions and recommendations for converting successful prototypes into mature and accessible products. I actively contribute to the design system component library with accessibility reviews, new documentation, and new behaviours and patterns definitions. I collaborate closely with people with disabilities throughout the product development lifecycle and look to innovate by exploring ways to interact with and communicate complex spatial information through various modalities such as audio. I collaborate with teams across Miro to improve our product, architecture and engineering practices, specially within Core Product, with the mission of making the Miro whiteboard accessible to everyone.",
      technologies: [
        "HTML",
        "CSS",
        "LESS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Styled Components",
        "Canvas",
      ],
      location: {
        country: {
          id: "AT",
          name: "Austria",
        },
        city: "Vienna",
      },
      startDate: "01/16/2023",
      endDate: "present",
    },
    {
      company: "GitHub",
      companyUrl: "http://www.github.com/",
      companyLogo: "github.png",
      title: "Software Engineer - Accessibility",
      description:
        "Responsible for building better process and tooling to ensure all code shipped at GitHub meets the accessibility standards and helping address accessibility bugs and improve the process to reduce the turnaround time by directly engaging with teams to guide their accessibility fixes and improve our OSS guidance for building UI with Primer and by collaborating with the Design Systems team to build and implement accessibility as a core requirement for the Primer component libraries as well as coordinating with engineering and product leadership to define and prioritize projects that help meet business objectives and work with support to triage and debug technical support requests, documenting every built system.",
      technologies: [
        "HTML",
        "CSS",
        "LESS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Styled Components",
        "Node",
        "Ruby",
        "RubyOnRails",
      ],
      location: {
        country: {
          id: "AT",
          name: "Austria",
        },
        city: "Vienna",
      },
      startDate: "08/01/2021",
      endDate: "11/18/2022",
    },
    {
      company: "willhaben internet service GmbH & Co KG",
      companyUrl: "https://www.willhaben.at/",
      companyLogo: "willhaben.webp",
      title: "Engineering Manager",
      description:
        "Responsible for leading a cross-functional engineering team (frontend, backend, SRE, QA, Android, iOS), establishing and communicating goals for the team and team members, managing product technical roadmaps and dependencies to minimise technical debt, as well as planning tasks and resource allocation (recruiting, salaries, holidays, home office). Recognizing the need for further development and planning further training measures, conducting and moderating regular meetings with the employees (1:1, team meetings, feedback discussions) as well as ensuring the flow of information (inside and outside the department), and recognizing and responding to conflicts within the team.",
      location: {
        country: {
          id: "AT",
          name: "Austria",
        },
        city: "Vienna",
      },
      startDate: "10/01/2018",
      endDate: "07/01/2021",
    },
    {
      company: "willhaben internet service GmbH & Co KG",
      companyUrl: "https://www.willhaben.at/",
      companyLogo: "willhaben.webp",
      title: "Senior Frontend Engineer",
      description:
        "Responsible for implementing responsible web design principles ensuring the technical feasibility of UI/UX designs maintaining consistency in design and layout. Building reusable code and libraries for future use, and developing new user interfaces. Working closely with the design team and project managers to ensured projects are delivered on time.",
      technolgoies: [
        "HTML",
        "CSS",
        "LESS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Styled Components",
        "Node",
      ],
      location: {
        country: {
          id: "AT",
          name: "Austria",
        },
        city: "Vienna",
      },
      startDate: "04/01/2017",
      endDate: "10/01/2018",
    },
    {
      company: "UpLeveled GmbH",
      companyUrl: "https://upleveled.io/",
      companyLogo: "upleveled.png",
      title: "Guest Lecturer",
      description:
        "Responsible for lecturing the Accessibility in Web Development subject at the Web Development Bootcamp degree. Syllabus: Development (best practices in HTML, ARIA...etc) and testing (automate and manual testing tools) web accessibility.",
      location: {
        country: {
          id: "AT",
          name: "Austria",
        },
        city: "Vienna",
      },
      startDate: "06/01/2020",
      endDate: "present",
    },
    {
      company: "FHWien der WKW",
      companyUrl: "https://www.fh-wien.ac.at/",
      companyLogo: "fhwien.png",
      title: "External Lecturer",
      description:
        "Responsible for lecturing the Application Design and Development subject at the Digital Business (BA) degree. Syllabus: Introduction to Web Development (HTML, CSS, Javascript, Accessibility).",
      location: {
        country: {
          id: "AT",
          name: "Austria",
        },
        city: "Vienna",
      },
      startDate: "03/01/2020",
      endDate: "04/01/2020",
    },
    {
      company: "yelster digital gmbh",
      companyUrl: "https://www.yelsterdigital.com/",
      companyLogo: "yelsterdigital.webp",
      title: "Frontend Engineer",
      description:
        "Responsible for developing new and modifying existing frontend components and prototypes. Contributing to the successful delivery of projects by delivering high quality software according to agreed timelines. Ensuring all required documentation is delivered regularly using appropriate standards, methods and tools. Assisting in technical and functional application design.",
      technologies: [
        "HTML",
        "CSS",
        "LESS",
        "JavaScript",
        "jQuery",
        "Angular",
        "Angular2",
        "NodeJS",
        "Sequelize",
        "PostgreSQL",
        "MySQL",
        "REST",
        "jSON",
        "CasperJS",
      ],
      location: {
        country: {
          id: "AT",
          name: "Austria",
        },
        city: "Vienna",
      },
      startDate: "10/01/2014",
      endDate: "03/01/2017",
    },
    {
      company: "Fachhochschule Technikum Wien",
      companyUrl: "https://www.technikum-wien.at/",
      companyLogo: "fhtechnikumwien.png",
      title: "External Lecturer",
      description:
        "Responsible for lecturing the Web Technologies 2 subject at the Business Informatics (BSc) degree, Syllabus: jQuery and Ajax basics, JSON structures, PHP Object Oriented Programming concepts, PHP Cookies and Sessions and PHP Connection to Oracle DB.",
      location: {
        country: {
          id: "AT",
          name: "Austria",
        },
        city: "Vienna",
      },
      startDate: "03/01/2016",
      endDate: "09/01/2016",
    },
    {
      company: "kompany",
      companyUrl: "https://www.kompany.com/",
      companyLogo: "kompany.webp",
      title: "Frontend Engineer",
      description:
        "Responsible for the analysis, specification, high level design, coding, configuration, testing and documentation of new applications, interfaces and reports in accordance with kompany development standards and processes. Working with colleagues, third parties and internal stake-holders, I was also responsible for supporting and maintaining applications, interfaces and reports that have been developed by the team and other parties (internal and external).",
      technologies: [
        "HTML",
        "CSS",
        "LESS",
        "JavaScript",
        "jQuery",
        "XML",
        "jSON",
        "PHP",
        "MySQL",
        "Wordpress",
      ],
      location: {
        country: {
          id: "AT",
          name: "Austria",
        },
        city: "Vienna",
      },
      startDate: "09/01/2012",
      endDate: "09/01/2014",
    },
    {
      company: "CEROSYUNOS INGENIERIA INFORMATICA SL",
      companyUrl: "https://www.cerosyunos.es/",
      companyLogo: "cerosyunos.png",
      title: "Frontend Engineer",
      description:
        "Responsible for providing user requirements analysis, design and programming support for enhancement of web application using the latest GIS technologies, such as GeoRSS Feed Technology with GeoNames Database, and Google Maps API 3/0/ Applying GIS technology to smart phones and smart devices with iOS (Objective-C)",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "jQuery",
        "PHP",
        "MySQL",
        "GeoNames",
        "Google Maps API 3/0",
        "GeoRSS",
      ],
      location: {
        country: {
          id: "ES",
          name: "Spain",
        },
        city: "Alcalá de Henares, Madrid",
      },
      startDate: "09/01/2011",
      endDate: "08/01/2012",
    },
    {
      company: "Universidad de Alcalá",
      companyUrl: "https://uah.es/",
      companyLogo: "uah.png",
      title:
        "Intern at the computer and graphic design department for the student union",
      description:
        "Responsible for the analysis, development, configuration, testing and documentation of the server and the self hosted new website. I was also responsible for supporting and maintaining websites, interfaces and reports that have been developed by the other student unions, as well as the graphic design of all posters and advertisements done by the Student Union.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "jQuery",
        "PHP",
        "MySQL",
        "Wordpress",
        "Joomla",
        "Photoshop CS",
      ],
      location: {
        country: {
          id: "ES",
          name: "Spain",
        },
        city: "Alcalá de Henares, Madrid",
      },
      startDate: "2008",
      endDate: "2010",
    },
  ],
  education: [
    {
      school: "Fachhochschule Technikum Wien",
      schoolUrl: "https://www.technikum-wien.at/",
      schoolLogo: "fhtechnikumwien.png",
      location: {
        country: {
          id: "AT",
          name: "Austria",
        },
        city: "Vienna",
      },
      degree: "Bachelor of Science in Engineering (BSc) Business Informatics",
      startDate: "2013",
      endDate: "2017",
      description:
        "Business informatics subjects: Datawarehouse, Enterprise Resource Planning, SAP, Navision, System Components, Open Enterprise Computing, Supply Chain Management, Modeling Techniques, Business Process Management, Business Intelligence, Customer Relationship Management, eBusiness, eHealth, Case Studies  Computer science: Programming, Web Technologies, Software Engineering, Database Systems, IT Security, Operating Systems, Computer Architectures and Networks, IT Infrastructure, Databases  Business, management & law: IT Project Management, Software Project Management, Marketing and Sales, Business Management and Organization, Investment & Financial Controlling, Entrepreneurship, Law Fundamentals, Accounting  English: Professional and Social Communication, Technical and Creative Communication, Economics, Technology and Society, Business Communication, Advanced Communication and Ethics.",
      "Degree Name": "Bachelor of Science in Engineering (BSc)",
    },
    {
      school: "Universidad de Alcalá",
      schoolUrl: "https://uah.es/",
      schoolLogo: "uah.png",
      location: {
        country: {
          id: "ES",
          name: "Spain",
        },
        city: "Alcalá de Henares",
      },
      degree: "Computer Science Management Engineering",
      startDate: "2007",
      endDate: "2012",
      description:
        "This degree teaches students to create computer programmes which are adjusted to the needs of enterprises and to have computer applications knowledge. Computer Science Management engineers analyse the computer programmes utilities which cover all the enterprise administrative, accounting and management needs. The engineers contribute to solve logical and simple enterprise problems thanks to computer programmes. The basic content in this studies are mathematics, engineering, electronic and economy.",
      "Degree Name": "Computer Science Management Engineering",
    },
    {
      school: "Linköping University",
      schoolUrl: "https://liu.se/",
      schoolLogo: "liu.png",
      location: {
        country: {
          id: "SE",
          name: "Sweden",
        },
        city: "Linköping",
      },
      degree: "Erasmus Exchange Program",
      startDate: "2010",
      endDate: "2011",
      description:
        "Subjects: Computer Security, Computer Architecture, Advanced Computer Architecture, Concurrent Programming and Operating Systems, Web Programming and Interactivity, Software Engineering Theory, Advanced Software Engineering, Distributed Systems.  Research project in the department of Physics, Chemistry and Biology in Linköping University.",
      "Degree Name": "Erasmus Exchange Program",
    },
    {
      school: "Danmarks Tekniske Universitet",
      schoolUrl: "https://www.dtu.dk/",
      schoolLogo: "dtu.webp",
      location: {
        country: {
          id: "DK",
          name: "Denmark",
        },
        city: "Copenhaguen",
      },
      degree: "Summer School 'Mobile Communications and m-Commerce'",
      startDate: "2008",
      endDate: "2008",
      description:
        "The goal of the course is to give an introduction to some of the information and techniques needed to conceptualise, design and develop innovative, profitable apps for mobile devices. The course will focus on giving an introduction to 3 aspects of developing commercial apps for mobile devices: Wireless Internet Connections, Business Innovation and Programming Techniques, Java (J2ME).",
      "Degree Name": 'Summer School "Mobile Communications and m-Commerce',
    },
    {
      school: "I.E.S. Alonso de Avellaneda",
      schoolUrl: "https://iesavellaneda.es/",
      schoolLogo: "ies.jpg",
      degree: "Advanced Expert in Development of Computer Applications",
      location: {
        country: {
          id: "ES",
          name: "Spain",
        },
        city: "Alcalá de Henares",
      },
      startDate: "2005",
      endDate: "2007",
      description:
        "- Analysis and detailed development of management computing applications  - Development of applications in fourth-generation environments and with case tools  - Design and implementation of display services in graphic environments  - Programming in structured languages  - Multi-user and networked computer systems.",
      "Degree Name": "Advanced Expert in Development of Computer Applications",
    },
  ],
  languages: [
    {
      id: "es",
      name: "Spanish",
      level: "Native or bilingual proficiency",
      country: "Spain",
    },
    {
      id: "en",
      name: "English",
      level: "Full professional proficiency",
      country: "United Kingdom",
    },
    {
      id: "it",
      name: "Italian",
      level: "Full professional proficiency",
      country: "Italy",
    },
    {
      id: "de",
      name: "German",
      level: "Professional working proficiency",
      country: "Germany",
    },
  ],
}
