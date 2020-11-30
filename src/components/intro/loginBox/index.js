import React from 'react';
import Text from '../../atoms/text';
import Container from '../../atoms/container';
import COLORS from '../../../shared/colors';
import {
  SocialContainer,
  SocialButton,
  LoginButton,
  LoginContainer,
} from './style';

const LoginBox = () => {
  return (
    <Container flexColumnCentered margin="0 0 50px 0">
      <Text color={COLORS['white']} margin="0 0 18px 0">
        트리플 시작하기
      </Text>
      <SocialContainer flexRowCentered width="85%" margin="0 0 32px 0">
        <SocialButton backgroundColor={COLORS['yellow']} padding="16px">
          K
        </SocialButton>
        <SocialButton backgroundColor={COLORS['green']} padding="16px">
          N
        </SocialButton>
        <SocialButton backgroundColor={COLORS['blue']} padding="16px">
          F
        </SocialButton>
      </SocialContainer>
      <LoginContainer width="100%" margin="0 0 28px 0">
        <LoginButton flexRowCentered borderRadius={3} height={36} email>
          <Container flexRowCentered>
            <Text>이메일로 로그인</Text>
          </Container>
        </LoginButton>
        <LoginButton flexRowCentered borderRadius={3} height={36}>
          <Container>
            <Text color={COLORS['black']}>Apple로 로그인</Text>
          </Container>
        </LoginButton>
      </LoginContainer>
      <Container>
        <Text color={COLORS['white']}>
          <button>회원가입</button>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="mailto:junjang.see@gmail.com">문의하기</a>
        </Text>
      </Container>
    </Container>
  );
};

export default LoginBox;
