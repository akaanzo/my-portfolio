import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
// import WhenInView from 'components/wheninView'

// const Reveal = styled.div`
//   opacity: ${props => (props.visible ? '1' : '0')};
//   transform: translateY(${props => (props.visible ? '0px' : '30px')});
//   transition: all 1s;
// `

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`

function About() {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>About</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big>
            Hi. My name's Matteo, a master's civil engineering student based in Trento (🇮🇹 Italy). I'm in love with all about technology and code. 
          </Big>
          <p>
           After my bachelor degree I've felt the need to create my own portfolio to show you my projects (and not). Almost my entire projects are uploaded on <a href="https://github.com/anzo559" target="_blank">my GitHub</a> (some of these are stacked on <a href="https://osf.io/368pj/" target="_blank">OSF - Open Science Framework</a>).
          </p>
        </Fragment>
      }
    />
  )
}

export default About
