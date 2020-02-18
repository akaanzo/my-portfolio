import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

import StructuralSafetyLogo from 'img/structuralSafety'
import AqueductLogo from 'img/aqueduct'
import RainfallLogo from 'img/rainfall'
import SWMMLogo from 'img/swmm'


const AqueductLink = <a href="https://github.com/anzo559/aqueduct.git" target="_blank" rel="noopener noreferrer">Read More on GitHub</a>
const SWMMLink = <span> <a href="https://github.com/anzo559/stormwater-drainage-network.git" target="_blank" rel="noopener noreferrer">Read More on GitHub</a> <br/> <a href="https://osf.io/ygh7q/" target="_blank" rel="noopener noreferrer">Download easily all material from OSF</a> </span>
const RainfallLink = <a href="https://github.com/anzo559/rainfall-analysis.git" target="_blank" rel="noopener noreferrer"> Read More on GitHub </a>
const StructuralSafetyLink = <a href="https://github.com/anzo559/structural-safety" target="_blank" rel="noopener noreferrer">Read More on GitHub</a>


function Work() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Work</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
          logo={StructuralSafetyLogo()}
          title="Structural Safety"
          abstract="Structural safety project about calculating continuous beam and two different columns of a commercial building. Whole project has been developed following italian law about construction (NTC 2018, similar to EuroCodes)."
          link={StructuralSafetyLink}
          />
          <Project
            logo={AqueductLogo()}
            title="Aqueduct"
            abstract="An aqueduct system project developed using QGIS, QEpanet and Epanet softwares."
            link={AqueductLink}
          />
          <Project
          logo={RainfallLogo()}
          title="Rainfall Analysis"
          abstract="Jupyter Notebooks to study rainfall data of meteorogical station based in Centa San Nicolò (IT) and develop the so called LSPP. Results have been used to dimensioning the stormwater drainage network."
          link={RainfallLink}
          />
          <Project
            logo={SWMMLogo()}
            title="Stormwater Drainage Network"
            abstract="Calculate and design of a stormwater drainage network. Have been used Jupyter Notebook for calculus and SWMM for modeling."
            link={SWMMLink}
          />
        </Fragment>
      }
    />
  )
}

export default Work
