import React from 'react'

import TwoColumns from 'components/twoColumns'
import Project from 'components/project'
import SectionHeadingLink from 'components/sectionHeadingLink'

import WritingLogo from 'img/writing'

const WritingLink = "https://writing.matteofranzoi.me"

function Writing() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeadingLink link={WritingLink}>Writing</SectionHeadingLink>}
      rightColumn={
        <Project
          logo={WritingLogo()}
          title="Writing"
          abstract="What I wrote (italian language only) on my old webpage."
          link={<p>Read more on <a href="https://writing.matteofranzoi.me">writing.matteofranzoi.me</a></p>}
        />
      }
    />
  )
}

export default Writing
