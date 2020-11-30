import React from 'react';
import styled from 'styled-components';
import Title from '../../components/intro/title';
import Container from '../../components/atoms/container';
import LoginBox from '../../components/intro/loginBox';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 0 0 50%;
  width: 100%;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 0 0 50%;
  width: 100%;
`;

const IntroPage = () => {
  return (
    <Container
      background="linear-gradient(30deg, rgba(89, 206, 182, 1) 15%, rgba(101, 209, 142, 1) 79%)"
      height="100vh"
    >
      <Container
        maxWidth={220}
        width={220}
        centered
        flexColumnCentered
        height="100%"
      >
        <TitleContainer>
          <Title />
        </TitleContainer>
        <LoginContainer>
          <LoginBox />
        </LoginContainer>
      </Container>
    </Container>
  );
};

export default IntroPage;
