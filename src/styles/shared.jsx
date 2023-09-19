import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from './theme';

export const Transition = (...props) => {
  return css`
    transition-property: ${props.join(',')};
    transition-duration: ${theme.transition.duration};
    transition-timing-function: ${theme.transition.func};
  `;
};

export const DisabledStyles = css`
  &[disabled],
  &[disabled='true'] {
    pointer-events: none;
    user-select: none;
    opacity: 0.7;
  }
`;

export const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width || '100%'};
  padding: 12px 24px;
  border-radius: 12px;

  ${DisabledStyles};
`;

export const ButtonPrimary = styled(ButtonBase)`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  color: ${theme.colors.textButton};
  background-color: ${theme.colors.bgButton};

  ${Transition('background-color')};

  &:hover,
  &:focus-visible {
    background-color: ${theme.colors.bgButtonHover};
  }
`;

export const ButtonSecondary = styled(ButtonBase)`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;

  color: ${theme.colors.bgButton};
  background-color: transparent;

  ${Transition('color', 'background-color')};

  &:hover,
  &:focus-visible {
    color: ${theme.colors.bgButtonHover};
    background-color: #ececec;
  }
`;

export const PageTitle = styled.h2`
  text-align: center;
  text-transform: capitalize;
  font-size: 42px;
  margin-bottom: 60px;
`;

export const NoItemsFound = styled.p`
  font-size: 16px;
  text-align: center;
`;
