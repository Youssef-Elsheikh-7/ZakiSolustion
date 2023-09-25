import Slider from "./Slider";
import TestimonialsSlider from "./TestimonialsSlider";
import MainTitle from "./Title";

function Testimonials() {
  return (
    <section className="testimonials">
      <MainTitle text="أراء عملائنا" />
      <div className="container">
        <TestimonialsSlider />
      </div>
    </section>
  );
}

export default Testimonials;
