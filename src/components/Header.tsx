import { LayoutContent } from "@components/layouts/Layout"
import { headerMenu } from "@data/navigation"
import LogoDark from "@images/logo.svg"
import LogoLight from "@images/logo_white.svg"
import { ThemeContext } from "@providers/ThemeProvider"
import Link from "next/link"
import React, { PropsWithChildren, useContext, useState } from "react"
import { FormattedMessage, useIntl } from "react-intl"
import styled from "styled-components"
import { LanguageSelector } from "./LanguageSelector"
import { ThemeSwitcher } from "./ThemeSwitcher"

type HeaderProps = PropsWithChildren<{
  alternate?: string
}>

const HeaderContainer = styled.header``

const NavContainer = styled.nav`
  display: flex;
  padding: 16px 0;
  justify-content: space-between;
  align-items: center;
`

const HeaderMenu = styled.div`
  display: flex;
  gap: 24px;
  @media screen and (max-width: 700px) {
    width: 100%;
    justify-content: space-between;
    display: none;
  }
`

const HeaderBurgerMenu = styled.div`
  gap: 24px;
  display: none;
  @media screen and (max-width: 700px) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`

const HeaderMenuLink = styled.a`
  font-weight: 700;
  font-size: 1.5rem;
  text-decoration: none;
  letter-spacing: -0.03em;
  box-shadow: none;
  color: ${(props) => props.theme.secondary};

  @media screen and (max-width: 700px) {
    font-size: 1.25rem;
  }

  :focus {
    outline: 3px dashed ${(props) => props.theme.secondary};
    outline-offset: 0.25rem;
  }
`

const LogoImage = styled.img`
  margin: 0;
  width: 100px;
`

const LogoImageLink = styled.a`
  display: flex;
`

const BurgerMenuContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  position: absolute;
  z-index: 9999;
  background: ${(props) => props.theme.primary};
  left: 0;
  width: 100%;
  top: 80px;
  height: 100%;
`

const BurgerMenuButton = styled.button`
  border: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;

  :focus {
    outline: 3px dashed ${(props) => props.theme.secondary};
    outline-offset: 0.25rem;
  }
`

export const Header = ({ alternate }: HeaderProps) => {
  const { theme } = useContext(ThemeContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const intl = useIntl()

  return (
    <HeaderContainer>
      <LayoutContent>
        <NavContainer>
          <Link href="/" passHref>
            <LogoImageLink aria-label={intl.formatMessage({ id: "nav_Home" })}>
              <LogoImage
                src={theme === "light" ? `${LogoDark.src}` : `${LogoLight.src}`}
                alt="Adrian Bolonio Logo"
              />
            </LogoImageLink>
          </Link>
          <HeaderMenu>
            {headerMenu.map((menuItem) => (
              <Link key={menuItem.slug} href={`${menuItem.slug}`} passHref>
                <HeaderMenuLink>
                  <FormattedMessage id={`nav_${menuItem.title}`} />
                </HeaderMenuLink>
              </Link>
            ))}
            <ThemeSwitcher />
            <LanguageSelector alternate={alternate} />
          </HeaderMenu>
          <HeaderBurgerMenu>
            <BurgerMenuButton
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={intl.formatMessage(
                { id: "open_menu" },
                { theme: theme === "light" ? "dark" : "light" }
              )}
            >
              {menuOpen ? (
                <svg
                  height="28"
                  viewBox="0 0 512 512"
                  width="28"
                  fill={theme === "light" ? "#24292f" : "#ffffff"}
                >
                  <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
                </svg>
              ) : (
                <svg
                  height="28"
                  viewBox="0 0 512 512"
                  width="28"
                  fill={theme === "light" ? "#24292f" : "#ffffff"}
                >
                  <g>
                    <path d="M417.4,224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32   C448,238.3,434.3,224,417.4,224z" />
                    <path d="M417.4,96H94.6C77.7,96,64,110.3,64,128c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32   C448,110.3,434.3,96,417.4,96z" />
                    <path d="M417.4,352H94.6C77.7,352,64,366.3,64,384c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32   C448,366.3,434.3,352,417.4,352z" />
                  </g>
                </svg>
              )}
            </BurgerMenuButton>
            {menuOpen && (
              <BurgerMenuContainer>
                {headerMenu.map((menuItem) => (
                  <Link key={menuItem.slug} href={`${menuItem.slug}`} passHref>
                    <HeaderMenuLink>
                      <FormattedMessage id={`nav_${menuItem.title}`} />
                    </HeaderMenuLink>
                  </Link>
                ))}
                <ThemeSwitcher />
                <LanguageSelector alternate={alternate} />
              </BurgerMenuContainer>
            )}
          </HeaderBurgerMenu>
        </NavContainer>
      </LayoutContent>
    </HeaderContainer>
  )
}
