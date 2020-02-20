import React from 'react'
//import Breakpoints from 'utils/breakpoints'

import GlobalWrapper from 'components/global-wrapper'
import Hero from 'components/hero'
import Section from 'components/section'
import About from 'components/about'
import Work from 'components/work'
import Other from 'components/other'
import Writing from 'components/writing'
//import Reading from 'components/reading'
import Footer from 'components/footer'
import CookieConsent from "react-cookie-consent";


//import DarkModeToggle from 'components/handleTheme'

export default class App extends React.Component {
  render() {
    return (
      <GlobalWrapper>
        {/* <Breakpoints /> */}
        <Hero />
        <Section id={'about'}>
          <About />
        </Section>
        <Section id={'projects'}>
          <Work />
        </Section>
        <Section >
          <Other />
        </Section>
        <Section>
          <Writing />
          {/* <Section>
            <Reading />
          </Section> */}
        </Section>
        <Footer />
        <CookieConsent
          location="bottom"
          buttonText="I Accept"
          cookieName="myCookie"
          style={{ background: "#3B3E48", fontSize: "16px", color: "#E8EEF2"}}
          buttonStyle={{ border: "0px", background: "#4EA6A6", fontSize: "14.4px" }}
          expires={150}
        >
          This website uses cookies to enhance the user experience. {" "}
          <span style={{ fontSize: "12px", color: "#E8EEF2" }}>
            <a style={{ fontSize: "12px", color: "#E8EEF2" }} href="https://ec.europa.eu/info/cookies_en" target="_blank"> More info</a>
          </span>
        </CookieConsent>
      </GlobalWrapper>
    )
  }
}

