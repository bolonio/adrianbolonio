import { Anchorlink } from "@components/core/Anchorlink"
import Box from "@components/core/Box"
import Text from "@components/core/Text"
import { EducationItemType } from "@data/cv"
import { getFormattedDateMMMYYYY } from "@lib/date"
import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

type EducationCardProps = {
  education: EducationItemType
}

interface PostImageProps {
  image: string
}

const PostImage = styled.div<PostImageProps>`
  border-radius: 8px;
  width: 75px;
  height: 75px;
  object-fit: cover;
  background-image: url(/images/cv/school/${(p) => p.image});
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const EducationCard = ({ education }: EducationCardProps) => {
  const { locale } = useRouter()
  const dateLocale = locale ? locale : "en"
  return (
    <Box
      display="flex"
      flexDirection={["column", "column", "row"]}
      alignItems="flex-start"
      marginBottom="24px"
    >
      <Box
        display="flex"
        marginRight={[0, 3, 3]}
        marginBottom={[3, 0, 0]}
        width={["100%", "auto", "auto"]}
      >
        <PostImage aria-hidden={true} image={education.schoolLogo} />
      </Box>
      <Box display="flex" flexDirection="column" gridGap="8px" width="100%">
        <Text
          fontSize="1.75rem"
          fontWeight={800}
          letterSpacing="-.03em"
          lineHeight="2rem"
          style={{ margin: 0 }}
        >
          {education.degree}
        </Text>
        <Box display="flex" justifyContent="space-between">
          <Anchorlink href={education.schoolUrl} target="_blank" underlined>
            <Text
              fontSize="1.5rem"
              fontWeight={700}
              letterSpacing="-.03em"
              lineHeight="1.5rem"
              style={{ margin: 0 }}
            >
              {education.school} ({education.location.city},{" "}
              {education.location.country.name})
            </Text>
          </Anchorlink>
          <Text
            fontSize="1.25rem"
            fontWeight={700}
            letterSpacing="-.03em"
            lineHeight="1.5rem"
            style={{ margin: 0 }}
          >
            {getFormattedDateMMMYYYY(education.startDate, dateLocale)} -{" "}
            {getFormattedDateMMMYYYY(education.endDate, dateLocale)}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
