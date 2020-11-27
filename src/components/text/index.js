import styled from 'styled-components';
import {
  margin,
  padding,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  block,
} from '../../shared/mixins';

export default styled.span`
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${block};
  ${margin};
  ${padding};
  ${color};
`;
