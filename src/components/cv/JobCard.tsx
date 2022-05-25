import { Anchorlink } from "@components/core/Anchorlink"
import Box from "@components/core/Box"
import Text from "@components/core/Text"
import { JobItemType } from "@data/cv"
import { getFormattedDateMMMYYYY } from "@lib/date"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

type JobCardProps = {
  job: JobItemType
}

interface PostImageProps {
  image: string
}

const PostImage = styled.div<PostImageProps>`
  border-radius: 8px;
  width: 100px;
  height: 100px;
  object-fit: cover;
  background-image: url(/images/cv/jobs/${(p) => p.image});
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const JobCard = ({ job }: JobCardProps) => {
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
        <PostImage aria-hidden={true} image={job.companyLogo} />
      </Box>
      <Box display="flex" flexDirection="column" gridGap="8px" width="100%">
        <Text
          fontSize="2rem"
          fontWeight={800}
          letterSpacing="-.03em"
          lineHeight="2rem"
          style={{ margin: 0 }}
        >
          {job.title}
        </Text>
        <Box display="flex" justifyContent="space-between">
          <Link href={job.companyUrl} passHref>
            <Anchorlink target="_blank" underlined>
              <Text
                fontSize="1.5rem"
                fontWeight={700}
                letterSpacing="-.03em"
                lineHeight="1.5rem"
                style={{ margin: 0 }}
              >
                {job.company}
              </Text>
            </Anchorlink>
          </Link>
          <Text
            fontSize="1.25rem"
            fontWeight={700}
            letterSpacing="-.03em"
            lineHeight="1.5rem"
            style={{ margin: 0 }}
          >
            {getFormattedDateMMMYYYY(job.startDate, dateLocale)} -{" "}
            {getFormattedDateMMMYYYY(job.endDate, dateLocale)}
          </Text>
        </Box>
        <Text
          as="p"
          fontWeight="300"
          fontSize="1.25rem"
          lineHeight="1.25"
          style={{ margin: 0 }}
        >
          {job.description}
        </Text>
      </Box>
    </Box>
  )
}
