import { PropsWithChildren } from "react"
import styled from "styled-components"

type AnchorlinkProps = PropsWithChildren<{
  target?: string
  inverted?: boolean
  underlined?: boolean
  rel?: string
}>

const Link = styled.a<AnchorlinkProps>`
  color: ${(props) => props.theme.secondary};
  text-decoration: ${(props) => (props.underlined ? "" : "none !important;")};

  :focus {
    outline: none;
    outline: 3px dashed
      ${(props) =>
        props.inverted ? props.theme.primary : props.theme.secondary};
    outline-offset: 0.25rem;
  }

  :hover {
    text-decoration: underline !important;
  }
`

export const Anchorlink = ({ children, ...rest }: AnchorlinkProps) => (
  <Link {...rest}>{children}</Link>
)
