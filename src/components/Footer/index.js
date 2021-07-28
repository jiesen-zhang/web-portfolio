import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink } from './FooterElements'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  };

  return (
    <FooterContainer>
      <FooterWrap>
        {/* <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Me </FooterLinkTitle>
                <FooterLink to="/web-portfolio/placeholder1">Place Holder 1</FooterLink>
                <FooterLink to="/web-portfolio/placeholder2">Place Holder 2</FooterLink>
                <FooterLink to="/web-portfolio/placeholder3">Place Holder 3</FooterLink>
                <FooterLink to="/web-portfolio/placeholder4">Place Holder 4</FooterLink>
                <FooterLink to="/web-portfolio/placeholder5">Place Holder 5</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Me </FooterLinkTitle>
                <FooterLink to="/web-portfolio/placeholder1">Place Holder 1</FooterLink>
                <FooterLink to="/web-portfolio/placeholder2">Place Holder 2</FooterLink>
                <FooterLink to="/web-portfolio/placeholder3">Place Holder 3</FooterLink>
                <FooterLink to="/web-portfolio/placeholder4">Place Holder 4</FooterLink>
                <FooterLink to="/web-portfolio/placeholder5">Place Holder 5</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Me </FooterLinkTitle>
                <FooterLink to="/web-portfolio/placeholder1">Place Holder 1</FooterLink>
                <FooterLink to="/web-portfolio/placeholder2">Place Holder 2</FooterLink>
                <FooterLink to="/web-portfolio/placeholder3">Place Holder 3</FooterLink>
                <FooterLink to="/web-portfolio/placeholder4">Place Holder 4</FooterLink>
                <FooterLink to="/web-portfolio/placeholder5">Place Holder 5</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Me </FooterLinkTitle>
                <FooterLink to="/web-portfolio/placeholder1">Place Holder 1</FooterLink>
                <FooterLink to="/web-portfolio/placeholder2">Place Holder 2</FooterLink>
                <FooterLink to="/web-portfolio/placeholder3">Place Holder 3</FooterLink>
                <FooterLink to="/web-portfolio/placeholder4">Place Holder 4</FooterLink>
                <FooterLink to="/web-portfolio/placeholder5">Place Holder 5</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer> */}
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/web-portfolio/' onClick={toggleHome}>
              Jiesen Zhang
            </SocialLogo>
            <SocialIcons>
              {/* <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink> */}
              <SocialIconLink href="//www.instagram.com/jiesenzhang_/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="//https://www.youtube.com/channel/UCo2VUfJQsnxp_tYtVJ3AiVw" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              {/* <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink> */}
              <SocialIconLink href="//www.linkedin.com/in/jiesenzhang" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="//https://github.com/jiesen-zhang" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>

          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
