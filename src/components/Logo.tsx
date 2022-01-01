/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div css={styles}>
      <Link to="/">
        <strong>LXR TECH</strong>
      </Link>
    </div>
  );
}

const styles = css`
  display: flex;
  strong {
    font-size: 36px;
  }
`;
