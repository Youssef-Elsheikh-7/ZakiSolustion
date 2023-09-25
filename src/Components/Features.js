import "../Components_Style/Features.css";
import feature1 from "../images/feature-1.svg";
import feature2 from "../images/feature-2.svg";
import feature3 from "../images/feature-3.svg";
import feature4 from "../images/feature-4.svg";
import feature5 from "../images/feature-5.svg";
import feature6 from "../images/feature-6.svg";
function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="cir">
          <img src={feature1} alt="" />
          <p className="text">دعم وتواصل مستمر</p>
        </div>
        <div className="cir">
          <img src={feature2} alt="" />
          <p className="text">مواعيد دقيقة</p>
        </div>
        <div className="cir">
          <img src={feature3} alt="" />
          <p className="text">حلول ذكية</p>
        </div>
        <div className="cir">
          <img src={feature4} alt="" />
          <p className="text">ابتكار وابداع دائم</p>
        </div>
        <div className="cir">
          <img src={feature5} alt="" />
          <p className="text">مرونة وتنوع </p>
        </div>
        <div className="cir">
          <img src={feature6} alt="" />
          <p className="text">فريق عالي الخبرة</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
