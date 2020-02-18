import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

import OldWebPageLogo from 'img/oldwebpage'
import PanizaAcademyLogo from 'img/panizaacademy'
import RopeLogo from 'img/rope.js'
import UrbanLogo from 'img/urban'

const OldWebPageLink = <a href="https://github.com/anzo559/matteofranzoime.git" target="_blank" rel="noopener noreferrer">Read More on GitHub</a>
const PanizaAcademyLink = <span> <a href="https://github.com/anzo559/panizaacademy.git" target="_blank" rel="noopener noreferrer">Read More on GitHub</a> <br /> <a href="https://paniza.academy" target="_blank" rel="noopener noreferrer">Check the website</a> </span>
const RopeLink =  <a href="https://github.com/anzo559/my-bachelor-thesis.git" target="_blank" rel="noopener noreferrer">Read More on GitHub</a> 
const UrbanLink = <a href="https://github.com/anzo559/urban-planning.git" target="_blank" rel="noopener noreferrer"> Read More on GitHub </a>


function Other() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Other</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
          logo={OldWebPageLogo()}
          title="My Previous Web Page"
          abstract="Lorem Ipsum"
          link={OldWebPageLink}
          />
          <Project
            logo={PanizaAcademyLogo()}
            title="Paniza Academy Website"
            abstract="Lorem Ipsum"
            link={PanizaAcademyLink}
          />
          <Project
          logo={RopeLogo()}
          title="My Bachelor Thesis: theory of the wire rope"
          abstract="Lorem Ipsum"
          link={RopeLink}
          />
          <Project
            logo={UrbanLogo()}
            title="Urban Planning for Engineers Notes "
            abstract="Lorem Ipsum"
            link={UrbanLink}
          />
        </Fragment>
      }
    />
  )
  }

export default Other
