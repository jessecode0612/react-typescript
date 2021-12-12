/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import theme from '../../styles/theme'

const bannerImage = require('../../assets/images/banner.jpg')


export default function Hero() {

    return (
        <div css={styles}>
            <div className="container">
                <h5>I am Bhusan Paudel</h5>
                <h2>Full Stack Software Engineer</h2>
                <p>
                    You can get fully-trusted, reliable and productive service for your website and mobile apps.
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