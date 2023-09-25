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
// import images for slider Element
import sliderImage1 from "../images/Fashionality.png";
import sliderImage2 from "../images/CookiesHome.png";
import sliderImage3 from "../images/RealEstate.png";
import sliderImage4 from "../images/smartcare.png";
import sliderImage5 from "../images/FamilyOne.png";
import sliderImage6 from "../images/travelest.png";

let Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      effect="Creative"
      autoplay={{ delay: 100, disableOnInteraction: false }}
      spaceBetween={10}
      loop={true}
      // slidesPerView={2}
      // navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
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
        1600: {
          slidesPerView: 4,
        },
        2000: {
          slidesPerView: 5,
        },
      }}
    >
      <SwiperSlide>
        <SliderElement text="Fashionality" path={sliderImage1} />
      </SwiperSlide>

      <SwiperSlide>
        <SliderElement text="Cookies Home" path={sliderImage2} />
      </SwiperSlide>

      <SwiperSlide>
        <SliderElement text="Real-Estate " path={sliderImage3} />
      </SwiperSlide>

      <SwiperSlide>
        <SliderElement text="Smart Care" path={sliderImage4} />
      </SwiperSlide>

      <SwiperSlide>
        <SliderElement text="Family One" path={sliderImage5} />
      </SwiperSlide>

      <SwiperSlide>
        <SliderElement text="Travelest" path={sliderImage6} />
      </SwiperSlide>
      <SwiperSlide>
        <SliderElement text="Fashionality" path={sliderImage1} />
      </SwiperSlide>

      <SwiperSlide>
        <SliderElement text="Cookies Home" path={sliderImage2} />
      </SwiperSlide>

      <SwiperSlide>
        <SliderElement text="Real-Estate " path={sliderImage3} />
      </SwiperSlide>

      <SwiperSlide>
        <SliderElement text="Smart Care" path={sliderImage4} />
      </SwiperSlide>

      <SwiperSlide>
        <SliderElement text="Family One" path={sliderImage5} />
      </SwiperSlide>

      <SwiperSlide>
        <SliderElement text="Travelest" path={sliderImage6} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
