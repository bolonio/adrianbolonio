import styled from "styled-components"
import { typography, TypographyProps } from "styled-system"

export type HeadingProps = TypographyProps

const HeadingBase = ({
  level = 1,
  as: Component = `h${level}`,
  ...props
}: {
  [x: string]: any
  level: number
  as?: string | undefined
}) => <Component {...props} />

export const PageHeading = styled(HeadingBase)(
  {
    margin: 0,
    fontSize: "5rem",
    fontWeight: 800,
    letterSpacing: "-.03em",
    lineHeight: "76px",
    marginBottom: "32px",
  },
  typography
)
