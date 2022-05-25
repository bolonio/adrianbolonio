import EmailIconLight from "@images/email.svg"
import EmailIconDark from "@images/email_dark.svg"
import GithubIconLight from "@images/github.svg"
import GithubIconDark from "@images/github_dark.svg"
import LinkedinIconLight from "@images/linkedin.svg"
import LinkedinIconDark from "@images/linkedin_dark.svg"
import TwitterIconLight from "@images/twitter.svg"
import TwitterIconDark from "@images/twitter_dark.svg"
import WebIconLight from "@images/www.svg"
import WebIconDark from "@images/www_dark.svg"

export const contacts = [
  {
    iconLight: WebIconLight,
    iconDark: WebIconDark,
    name: "Web",
    title: "www.adrianbolonio.com",
    url: "https://www.adrianbolonio.com/",
    inFooter: false,
  },
  {
    iconLight: EmailIconLight,
    iconDark: EmailIconDark,
    name: "Email",
    title: "Contact me",
    url: "mailto: adrian.bolonio@gmail.com",
    inFooter: true,
  },
  {
    iconLight: TwitterIconLight,
    iconDark: TwitterIconDark,
    name: "Twitter",
    title: "@bolonio",
    url: "https://twitter.com/bolonio",
    inFooter: true,
  },
  {
    iconLight: GithubIconLight,
    iconDark: GithubIconDark,
    name: "Github",
    title: "@bolonio",
    url: "https://github.com/bolonio",
    inFooter: true,
  },
  {
    iconLight: LinkedinIconLight,
    iconDark: LinkedinIconDark,
    name: "LinkedIn",
    title: "Adrián Bolonio",
    url: "https://www.linkedin.com/in/adrianbolonio/",
    inFooter: true,
  },
]
