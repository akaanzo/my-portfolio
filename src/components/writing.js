import React from 'react'

import TwoColumns from 'components/twoColumns'
import Project from 'components/project'
import SectionHeading from 'components/sectionHeading'

import WritingLogo from 'img/writing'

const WritingLink = (
  <p>Read More on <a href="https://writing.matteofranzoi.me">https://writing.matteofranzoi.me</a></p>
)

function Writing() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Writing</SectionHeading>}
      rightColumn={
        <Project
          logo={WritingLogo()}
          title="Writing"
          abstract="What I wrote (italian lang) past year on my old webpage."
          link={WritingLink}
        />
      }
    />
  )
}

export default Writing
