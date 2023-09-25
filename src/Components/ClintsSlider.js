// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import the images for the slider
import clintImage1 from "../images/1.png";
import clintImage2 from "../images/2.png";
import clintImage3 from "../images/3.png";
import clintImage4 from "../images/4.png";
import clintImage5 from "../images/5.png";
import clintImage6 from "../images/6.png";
import SliderBox from "./SliderBox";

let ClintsSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      effect="Creative"
      autoplay={{ delay: 100, disableOnInteraction: false }}
      spaceBetween={10}
      scrollbar={false}
      loop={true}
      // slidesPerView={2}
      // navigation
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1199: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
        2000: {
          slidesPerView: 5,
        },
      }}
    >
      <SwiperSlide>
        <SliderBox path={clintImage1} />
      </SwiperSlide>
      <SwiperSlide>
        <SliderBox path={clintImage2} />
      </SwiperSlide>
      <SwiperSlide>
        <SliderBox path={clintImage3} />
      </SwiperSlide>
      <SwiperSlide>
        <SliderBox path={clintImage4} />
      </SwiperSlide>
      <SwiperSlide>
        <SliderBox path={clintImage5} />
      </SwiperSlide>
      <SwiperSlide>
        <SliderBox path={clintImage6} />
      </SwiperSlide>
      <SwiperSlide>
        <SliderBox path={clintImage1} />
      </SwiperSlide>
      <SwiperSlide>
        <SliderBox path={clintImage2} />
      </SwiperSlide>
      <SwiperSlide>
        <SliderBox path={clintImage3} />
      </SwiperSlide>
      <SwiperSlide>
        <SliderBox path={clintImage4} />
      </SwiperSlide>
      <SwiperSlide>
        <SliderBox path={clintImage5} />
      </SwiperSlide>
      <SwiperSlide>
        <SliderBox path={clintImage6} />
      </SwiperSlide>
    </Swiper>
  );
};

export default ClintsSlider;
