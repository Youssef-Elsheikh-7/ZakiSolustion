// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SliderElement from "./SliderElement";
import Testimonial from "./Testimonial";
// import images for slider Element

let TestimonialsSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      effect="Creative"
      autoplay={{ delay: 100, disableOnInteraction: false }}
      spaceBetween={50}
      loop={true}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <Testimonial />
      </SwiperSlide>
      <SwiperSlide>
        <Testimonial />
      </SwiperSlide>
      <SwiperSlide>
        <Testimonial />
      </SwiperSlide>
      <SwiperSlide>
        <Testimonial />
      </SwiperSlide>
    </Swiper>
  );
};

export default TestimonialsSlider;
