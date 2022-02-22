import React from "react";
import {
  HeaderContainer,
  HeaderWrap,
  HeaderLogo,
  HeaderIcon,
  HeaderButton,
  HeaderButtonLink,
  HeaderButtonIcon,
  HeaderLogoText,
} from "./HeaderElements";
import { HeaderIconImg, HeaderButtonIconImg } from "../Data";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderLogo>
            <HeaderLogoText>Spender</HeaderLogoText>
            <HeaderIcon
              src={HeaderIconImg.img.default}
              alt={HeaderIconImg.alt}
            />
          </HeaderLogo>
          <HeaderButton>
            <HeaderButtonLink
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeaderButtonIcon
                src={HeaderButtonIconImg.img.default}
                alt={HeaderButtonIconImg.alt}
              />
              Star
            </HeaderButtonLink>
          </HeaderButton>
        </HeaderWrap>
      </HeaderContainer>
    </>
  );
};

export default Header;
