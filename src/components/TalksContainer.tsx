import Box from "@components/core/Box"
import Text from "@components/core/Text"
import { TalkCard } from "@components/TalkCard"
import { TalkType } from "@data/talks"

type TalksContainerProps = {
  talks: TalkType[]
  year?: string
}

export const TalksContainer = ({ talks, year }: TalksContainerProps) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gridGap="32px"
      flexDirection="column"
      marginBottom="32px"
    >
      {year && (
        <Text
          as="h2"
          fontSize="4rem"
          fontWeight={800}
          letterSpacing="-.03em"
          lineHeight="76px"
          style={{ margin: 0 }}
        >
          {year}
        </Text>
      )}
      {talks.map((talk, i: number) => (
        <TalkCard key={i} talk={talk} />
      ))}
    </Box>
  )
}
