import { Anchorlink } from "@components/core/Anchorlink"
import Box from "@components/core/Box"
import Text from "@components/core/Text"
import { TalkType } from "@data/talks"
import { getFormattedDateMMMYYYY } from "@lib/date"
import { useRouter } from "next/router"
import { FormattedMessage } from "react-intl"
import styled from "styled-components"

type TalkCardProps = {
  talk: TalkType
}

const TalkTitle = styled.h2`
  margin: 0;
`

const TalkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 16px;
  @media screen and (max-width: 639px) {
    flex-direction: column;
  }
`

interface TalkImageProps {
  image: string
}

const TalkImage = styled.div<TalkImageProps>`
  border-radius: 8px;
  width: 250px;
  height: 150px;
  object-fit: cover;
  background-image: url(/images/talks/${(p) => p.image});
  background-size: cover;
  @media screen and (max-width: 1000px) {
    width: 300px;
  }
  @media screen and (max-width: 639px) {
    width: 100%;
    height: 200px;
  }
`

export const TalkCard = ({ talk }: TalkCardProps) => {
  const { locale } = useRouter()
  return (
    <TalkContainer>
      <Box
        display="flex"
        marginRight={[0, 3, 3]}
        marginBottom={[3, 0, 0]}
        width={["100%", "auto", "auto"]}
      >
        <TalkImage
          aria-hidden={true}
          image={talk.image ? talk.image : "placeholder.jpg"}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gridGap="8px"
        justifyContent="space-between"
      >
        <TalkTitle>
          <Anchorlink href={talk.link} target="_blank" underlined>
            <Text
              fontSize="2rem"
              fontWeight={800}
              letterSpacing="-.03em"
              lineHeight="2rem"
              style={{ margin: 0 }}
            >
              {talk.conference}
            </Text>
          </Anchorlink>
        </TalkTitle>
        <Text
          fontSize="1.25rem"
          fontWeight={600}
          letterSpacing="-.03em"
          lineHeight="1.5rem"
          style={{ margin: 0 }}
        >
          {getFormattedDateMMMYYYY(talk.date, locale)}
        </Text>
        <Text fontWeight="300" fontSize="1.25rem" lineHeight="1.25">
          {talk.location}
        </Text>
        {talk.video && (
          <Anchorlink href={talk.video} target="_blank" underlined>
            <Text fontWeight="300" fontSize="1.25rem" lineHeight="1.25">
              <FormattedMessage id="watch_video" />
            </Text>
          </Anchorlink>
        )}
      </Box>
    </TalkContainer>
  )
}
