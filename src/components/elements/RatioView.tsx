/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";

interface Props {
  ratio?: number
}

export const RatioView: React.FC<Props> = ({ children,ratio = 1 }) => {

  const styles = css`
    width: 100%;
    padding-top: ${100 * ratio}%;
    position: relative;
    overflow: hidden;
  `;

  return (
    <div css={styles}>
      <div style={{position: "absolute", width:'100%', height:'100%', top: 0}}>
        {children}
      </div>
    </div>
  );
};

export default RatioView;