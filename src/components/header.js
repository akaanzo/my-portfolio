import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import { color, fontSize } from 'styles/theme'

import Icon from 'components/icons'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex: 0 0 auto;
  ${media.sm`
    display: ${props => (props.article ? 'flex' : 'block')};
  `};
  z-index: 10;
  height: ${props => (props.article ? '74px' : '')};
  ${media.xs`
    display: block;
    height: 112px;
  `}
`

const LogoWrapper = styled.div`
  padding: 24px 0 24px 24px;
  ${media.sm`
    padding: ${props => (props.article ? '24px 0 24px 24px' : '24px 0 0 0')};
  `};
  ${media.xs`
    padding: 24px 0 0 0;
  `}
`

const NameLink = styled.a`
  text-decoration: none;
`

const Name = styled.h1`
  white-space: nowrap;
  font-size: ${fontSize.f6};
  text-align: left;
  margin: 0;
  line-height: 1.2;
  ${media.sm`
    text-align: center;
    font-size: ${fontSize.f7};
  `};
`

const NameArticle = styled.div`
  white-space: nowrap;
  font-size: ${fontSize.f5};
  font-weight: 700;
  text-align: left;
  margin: 0;
  line-height: 1.2;
  color: ${color.grey900};
  ${media.xs`
    text-align: center;
  `};
`

const Role = styled.div`
  color: ${color.grey700};
  text-align: left;
  line-height: 1.4;
  font-size: ${fontSize.f4};
  ${media.sm`
    text-align: center;
    font-size: ${fontSize.f6};
  `};
`

const SocialLinks = styled.div`
  display: grid;
  grid-column-gap: 4px;
  grid-template-columns: auto auto auto auto auto;
  padding: 15px 24px 0 24px;
  ${media.sm`
    padding: ${props => (props.article ? '15px 12px 0 8px' : '4px 0 0 0')};
    grid-column-gap: 0;
  `}
  ${media.xs`
    padding: 0;
  `}
  justify-content: center;
`

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 20px;
  color: ${color.grey900};
  border: 1px solid white;
  &:hover {
    border: 1px solid ${color.grey150};
    background: ${color.grey150};
    color: ${color.grey900};
  }
  &:active {
    color: ${color.grey900};
  }
  &:visited {
    color: ${color.grey900};
  }
`

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  color: inherit;
  background: inherit;
`

export const InlineSvg = styled.svg`
  height: 24px;
  width: 24px;
  color: inherit;
  fill: currentColor;
`

const Tooltip = styled.div`
  padding: 2px 24px 0 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: ${props => (props.visible ? '1' : '0')};
  transition: opacity 300ms;
  ${media.sm`
    justify-content: center;
    padding-top: 6px;
  `}
`

const TooltipIcon = styled.div`
  transform: rotate(270deg);
  margin-left: 8px;
