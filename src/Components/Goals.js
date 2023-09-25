import goalsImage from "../images/goals.png";
import "../Components_Style/Goals.css";
import { Link } from "react-router-dom";
function Goals() {
  return (
    <section className="Goals">
      <div className="container">
        <div className="text">
          <h2 className="title">
            رؤيتنا <span>و أهدافنا </span>
          </h2>
          <p className="paragraph">
            رؤية شركة زكي سليوشن هي تطوير البرمجيات والتقنيات الحديثة في العالم
            العربي، وتسعى الشركة إلى تحقيق أعلى مستويات الجودة والكفاءة، وتوسيع
            نطاق خدماتها وزيادة وجودها في الأسواق العالمية، والمساهمة في التنمية
            المستدامة ودعم المبادرات المجتمعية والخيرية
          </p>
          <Link className="contact-us btn btn-primary" to={"/contactUs"}>
            تواصل معنا
          </Link>
        </div>
        <div className="image">
          <img src={goalsImage} alt="image" />
        </div>
      </div>
    </section>
  );
}

export default Goals;
