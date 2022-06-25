import Box from "@components/core/Box"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { SkipToContent } from "@components/SkipToContent"
import { PropsWithChildren } from "react"
import styled from "styled-components"

type LayoutProps = PropsWithChildren<{
  alternate?: string
}>

// 100vh - header - footer
const Main = styled.main`
  flex: 1;
`

export const LayoutContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;

  @media screen and (max-width: 1180px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`

export const PageLayoutContent = styled(LayoutContent)`
  // background-color: tomato;
  padding: 32px 16px;
`

export const Layout = ({ children, alternate }: LayoutProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      height="100vh"
    >
      <SkipToContent />
      <Header alternate={alternate} />
      <Main id="content">{children}</Main>
      <Footer />
    </Box>
  )
}
