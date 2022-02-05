/** @jsx jsx */
import { jsx, SerializedStyles, css } from '@emotion/react';
import theme from '../../styles/theme';

interface Props {
  color?: string;
  extraCss?: SerializedStyles | SerializedStyles[];
}

export function PlayOutlineIcon({ color = theme.colors.primary, extraCss }: Props) {
  return (
    <svg css={[styles.icon].concat(extraCss!)} viewBox="0 0 16 16">
      <path fill={color} d="M1.6 14.2633L14.1296 7.99991L1.6 1.7365V14.2633ZM14.5208 7.80437L14.5204 7.80455L14.5208 7.80437ZM1.28429 14.4211C1.28439 14.4211 1.28448 14.421 1.28457 14.421L1.28429 14.4211ZM1.99971 15.8523C1.08097 16.3115 0 15.6436 0 14.6167V1.38315C0 0.356196 1.08098 -0.31173 1.99971 0.147535L15.2362 6.76429C16.2546 7.2734 16.2546 8.72642 15.2362 9.23552L1.99971 15.8523Z"/>
    </svg>
  );
}

const styles = {
  icon: css`
    width: 24px;
    height: 24px;
    pointer-events: none;
  `
};
