export type TalkType = {
  title: string
  conference: string
  date: string
  location: {
    city: string
    countryCode: string
  }
  link: string
  video: string
  image: string
}

export type TalksType = {
  year: string
  talks: TalkType[]
}

export const talks: TalksType[] = [
  {
    year: "2024",
    talks: [
      {
        title: "Testeando Accesibilidad Web",
        conference: "Quality Forge",
        date: "10/10/2024",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://qualityforge.io/",
        video: "https://www.youtube.com/watch?v=mJ6BRwjJR2s",
        image: "qualityforge.jpg",
      },
    ],
  },
  {
    year: "2023",
    talks: [
      {
        title: "Testeando Accesibilidad Web",
        conference: "InfoBip Shift Conference",
        date: "09/01/2023",
        location: {
          city: "Zadar",
          countryCode: "HR",
        },
        link: "https://jsdaycanarias.com/",
        video: "https://www.youtube.com/watch?v=7VKducQ_tHg",
        image: "shift2023.jpg",
      },
      {
        title: "Tips de Accesibilidad Web",
        conference: "Programando se entienden las máquinas",
        date: "06/01/2023",
        location: {
          city: "Podcast",
          countryCode: "",
        },
        link: "https://jsdaycanarias.com/",
        video: "https://www.youtube.com/watch?v=pBpVsA46Gk4",
        image: "ucopodcast.webp",
      },
      {
        title: "Testeando Accesibilidad Web",
        conference: "JSDay Canarias",
        date: "05/07/2023",
        location: {
          city: "Tenerife",
          countryCode: "ES",
        },
        link: "https://jsdaycanarias.com/",
        video: "",
        image: "canariasjs.jpg",
      },
      {
        title: "Testeando Accesibilidad Web",
        conference: "Commit Conf",
        date: "04/21/2023",
        location: {
          city: "Madrid",
          countryCode: "ES",
        },
        link: "https://2023.commit-conf.com/",
        video: "https://www.youtube.com/watch?v=qJcdSUThUCk",
        image: "commitconf.jpg",
      },
      {
        title: "TBD",
        conference: "MiduFest",
        date: "03/21/2023",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://midufest.com/",
        video: "",
        image: "midufest.png",
      },
    ],
  },
  {
    year: "2022",
    talks: [
      {
        title: "State of a11y",
        conference: "State of the Web - State of a11y",
        date: "12/13/2022",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://www.thisdotmedia.com/state-of-the-web/",
        video: "https://www.youtube.com/watch?v=6hY-5KJRHwo",
        image: "statea11y.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "Spajk",
        date: "12/08/2022",
        location: {
          city: "Stockholm",
          countryCode: "SE",
        },
        link: "https://spajkbyelevate.com/",
        video: "",
        image: "spajk.png",
      },
      {
        title: "Accesibilidad y los sistemas de diseño",
        conference: "Design Systems Community Santiago",
        date: "12/06/2022",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://designsystems.community/chapters/santiago/",
        video: "https://www.youtube.com/watch?v=YnlGtTbZZX0",
        image: "scl.png",
      },
      {
        title: "Testing Web Accessibility",
        conference: "KidsABILITY Initiative",
        date: "10/15/2022",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://kidsabilityinitiative.org/",
        video: "https://youtu.be/xQvYB7L-Yfg?t=4177",
        image: "kidsabilityinitiative.jpeg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "Javascript Night",
        date: "10/13/2022",
        location: {
          city: "Vienna",
          countryCode: "AT",
        },
        link: "https://www.linkedin.com/events/javascriptnight6972867257668415489",
        video: "",
        image: "dotbite.png",
      },
      {
        title: "Testing Web Accessibility",
        conference: "ArmadaJS",
        date: "10/07/2022",
        location: {
          city: "Novi Sad",
          countryCode: "RS",
        },
        link: "https://armada-js.com/",
        video: "",
        image: "armadajs.png",
      },
      {
        title: "Testing Web Accessibility",
        conference: "Grace Hopper Open Source Day",
        date: "09/16/2022",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://anitab-org.github.io/open-source-day/",
        video: "",
        image: "gracehopper.png",
      },
      {
        title: "Testing Web Accessibility",
        conference: "Octogatos Conf",
        date: "09/15/2022",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://www.octogatosconf.com/",
        video: "https://youtu.be/NRZJ_uV0h70?t=8647",
        image: "octogatosconf.png",
      },
      {
        title: "Testing Web Accessibility",
        conference: "Modern Web Podcast",
        date: "07/30/2022",
        location: {
          city: "Podcast",
          countryCode: "",
        },
        link: "https://twitter.com/moderndotweb",
        video:
          "https://modernweb.podbean.com/e/s09e15-modern-web-podcast-accessibility-in-testing-with-adrian-bolonia/",
        image: "modernweb.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "WeAreDevelopers",
        date: "06/15/2022",
        location: {
          city: "Berlin",
          countryCode: "DE",
        },
        link: "https://www.wearedevelopers.com/world-congress/",
        video: "",
        image: "wearedevelopers.png",
      },
      {
        title: "Testing Web Accessibility",
        conference: "JSConf Budapest",
        date: "06/02/2022",
        location: {
          city: "Budapest",
          countryCode: "HU",
        },
        link: "https://jsconfbp.com/",
        video: "https://www.youtube.com/watch?v=eZnTIPQ4UuA",
        image: "jsconfbudapest.png",
      },
      {
        title: "Testeando Accesibilidad Web",
        conference: "Salmorejo Tech",
        date: "05/13/2022",
        location: {
          city: "Córdoba",
          countryCode: "ES",
        },
        link: "https://salmorejo.tech/2022/",
        video: "https://www.youtube.com/watch?v=a5ofaCtU7y8",
        image: "salmorejo.jpg",
      },
      {
        title: "Testeando Accesibilidad Web",
        conference: "JSDay Canarias",
        date: "05/07/2022",
        location: {
          city: "Tenerife",
          countryCode: "ES",
        },
        link: "https://jsdaycanarias.com/",
        video: "https://www.youtube.com/watch?v=f3C_7Hf7AmI",
        image: "canariasjs.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "JSDay Italy",
        date: "04/21/2022",
        location: {
          city: "Verona",
          countryCode: "IT",
        },
        link: "https://2022.jsday.it/",
        video: "https://www.youtube.com/watch?v=YW3nPjwGziA",
        image: "jsconfit.jpg",
      },
      {
        title: "State of a11y",
        conference: "State of the Web - State of a11y",
        date: "04/19/2022",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://www.thisdotmedia.com/state-of-the-web/",
        video: "https://www.youtube.com/watch?v=N2VfQ9_b-i4",
        image: "statea11y.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "Axe-con 2022",
        date: "03/16/2022",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://www.deque.com/axe-con/sessions/testing-web-accessibility/",
        video: "https://www.youtube.com/watch?v=km6fZy_Strk",
        image: "axecon.png",
      },
      {
        title: "Accessibility in Web Development",
        conference: "UpLeveled (Workshop)",
        date: "02/18/2022",
        location: {
          city: "Vienna",
          countryCode: "AT",
        },
        link: "https://upleveled.io/",
        video: "",
        image: "upleveled.jpg",
      },
    ],
  },
  {
    year: "2021",
    talks: [
      {
        title: "Testing Web Accessibility",
        conference: "Tech A11y Summit",
        date: "12/15/2021",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://techa11y.dev/",
        video: "https://www.youtube.com/watch?v=omyWNUW1grE",
        image: "a11ysummit.jpg",
      },
      {
        title: "Accessibility in Web Development",
        conference: "UpLeveled (Workshop)",
        date: "10/01/2021",
        location: {
          city: "Vienna",
          countryCode: "AT",
        },
        link: "https://upleveled.io/",
        video: "",
        image: "upleveled.jpg",
      },
      {
        title:
          "1er. Congreso Internacional de Ingeniería y Tecnologías para el Desarrollo Sustentable.",
        conference:
          "1er. Congreso Internacional de Ingeniería y Tecnologías para el Desarrollo Sustentable.",
        date: "10/01/2021",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "http://conainte.itsoeh.edu.mx/",
        video: "https://youtu.be/zejVpnrFnoA",
        image: "conainte.png",
      },
      {
        title: "Show me the code",
        conference: "El Arroyo: Show me the code",
        date: "10/29/2021",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://elarroyo.club/",
        video: "",
        image: "",
      },
      {
        title: "Testing Web Accessibility",
        conference: "GDG Tech Sessions",
        date: "10/28/2021",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://eu-sessions.gdgmadeira.xyz/",
        video: "https://www.youtube.com/watch?v=I8XIjt9tVZs",
        image: "gdgtechsessions.jpg",
      },
      {
        title: "Testeando Accesibilidad Web",
        conference: "Codemotion Devcast - Serie FrontEnd",
        date: "10/27/2021",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://live.codemotion.com/devcast/los-caminos-del-frontend",
        video: "https://youtu.be/N4D61o0gACI",
        image: "codemotion-devcast.jpg",
      },
      {
        title: "Git y Accesibilidad Web",
        conference: "Socratech",
        date: "09/27/2021",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://twitter.com/socratech_",
        video: "https://www.youtube.com/watch?v=o-FU9jGoKNk",
        image: "socratech.jpg",
      },
      {
        title: "Testeando Accesibilidad Web",
        conference: "AlcarriaConf",
        date: "06/23/2021",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://www.alcarriaconf.com/",
        video: "https://www.youtube.com/watch?v=A1z9vJMUwjI",
        image: "alcarriaconf.jpg",
      },
      {
        title: "Accessibility in Web Development",
        conference: "UpLeveled (Workshop)",
        date: "06/01/2021",
        location: {
          city: "Vienna",
          countryCode: "AT",
        },
        link: "https://upleveled.io/",
        video: "",
        image: "upleveled.jpg",
      },
      {
        title: "Testeando Accesibilidad Web",
        conference: "Zurracapote Conf",
        date: "02/27/2021",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://zurracapoteconf.appspot.com/",
        video: "https://www.youtube.com/watch?v=IueSiZjZyYc",
        image: "zurracapoteconf.jpg",
      },
      {
        title: "Testeando Accesibilidad Web",
        conference: "Open Source Weekends",
        date: "05/01/2021",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://twitter.com/os_weekends",
        video: "https://youtu.be/A6Yh33O1rik?t=234",
        image: "osweekend.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "TechFAIR LIVE",
        date: "04/15/2021",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://www.techfairlive.com/",
        video: "",
        image: "techfairllive.jpg",
      },
      {
        title: "Testeando Accesibilidad Web",
        conference: "GitHub ¡Presente! en Español",
        date: "03/17/2021",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "http://github.co/presente",
        video: "https://www.youtube.com/watch?v=GWWmrCvnapM&t=3338s",
        image: "githubpresente.jpg",
      },
    ],
  },
  {
    year: "2020",
    talks: [
      {
        title: "How does your website 'sound' like?",
        conference: "DevFest Siberia",
        date: "12/01/2020",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://gdg-siberia.com/",
        video: "",
        image: "gdgsiberia2020.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "Intersection conference",
        date: "10/01/2020",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://www.intersection-conference.eu/",
        video: "https://www.youtube.com/watch?v=Zc5T_Y2ueKY",
        image: "intersection.jpg",
      },
      {
        title: "Accessibility in Web Development",
        conference: "UpLeveled (Workshop)",
        date: "10/01/2020",
        location: {
          city: "Vienna",
          countryCode: "AT",
        },
        link: "https://upleveled.io/",
        video: "",
        image: "upleveled.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "Frontend Love Meetup",
        date: "08/01/2020",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "http://frontenddeveloperlove.com/",
        video: "https://www.youtube.com/watch?v=XDncZ-UZ8Hw",
        image: "frontendlove.png",
      },
      {
        title: "Testing Web Accessibility",
        conference: "BarcelonaJS",
        date: "07/01/2020",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://www.meetup.com/BarcelonaJS/",
        video: "https://www.youtube.com/watch?v=sc1CfX2-8v0",
        image: "barcelonajs.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "DevTalks Reimagined",
        date: "06/01/2020",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://www.devtalks.ro/",
        video: "",
        image: "devtalksro.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "UXDX Community Eastern Europe",
        date: "06/01/2020",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://uxdx.com/community/easterneurope/2020",
        video: "https://www.youtube.com/watch?v=-dBsgG7L2EQ",
        image: "uxdxconf.jpg",
      },
      {
        title: "Accessibility in Web Development",
        conference: "UpLeveled (Workshop)",
        date: "06/01/2020",
        location: {
          city: "Vienna",
          countryCode: "AT",
        },
        link: "https://upleveled.io/",
        video: "",
        image: "upleveled.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "Reactadelphia",
        date: "04/01/2020",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://twitter.com/reactadelphia",
        video: "https://www.youtube.com/watch?v=Ocem7jAb-Ik",
        image: "reactadelphia.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "StayAtHome Conf",
        date: "03/01/2020",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://www.stayathomeconf.com/",
        video: "https://www.youtube.com/watch?v=XmSK1t0w1L8",
        image: "stayathomeconf.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "FrontConf",
        date: "03/01/2020",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://frontconf.com/",
        video: "https://www.youtube.com/watch?v=xCGS1Vq777c",
        image: "frontconf.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "A11yClub Berlin",
        date: "03/01/2020",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://a11y-meetup-berlin.de/",
        video: "",
        image: "a11yberlin.png",
      },
      {
        title: "Accessibility in Web Development",
        conference: "UpLeveled (Workshop)",
        date: "03/01/2020",
        location: {
          city: "Vienna",
          countryCode: "AT",
        },
        link: "https://upleveled.io/",
        video: "",
        image: "upleveled.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "ViennaJS",
        date: "02/01/2020",
        location: {
          city: "Vienna",
          countryCode: "AT",
        },
        link: "https://viennajs.org/en/meetup/2020-02",
        video: "https://www.youtube.com/watch?v=ZupKHcb9w-k",
        image: "viennajs2020.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "TestBustersNight Vienna",
        date: "01/01/2020",
        location: {
          city: "Vienna",
          countryCode: "AT",
        },
        link: "https://www.meetup.com/Agile-Test-Automation-Meetup-VIENNA",
        video: "",
        image: "testbusters.jpg",
      },
      {
        title: "Diversity Pannel",
        conference: "SQLSaturday (Diversity Pannel)",
        date: "01/01/2020",
        location: {
          city: "Vienna",
          countryCode: "AT",
        },
        link: "https://www.sqlsaturday.com/917/EventHome.aspx",
        video: "",
        image: "sqlsaturday.jpg",
      },
    ],
  },
  {
    year: "2019",
    talks: [
      {
        title: "Testing Web Accessibility",
        conference: "Heisenbug Conf",
        date: "12/01/2019",
        location: {
          city: "Moscow",
          countryCode: "RU",
        },
        link: "https://heisenbug-moscow.ru/en/",
        video: "https://www.youtube.com/watch?v=GyXkH5ZmSfk",
        image: "heisenbug.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "DevFest Siberia",
        date: "12/01/2019",
        location: {
          city: "Novosibirsk",
          countryCode: "RU",
        },
        link: "https://gdg-siberia.com/",
        video: "https://www.youtube.com/watch?v=1eDCdL-3uI0",
        image: "gdgsiberia2019.png",
      },
      {
        title: "Testing Web Accessibility",
        conference: "Developer Melange",
        date: "12/01/2019",
        location: {
          city: "Podcast",
          countryCode: "",
        },
        link: "https://developermelange.github.io/",
        video: "http://developermelange.com/025-accessibility-101/",
        image: "developermelange.png",
      },
      {
        title: "Testing Web Accessibility",
        conference: "WebClerks",
        date: "11/01/2019",
        location: {
          city: "Vienna",
          countryCode: "AT",
        },
        link: "https://webclerks.at/",
        video: "https://youtu.be/ucLEMETfrTA?t=14220",
        image: "webclercks.png",
      },
      {
        title: "Testing Web Accessibility",
        conference: "DevFest Vienna",
        date: "11/01/2019",
        location: {
          city: "Vienna",
          countryCode: "AT",
        },
        link: "https://devfest.at/",
        video: "",
        image: "devfestvienna2019.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "React Vienna",
        date: "11/01/2019",
        location: {
          city: "Vienna",
          countryCode: "AT",
        },
        link: "https://twitter.com/reactvienna",
        video: "",
        image: "reactvienna.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "JSConf Colombia",
        date: "10/01/2019",
        location: {
          city: "Medellín",
          countryCode: "CO",
        },
        link: "http://jsconf.co/",
        video: "",
        image: "jsconfcolombia.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "AXSChat",
        date: "10/01/2019",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "http://axschat.com/",
        video: "https://www.youtube.com/watch?v=JFaS1JGO71w",
        image: "axschat.png",
      },
      {
        title: "Testing Web Accessibility",
        conference: "UpLeveled (Workshop)",
        date: "10/01/2019",
        location: {
          city: "Vienna",
          countryCode: "AT",
        },
        link: "https://upleveled.io/",
        video: "",
        image: "upleveled.jpg",
      },
      {
        title: "Testing Web Accessibility",
        conference: "Accessibility talks",
        date: "08/01/2019",
        location: {
          city: "Online",
          countryCode: "",
        },
        link: "https://www.youtube.com/c/accessibilitytalks",
        video: "https://www.youtube.com/watch?v=Nq6UhL_QvZk",
        image: "a11ytalks.jpg",
      },
    ],
  },
  {
    year: "2018",
    talks: [
      {
        title: "How does your website 'sound' like?",
        conference: "UX Vienna",
        date: "12/01/2018",
        location: {
          city: "Vienna",
          countryCode: "AT",
        },
        link: "https://uxvienna.at/",
        video: "",
        image: "uxvienna.jpg",
      },
      {
        title: "How does your website 'sound' like?",
        conference: "DevFest Vienna",
        date: "11/01/2018",
        location: {
          city: "Vienna",
          countryCode: "AT",
        },
        link: "https://devfest.at/",
        video: "https://www.youtube.com/watch?v=yKYA-7tczuk",
        image: "devfestvienna2018.jpg",
      },
      {
        title: "Willhaben Markup Language WHML",
        conference: "ViennaJS",
        date: "05/01/2018",
        location: {
          city: "Vienna",
          countryCode: "AT",
        },
        link: "https://viennajs.org/",
        video: "https://www.youtube.com/watch?v=tJXzyHHh4pc",
        image: "viennajs2018.jpg",
      },
    ],
  },
  {
    year: "2017",
    talks: [
      {
        title: "Dark Patterns - User Interfaces Designed to Trick People",
        conference: "UX Vienna",
        date: "11/01/2017",
        location: {
          city: "Vienna",
          countryCode: "AT",
        },
        link: "https://uxvienna.at/",
        video: "",
        image: "uxvienna.jpg",
      },
    ],
  },
]
