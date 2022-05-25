import styled from "styled-components"
import Text from "@components/core/Text"

const PageHeadingStyled = styled(Text)`
  margin-bottom: 32px !important;
`

type PageHeading = { text: string; as?: string }

export const PageHeading = ({ text, as = "h1" }: PageHeading) => {
  return (
    <PageHeadingStyled
      as={as}
      fontSize="5rem"
      fontWeight={800}
      letterSpacing="-.03em"
      lineHeight="76px"
      style={{ margin: 0 }}
    >
      {text}
    </PageHeadingStyled>
  )
}
