/** @jsx jsx */
import {css, jsx} from '@emotion/react'

export default function TopBar() {


    return (
        <div css={styles}>
            <span>Contact Me</span>
            <small>王燕鸥(Wang YanOu)</small>
            <a href="mailto:wyanou213@163.com">wyanou213@163.com</a>
        </div>
    )
}

const styles = css`
  position: fixed;
  top: 0;
  background-color: #389838D8;
  width: 100vw;
  height: 18px;
  padding: 2px 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span{
    margin-right: 20px;
    font-size: 14px;
    color: white;
  }
  a, small {
    color: white;
    padding:0 10px;
    line-height: 14px;
    border-left: solid 1px white;
  }
`