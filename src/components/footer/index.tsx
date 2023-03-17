import { ContainerSocialMedias, FooterContent, FooterWrapper } from "./styles";

import TwitterIcon from '../../assets/twitter.png'
import LinkedinIcon from "../../assets/linkedin.png";
import InstagramIcon from "../../assets/instagram.png";

export function Footer(){
    return (
      <FooterWrapper>
        <FooterContent>
          <p> © 2023 Legion Web3</p>

          <ContainerSocialMedias>
            <img
              src={TwitterIcon}
              alt="TwitterIcon"
              style={{ width: "50px" }}
            />
            <img
              src={LinkedinIcon}
              alt="LinkedinIcon"
              style={{ width: "50px" }}
            />
            <img
              src={InstagramIcon}
              alt="InstagramIcon"
              style={{ width: "50px" }}
            />
          </ContainerSocialMedias>
        </FooterContent>
      </FooterWrapper>
    );    
}