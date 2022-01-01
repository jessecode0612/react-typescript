/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Slider from 'react-slick';
import { useScreen } from '../../utils/hooks';

export default function Logos() {
  const { width } = useScreen();

  const slidesToShow = Math.floor(width / 180);

  const settings = {
    dots: false,
    slidesToShow: slidesToShow || 1,
    rows: 1,
    autoplay: true,
    swipeToSlide: true
  };

  return (
    <div css={styles} className="container">
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
}

const styles = css`
  width: 96%;

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
      margin: auto;
    }
  }
`;
