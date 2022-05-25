import { languages } from "@data/languages"
import { getFlag } from "@lib/flags"
import Image from "next/image"
import NextLink from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { useIntl } from "react-intl"
import styled from "styled-components"

const FlagNextLink = styled(NextLink)`
  border: 0;
  background: transparent;
  padding: 0;
  line-height: 0px;
  cursor: pointer;

  :focus {
    outline: 3px dashed ${(props) => props.theme.secondary};
    outline-offset: 0.25rem;
  }
`

const FlagLink = styled.a`
  display: flex;
`

const FlagIcon = styled(Image)`
  margin: 0;
`

export const LanguageSelector = ({ alternate }: { alternate?: string }) => {
  const { locale, asPath } = useRouter()
  const newLocale = locale === "es" ? "en" : "es"
  const to = alternate ? alternate : asPath
  const intl = useIntl()

  return (
    <>
      {languages
        .filter((language) => locale !== language.id)
        .map((language) => (
          <FlagNextLink key={language.id} href={to} locale={newLocale} passHref>
            <FlagLink
              aria-label={intl.formatMessage(
                { id: "change_language" },
                { languageName: language.name }
              )}
            >
              <FlagIcon
                aria-hidden="true"
                width="30px"
                height="30px"
                src={getFlag(language.id)}
                alt={intl.formatMessage(
                  { id: "flag_alt" },
                  { languageFlag: language.flag }
                )}
              />
            </FlagLink>
          </FlagNextLink>
        ))}
    </>
  )
}
