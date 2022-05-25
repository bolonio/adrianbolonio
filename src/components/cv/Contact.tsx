import { contacts } from "@data/contact"
import { ThemeContext } from "@providers/ThemeProvider"
import { Anchorlink } from "@components/core/Anchorlink"
import Box from "@components/core/Box"
import Text from "@components/core/Text"
import Image from "next/image"
import Link from "next/link"
import React, { useContext } from "react"
import { useIntl } from "react-intl"
import styled from "styled-components"

const Icon = styled(Image)`
  fill: #ffffff;
  margin: 0;
  width: 25px;
  margin-right: 8px;
  @media screen and (max-width: 700px) {
    width: 30px;
  }
`

export const Contact = () => {
  const intl = useIntl()
  const themeContext = useContext(ThemeContext)
  return (
    <Box>
      {contacts.map((contact, i: number) => (
        <Box
          key={i}
          display="flex"
          alignItems="center"
          gridGap="8px"
          marginBottom="8px"
        >
          <Icon
            width="30px"
            height="30px"
            aria-hidden={true}
            src={
              themeContext.theme === "light"
                ? contact.iconDark
                : contact.iconLight
            }
            alt={`${contact.name} logo`}
          />
          <Link href={contact.url} passHref>
            <Anchorlink target="_blank" underlined>
              <Text
                fontSize="1.5rem"
                fontWeight={700}
                letterSpacing="-.03em"
                lineHeight="1.5rem"
                style={{ margin: 0 }}
              >
                {intl.formatMessage({ id: contact.name })}
              </Text>
            </Anchorlink>
          </Link>
        </Box>
      ))}
    </Box>
  )
}
