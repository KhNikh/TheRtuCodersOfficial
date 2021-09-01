import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CopyrightIcon from '@material-ui/icons/Copyright';

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ fontFamily : "'Baloo Da 2', cursive",
                   color: "wheat",
                   textAlign: "center", 
        marginTop: "-50px"
      }}>
        <CopyrightIcon />
        The RTU Coders
      </h1>
      <Container>
        <Row>
          <Column>
          <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  <FacebookIcon  fontSize = "large"/>
                </span>
              </i>
          </FooterLink>
          </Column>
          <Column>
          <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  <InstagramIcon color = "secondary" fontSize = "large" />
                </span>
              </i>
            </FooterLink>
          </Column>
          <Column>
          <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  <TwitterIcon style={{ color: "blue" }} fontSize = "large" />
                </span>
              </i>
            </FooterLink>
          </Column>
          <Column>
          <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  <YouTubeIcon style={{ color: "red" }} fontSize = "large" />
                </span>
              </i>
            </FooterLink> 
          </Column>
        </Row>
      </Container>
    </Box> 
  );
};
export default Footer;