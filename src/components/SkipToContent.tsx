import React from "react"
import styled from "styled-components"

const SkipContainer = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  padding: 30px 0;
  color: inherit;
  text-decoration: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
  font-weight: 700;
  font-size: 1.5rem;
  outline: none;
  z-index: 999;
  :not(:focus) {
    top: -200px;
  }
`
export const SkipToContent = () => (
  <SkipContainer href="#content">Skip to content</SkipContainer>
)