`

const TooltipText = styled.div``

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tooltipIsVisible: false,
      tooltipText: '',
    }
  }

  showTooltip = tooltipText => {
    this.setState({
      tooltipIsVisible: true,
      tooltipText: tooltipText,
    })
  }

  hideTooltip = () => {
    this.setState({
      tooltipIsVisible: false,
    })
  }
  render() {
    return (
      <Div article={this.props.article}>
        <LogoWrapper article={this.props.article}>
          {this.props.article && (
            <NameLink href="/">
              <NameArticle article={this.props.article}>
                Gabriel Adorf
              </NameArticle>
            </NameLink>
          )}
          {!this.props.article && (
            <Name article={this.props.article}>Matteo Franzoi</Name>
          )}
          {!this.props.article && <Role>Civil Engineering Student</Role>}
        </LogoWrapper>
        <div>
          <SocialLinks article={this.props.article}>
            <SocialLink
              href={`mailto:${process.env.GATSBY_EMAIL}`}
              onMouseOver={() => this.showTooltip('Mail')}
              onMouseLeave={this.hideTooltip}
            >
              <SvgWrapper>
                <InlineSvg>
                  <path d="m22.3592881 5.82427054v.59619016c0 .24378184-.1417446.46531584-.3630886.56747461l-8.9485541 4.13010189c-.6647377.306802-1.4305531.306802-2.0952908 0l-8.94855408-4.13010189c-.22134402-.10215877-.36308864-.32369277-.36308864-.56747461v-.59619016c0-.55012277.44596262-.99608539.9960854-.99608539h18.72640542c.5501228 0 .9960854.44596262.9960854.99608539zm-1.25 13.34754436h-18.21857622c-.69035594 0-1.25-.5596441-1.25-1.25v-8.52329148c0-.20710678.16789322-.375.375-.375.05424403 0 .10784237.01176807.15709707.03449228l8.78345405 4.0523453c.6647826.3067049 1.4305981.306593 2.095291-.0003062l8.7755375-4.05180448c.1880319-.08681729.4108411-.00476666.4976584.18326519.0227541.04928162.0345382.1029156.0345382.1571966v8.52310279c0 .6903559-.559644 1.25-1.25 1.25z" />
                </InlineSvg>
              </SvgWrapper>
            </SocialLink>
            <SocialLink
              href="https://github.com/anzo559"
              target="blank"
              onMouseOver={() => this.showTooltip('GitHub')}
              onMouseLeave={this.hideTooltip}
            >
              <SvgWrapper>
                <InlineSvg>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </InlineSvg>
              </SvgWrapper>
            </SocialLink>
            <SocialLink
              href="https://instagram.com/akaanzo"
              target="blank"
              onMouseOver={() => this.showTooltip('Instagram')}
              onMouseLeave={this.hideTooltip}
            >
              <SvgWrapper>
                <InlineSvg>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </InlineSvg>
              </SvgWrapper>
            </SocialLink>
            <SocialLink
              href="https://facebook.com/matteo.franzoi"
              target="blank"
              onMouseOver={() => this.showTooltip('Facebook')}
              onMouseLeave={this.hideTooltip}
            >
              <SvgWrapper>
                <InlineSvg>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/></svg>
                </InlineSvg>
              </SvgWrapper>
            </SocialLink>
            <SocialLink
              href="https://twitter.com/matteo_franzoi"
              target="blank"
              onMouseOver={() => this.showTooltip('Twitter')}
              onMouseLeave={this.hideTooltip}
            >
              <SvgWrapper>
                <InlineSvg>
                  <path d="m21.0247938 8.63275418c.2692962 5.94511812-4.1645259 12.57304192-12.0138477 12.57304192-2.38687665 0-4.60746657-.7004644-6.47782429-1.8997889 2.24266338.2648815 4.48091208-.3590616 6.25708971-1.7496895-1.84828426-.033846-3.40961356-1.2567156-3.94967751-2.93577.66367531.1265545 1.31704969.0897654 1.91008994-.0721066-2.03222975-.4090948-3.43610171-2.2397203-3.39048323-4.1983718.57096679.3163862 1.22139804.5062179 1.91450464.5282914-1.88213023-1.25818714-2.41483637-3.74365857-1.30822031-5.64344757 2.08373448 2.55757806 5.19903526 4.2395756 8.71165825 4.41616327-.6165852-2.64292877 1.3891564-5.19020588 4.1189074-5.19020588 1.2140402 0 2.3132985.5135758 3.0843979 1.33470846.9624028-.18836018 1.8688862-.54153552 2.6841326-1.02568004-.3163862.98741938-.9859478 1.81443829-1.8585852 2.33831504.8549786-.10300948 1.670225-.32963032 2.4266089-.66661845-.5650806.85056393-1.2802606 1.59517527-2.1087511 2.19115865z" />
                </InlineSvg>
              </SvgWrapper>
            </SocialLink>
          </SocialLinks>
          {!this.props.article && (
            <Tooltip
              visible={this.state.tooltipIsVisible}
              article={this.props.article}
            >
              <TooltipText>{this.state.tooltipText}</TooltipText>
              <TooltipIcon>
                <Icon glyph="arrow" size={24} />
              </TooltipIcon>
            </Tooltip>
          )}
        </div>
      </Div>
    )
  }
}

export default Header
