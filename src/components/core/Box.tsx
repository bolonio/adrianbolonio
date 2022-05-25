import styled from "styled-components"
import {
  layout,
  space,
  SpaceProps,
  LayoutProps,
  flexbox,
  FlexboxProps,
  border,
  BorderProps,
  position,
  PositionProps,
  background,
  BackgroundProps,
  grid,
  GridProps,
} from "styled-system"

type BoxProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  BackgroundProps &
  GridProps

const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
  ${background}
  ${grid}
`

export default Box
