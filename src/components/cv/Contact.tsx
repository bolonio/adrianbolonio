import { Anchorlink } from "@components/core/Anchorlink"
import Box from "@components/core/Box"
import Text from "@components/core/Text"
import { contacts } from "@data/contact"
import { ThemeContext } from "@providers/ThemeProvider"
import Image from "next/image"
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
            alt={`${contact.name}`}
          />
          <Anchorlink href={contact.url} target="_blank" underlined>
            <Text
              fontSize="1.5rem"
              fontWeight={700}
              letterSpacing="-.03em"
              lineHeight="1.5rem"
              style={{ margin: 0 }}
            >
              {contact.name}
            </Text>
          </Anchorlink>
        </Box>
      ))}
    </Box>
  )
}
