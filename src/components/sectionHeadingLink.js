import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import { color, fontSize } from 'styles/theme'

const H2 = styled.h2`
  border-top: 2px solid ${color.grey900};
  display: inline-block;
  font-size: ${fontSize.f5};
  color: ${color.grey900};
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 700;
  margin: 6px 0 0 0;
  padding: 16px 0 0 0;
  line-height: 1.1;
  &:link {
    text-decoration: none;
  }
  ${media.md`
      border-top: none;
      margin-bottom: 72px;
      padding-bottom: 12px;
      border-bottom: 2px solid ${color.grey900};
    `}
  ${media.sm`
      margin-bottom: 60px;
      padding-bottom: 8px;
    `}
`

const SectionHeadingLink = props => {
  return <H2><a href={props.link} class="title-link">{props.children}</a></H2>
}

export default SectionHeadingLink
