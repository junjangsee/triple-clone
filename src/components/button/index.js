import styled from 'styled-components';
import {
  margin,
  padding,
  color,
  fontSize,
  fontWeight,
  borderRadius,
  backgroundColor,
} from '../../shared/mixins';
import COLORS from '../../shared/colors';

export default styled.button`
  color: ${COLORS.white};

  ${margin};
  ${padding};
  ${color};
  ${fontSize};
  ${fontWeight};
  ${backgroundColor};
  ${borderRadius};
`;
