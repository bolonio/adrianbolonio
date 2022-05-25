const light = {
  primary: "#ffffff",
  secondary: "#24292f",
  alternative: "#f1f5f9",
  terminal: "#263238",
}

const dark = {
  primary: "#24292f",
  secondary: "#ffffff",
  alternative: "#23333d",
  terminal: "#ffffff",
}

const defaultTheme = {
  fontSizes: {
    s: "0.5rem",
    sm: "0.75rem",
    m: "1rem",
    ml: "1.5rem",
    l: "2rem",
    xl: "3rem",
  },
  fontWeights: {
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6,
  },
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }
