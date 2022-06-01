import Link, { LinkProps as NextLinkProps } from "next/link"
import { PropsWithChildren } from "react"
import styled from "styled-components"

type AnchorlinkProps = PropsWithChildren<{
  target?: string
  inverted?: boolean
  underlined?: boolean
  rel?: string
}>

const AnchorlinkStyled = styled.a<AnchorlinkProps>`
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

export const Anchorlink = ({
  children,
  href,
  target,
  inverted,
  underlined,
}: AnchorlinkProps & NextLinkProps) => (
  <Link href={href} passHref>
    <AnchorlinkStyled
      target={target}
      inverted={inverted}
      underlined={underlined}
    >
      {children}
    </AnchorlinkStyled>
  </Link>
)
