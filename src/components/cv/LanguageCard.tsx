import Box from "@components/core/Box"
import Text from "@components/core/Text"
import { LanguageItemType } from "@data/cv"
import { getFlag } from "@lib/flags"
import Image from "next/image"
import React from "react"
import { FormattedMessage, useIntl } from "react-intl"
import styled from "styled-components"

interface LanguageCardProps {
  language: LanguageItemType
}

const FlagIcon = styled(Image)`
  margin: 0;
  margin-right: 8px;
`

export const LanguageCard = ({ language }: LanguageCardProps) => {
  const intl = useIntl()
  return (
    <Box>
      <Box display="flex" alignItems="center" gridGap="8px">
        <FlagIcon
          width="25px"
          height="25px"
          src={getFlag(language.id)}
          alt={intl.formatMessage(
            { id: "Flag" },
            { country: language.country }
          )}
        />
        <Text
          fontSize="1.25rem"
          fontWeight={800}
          letterSpacing="-.03em"
          lineHeight="2rem"
          style={{ margin: 0 }}
        >
          <FormattedMessage id={language.name} />
        </Text>
      </Box>
      <Box>
        <Text fontWeight="300" fontSize="1.25rem" lineHeight="1.25">
          <FormattedMessage id={language.level} />
        </Text>
      </Box>
    </Box>
  )
}
