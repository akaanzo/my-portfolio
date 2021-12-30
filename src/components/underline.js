import React from 'react'

import Link from "gatsby-link"
import TwoColumns from 'components/twoColumns'
import Project from 'components/project'
import SectionHeadingLink from 'components/sectionHeadingLink'

import WritingLogo from 'img/writing'

const UnderlineLink = "https://underline.matteofranzoi.me"
const UnderlinePageLink = <Link to="/underline">Read more</Link>

function Underline() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeadingLink link={UnderlineLink}>Underline</SectionHeadingLink>}
      rightColumn={
        <Project
          logo={WritingLogo()}
          title="Underline"
          abstract="Underlines on books I've read during past years."
          link={UnderlinePageLink}
        />
      }
    />
  )
}

export default Underline
