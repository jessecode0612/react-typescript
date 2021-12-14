/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import theme from '../../styles/theme'

const bannerImage = require('../../assets/images/banner.jpg')


export default function Hero() {

    return (
        <div css={styles}>
            <div className="container">
                <h4>王燕鸥 (Wang YanOu)</h4>
                <h2>Full Stack Software Engineer</h2>
                <p>
                    I design, develop, deploy, and maintain custom web and client applications using the latest technologies and industry standards.
                    <br/>
                    Working closely with our customers during the design and testing phases ensure a result everyone is proud of.
                </p>
            </div>
        </div>
    )
}

const styles = css`
  width: 100%;
  margin: auto;

  background-image: url("${bannerImage}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  ${theme.MOBILE_MEDIA_QUERY} {
    min-height: 350px;
  }
`