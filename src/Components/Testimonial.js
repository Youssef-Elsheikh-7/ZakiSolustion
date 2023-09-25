import "../Components_Style/Testimonial.css";
import avatar from "../images/Testimonials.png";
function Testimonial() {
  return (
    <div className="Testimonial">
      <div className="container">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <p className="mess">
          شركة زكي سليوشن تقدم خدمات رائعة ومتميزة، حيث تلتزم بالمواعيد وتوفر
          دعمًا فنيًا عالي الجودة. كما أنها تتمتع بالابتكار والإبداع في تقديم
          الحلول المناسبة للعملاء، وتمتلك خبرة وتخصص عالي في مجالها. بشكل عام،
          أنا سعيد جدًا بتجربتي مع شركة زكي سليوشن وأنصح بشدة بالتعامل معها
        </p>
        <h2 className="name">أ.محمد ابرهيم</h2>
        <span className="position">مدير تنفيذي شركة هومك</span>
      </div>
    </div>
  );
}

export default Testimonial;
