import styled, { css } from 'styled-components';
import Button from '../../../components/atoms/button';
import Container from '../../../components/atoms/container';
import COLORS from '../../../shared/colors';

export const SocialContainer = styled(Container)`
  justify-content: space-around;
`;

export const SocialButton = styled(Button)`
  border-radius: 100%;
`;

export const LoginContainer = styled(Container)`
  & > button:first-child {
    margin: 0 0 6px 0;
  }

  & > button:last-child {
    margin: 0;
  }
`;

export const LoginButton = styled(Button)`
  width: 100%;

  ${({ email }) =>
    email
      ? css`
          border: 1px solid #ffffff;
          background-color: ${COLORS['triple']};
        `
      : css`
          border: none;
          background-color: ${COLORS['white']};
        `};
`;
