/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Carousel } from 'react-responsive-carousel';

export default function Logos() {
  return (
    <div css={styles} className="container">
      <Carousel autoPlay={true} centerMode={true} centerSlidePercentage={10} interval={3000} infiniteLoop={true} showIndicators={false} showThumbs={false} selectedItem={4}>
        <div className="carousel-item">
          <img src="https://lovecoding714.site/assets_front/img/skills/laravel.png" alt="Laravel" />
        </div>
        <div className="carousel-item">
          <img src="https://lovecoding714.site/assets_front/img/skills/vue.png" alt="Vue" />
        </div>
        <div className="carousel-item">
          <img src="https://lovecoding714.site/assets_front/img/skills/react.png" alt="React" />
        </div>
        <div className="carousel-item">
          <img src="https://lovecoding714.site/assets_front/img/skills/node.png" alt="Node" />
        </div>
        <div className="carousel-item">
          <img src="/images/logos/apollo.png" alt="Node" />
        </div>
        <div className="carousel-item">
          <img src="/images/logos/firebase.png" alt="Firebase" />
        </div>
        <div className="carousel-item">
          <img src="/images/logos/amazon.png" alt="Amazon Web Service" />
        </div>
        <div className="carousel-item">
          <img src="/images/logos/gcp.png" alt="Google Cloud Service" />
        </div>
        <div className="carousel-item">
          <img src="/images/logos/mongo.png" alt="MongoDB" />
        </div>
        <div className="carousel-item">
          <img src="/images/logos/android.png" alt="MongoDB" />
        </div>
        <div className="carousel-item">
          <img src="/images/logos/swift.png" alt="MongoDB" />
        </div>
      </Carousel>
    </div>
  );
}

const styles = css`
  width: 96%;
  margin-top: 30px;

  .carousel-item {
    padding: 10%;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
