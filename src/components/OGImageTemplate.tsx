import Box from "@components/core/Box"
import Text from "@components/core/Text"
import GitHubLogo from "@images/github_dark.svg"
import LogoDark from "@images/logo.svg"
import TwitterLogo from "@images/twitter_dark.svg"
import { getFormattedDate } from "@lib/date"
import styled from "styled-components"

const host =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "https://www.adrianbolonio.com/"

export type QueryParams = {
  title?: string
  publishedAt?: string
  slug?: string
  locale?: string
}

const LogoImage = styled.img`
  margin: 0;
  width: 100px;
  @media screen and (max-width: 700px) {
    display: none;
  }
`

const BGImage = styled(Box)`
  object-fit: cover;
  background-image: url(${host}/images/pattern.png);
  background-size: cover;
  opacity: 0.1;
`

const ColoredText = styled(Text)`
  color: #24292f;
`

const IconImage = styled.img`
  margin: 0;
  width: 50px;
  height: 50px;
`

export const OGImageTemplate = ({
  title,
  publishedAt,
  slug,
  locale,
}: QueryParams) => {
  const randomBg = Math.floor(Math.random() * 6)
  const FullBGImage = styled(Box)`
    object-fit: cover;
    background-image: url(${host}/images/og/bg${randomBg}.jpg);
    background-size: cover;
  `

  return (
    <FullBGImage
      display="flex"
      flexDirection="column"
      paddingX="50px"
      paddingTop="50px"
      background="#24292f"
      color="#24292f"
      width="100vw"
      height="100vh"
    >
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-start"
        flexDirection="column"
        width="100%"
        background="#e5e7eb"
        paddingY="0.75rem"
        paddingX="0.75rem"
        borderTopLeftRadius="0.5rem"
        borderTopRightRadius="0.5rem"
        gridGap="16px"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          gridGap="4px"
        >
          <Box
            background="#f87171"
            borderRadius="50%"
            width="0.75rem"
            height="0.75rem"
          />
          <Box
            background="#facc15"
            borderRadius="50%"
            width="0.75rem"
            height="0.75rem"
          />
          <Box
            background="#4ade80"
            borderRadius="50%"
            width="0.75rem"
            height="0.75rem"
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          width="100%"
          background="#e5e7eb"
          gridGap="4px"
        >
          <Box
            background="#f3f4f6"
            borderRadius="12px"
            paddingY="0.25rem"
            paddingX="0.75rem"
            width="100%"
          >
            {`www.adrianbolonio.com/${
              locale === "es" ? "es/" : ""
            }blog/${slug}`}
          </Box>
        </Box>
      </Box>
      <Box
        background="#f3f4f6"
        height="100%"
        padding="30px"
        position="relative"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        marginTop="-1px"
      >
        <BGImage
          width="100%"
          height="100%"
          position="absolute"
          top="0"
          right="0"
          zIndex={10}
        />
        <Box zIndex={99} position="relative">
          <Box marginBottom="24px">
            <LogoImage
              src={`${host}/${LogoDark.src}`}
              alt="Adrian Bolonio Logo"
            />
          </Box>
          <ColoredText
            as="h1"
            fontSize="5rem"
            fontWeight={800}
            letterSpacing="-.03em"
            lineHeight="4.5rem"
            style={{ margin: 0, marginBottom: "12px" }}
          >
            {title}
          </ColoredText>
          {publishedAt && (
            <ColoredText
              fontSize="2.5rem"
              fontWeight={800}
              letterSpacing="-.03em"
              lineHeight="1.5rem"
              style={{ margin: 0 }}
            >
              {getFormattedDate(publishedAt, "en")}
            </ColoredText>
          )}
        </Box>
        <Box
          zIndex={99}
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gridGap="8px"
        >
          <ColoredText
            fontSize="3rem"
            fontWeight={800}
            letterSpacing="-.03em"
            style={{ margin: 0 }}
          >
            adrianbolonio.com
          </ColoredText>
          <Box
            zIndex={99}
            position="relative"
            display="flex"
            alignItems="flex-end"
            justifyContent="flex-end"
            gridGap="8px"
          >
            <IconImage src={`${host}/${GitHubLogo.src}`} alt="GitHub Logo" />
            <IconImage src={`${host}/${TwitterLogo.src}`} alt="Twitter Logo" />
            <ColoredText
              fontSize="3rem"
              fontWeight={800}
              letterSpacing="-.03em"
              style={{ margin: 0 }}
            >
              @bolonio
            </ColoredText>
          </Box>
        </Box>
      </Box>
    </FullBGImage>
  )
}
