import { FooterStyled } from './Footer.styled';
import { Socials } from 'components/Socials/Socials';
import { FooterContainer, Copyright } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Socials style={{ gap: 45 }} />
        <Copyright>©2023 “RENT CAR”. All rights reserved.</Copyright>
      </FooterContainer>
    </FooterStyled>
  );
};
