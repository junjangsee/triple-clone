import React from 'react';
import Text from '../../atoms/text';
import Container from '../../atoms/container';
import { TripleTitle, IntroButton } from './style';

const Title = () => {
  return (
    <>
      <Container flexColumnCentered margin="0 0 100px 0">
        <TripleTitle as="h1" margin="0 0 8px 0" fontSize={28} fontWeight={700}>
          TRIPLE
        </TripleTitle>
        <IntroButton padding="6px 10px 6px 10px" borderRadius={16}>
          <Text fontSize={11} block>
            트리플을 소개합니다. &#62;
          </Text>
        </IntroButton>
      </Container>
    </>
  );
};

export default Title;
