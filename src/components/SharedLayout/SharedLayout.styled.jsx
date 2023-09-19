import styled from '@emotion/styled';

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto 0 auto;
`;

export const Section = styled.section`
  padding: 60px 20px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 80px 40px;
  }
`;
