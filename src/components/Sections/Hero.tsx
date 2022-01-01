/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import theme from '../../styles/theme';
import { useScreen } from '../../utils/hooks';
import SocialGroup from "../elements/SocialGroup";

export default function Hero() {
  const { isMobile } = useScreen();
  return (
    <div css={styles} id="home">
      <div className="container">
        <h4>Bhusan Paudel</h4>
        <h2>Full Stack Software Engineer</h2>
        <p hidden={isMobile}>
          I design, develop, deploy, and maintain custom web and client applications using the latest technologies and industry standards.
          <br />
          Working closely with our customers during the design and testing phases ensure a result everyone is proud of.
        </p>
        <SocialGroup />
        <hr style={{height: 1, backgroundColor:'#ffffff7f', border: 'none', margin: '30px 0'}} />
        <div style={{display:'flex', alignItems:'center'}}>
          {
            [
              {label: 'Strong Skills', count: '30+'},
              {label: 'Potential Clients', count: '18+'},
              {label: 'Backend Development', count: '+6 years'},
              {label: 'Frontend Development', count: '+7 years'},
              {label: 'Mobile Development', count: '+4 years'},
            ].map((item, index)=>(
              <div key={index} style={{display: "flex", flexDirection:'column', marginRight: 20}}>
                <span  style={{fontWeight: 300, color:'#ffffff'}}>{item.count}</span>
                <small style={{fontWeight: 100, color:'#ffffff9f'}}>{item.label}</small>
              </div>
            ))
          }
        </div>
      </div>
      <svg width="0" height="0">
        <defs>
          <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
            <path d="M 0,1
              L 0,0
              L 1,0
              L 1,.8
              C .5 .8, .7 1, 0 1
              Z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

const styles = css`
  width: 100%;
  margin: auto;

  background-image: url(/images/banner.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  //clip-path: ellipse(85% 100% at 50% 0%);
  clip-path: url(#myCurve);

  ${theme.MOBILE_MEDIA_QUERY} {
    min-height: 350px;
  }
`;
