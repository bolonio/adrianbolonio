import { Anchorlink } from "@components/core/Anchorlink"
import Box from "@components/core/Box"
import { LayoutContent } from "@components/layouts/Layout"
import { contacts } from "@data/contact"
import { footerMenu } from "@data/navigation"
import LogoDark from "@images/logo.svg"
import LogoLight from "@images/logo_white.svg"
import { ThemeContext } from "@providers/ThemeProvider"
import Image from "next/image"
import { default as Link } from "next/link"
import React, { FunctionComponent, useContext } from "react"
import { FormattedMessage, useIntl } from "react-intl"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
  padding: 15px 0;
`

const FooterIcon = styled(Image)`
  fill: #ffffff;
  margin: 0;
  width: 25px;
  @media screen and (max-width: 700px) {
    width: 30px;
  }
`

const FooterMenu = styled.div`
  display: flex;
  gap: 24px;
  @media screen and (max-width: 700px) {
    margin-bottom: 16px;
  }
`

const FooterMenuLink = styled.a`
  font-weight: 700;
  font-size: 1.25rem;
  text-decoration: none;
  letter-spacing: -0.03em;
  box-shadow: none;
  color: ${(props) => props.theme.primary};

  @media screen and (max-width: 700px) {
    font-size: 1.25rem;
  }

  :focus {
    outline: 3px dashed ${(props) => props.theme.primary};
    outline-offset: 0.25rem;
  }
`

const LogoImage = styled.img`
  fill: #ffffff;
  margin: 0;
  width: 100px;
  margin-right: 2rem;
  @media screen and (max-width: 700px) {
    display: none;
  }
`

const FooterIconLink = styled(Anchorlink)`
  display: flex;
  color: ${(props) => props.theme.primary};
`

export const Footer: FunctionComponent = () => {
  const intl = useIntl()
  const themeContext = useContext(ThemeContext)
  return (
    <FooterContainer>
      <LayoutContent>
        <Box
          display="flex"
          justifyContent={["space-between", "flex-start"]}
          alignItems={["center", "center"]}
          flexDirection={["column", "row"]}
        >
          <Box
            display="flex"
            width="100%"
            alignItems="center"
            marginBottom={[2, 0]}
          >
            <LogoImage
              src={
                themeContext.theme === "light"
                  ? `${LogoLight.src}`
                  : `${LogoDark.src}`
              }
              alt="Adrian Bolonio Logo"
            />
            <FooterMenu>
              {footerMenu.map((menuItem) => (
                <Link key={menuItem.slug} href={`${menuItem.slug}`} passHref>
                  <FooterMenuLink>
                    <FormattedMessage id={`nav_${menuItem.title}`} />
                  </FooterMenuLink>
                </Link>
              ))}
            </FooterMenu>
          </Box>
          <Box
            display="flex"
            justifyContent={["space-between", "flex-end"]}
            alignItems="center"
            width="100%"
            gridGap="16px"
          >
            {contacts.map((contact) =>
              contact.inFooter ? (
                <FooterIconLink
                  key={contact.name}
                  href={contact.url}
                  target="_blank"
                  rel="noopener"
                  inverted={true}
                  aria-label={intl.formatMessage(
                    { id: "go_to_profile" },
                    { contact: contact.name }
                  )}
                >
                  <FooterIcon
                    width="30px"
                    height="30px"
                    src={
                      themeContext.theme === "light"
                        ? contact.iconLight
                        : contact.iconDark
                    }
                    alt={`${contact.name} Logo`}
                  />
                </FooterIconLink>
              ) : null
            )}
          </Box>
        </Box>
      </LayoutContent>
    </FooterContainer>
  )
}
