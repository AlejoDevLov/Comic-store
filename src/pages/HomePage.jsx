import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import '../CSS/homepage.css';

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function HomePage() {

  return (
    <div className="container">

      <div className="title-div">
        <h1 className="store-name">ANIMECO SHOP</h1>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={2}
        // loop={true}
        // loopedSlides={0}
        coverflowEffect={{
          rotate: 10,
          stretch: -10,
          depth: 150,
          modifier: 3,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
          <Link to="../shop/los-simpsons"><img src="/images/los-simpsom/1ca1e142f76931e4350d8a7c0501ec24.jpg" alt="los simpsons" /></Link>
        </SwiperSlide>
        <SwiperSlide >
          <Link to="../shop/demon-slayer" data-testid="demon"><img src="/images/demon/a1fe94673eb48244d0648c63fcaef0d4.jpg" alt="demon-slayer"/></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="../shop/dragon-ball"><img src="/images/dragon-ball/1a2bcec7310c0abc847cec52b5b65522.jpg" alt="dragon ball" /></Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="../shop/mario"><img src="/images/mario/faec054c4f79e5d0d4e6b64d17dca593.jpg" alt="mario" /></Link>
        </SwiperSlide>
        <SwiperSlide >
          <Link to='../shop/sevenDeadly'><img src="/images/the-seven-deadly/94d9cc928a2425acf71726c2fdc17d57.jpg" alt="seven-deadly-sins" /></Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
