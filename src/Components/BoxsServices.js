import appsImage1 from "../images/web-design.svg";
import appsImage2 from "../images/application.svg";
import appsImage3 from "../images/app-development.svg";
import marketingImage1 from "../images/interactive.svg";
import marketingImage2 from "../images/logotype.svg";
import designImage1 from "../images/social-media.svg";
import designImage2 from "../images/branding.svg";
import designImage3 from "../images/film-editing.svg";
import "../Components_Style/BoxsServices.css";

function BoxsServices(props) {
  let arrOfBoxs = [
    <div className="box-service apps" key={1}>
      <div className="image">
        <img src={appsImage1} alt="" />
      </div>
      <div className="text">موقع الكتروني محترف</div>
      <span className="hover-data">
        <h3>تطبيقات الهاتف المحمول</h3>
        <p>تصاميم متجاوبة مع كافة الأجهزة</p>
        <p>جودة التصميم والبرمجة</p>
        <p>تجربة مستخدم مميزة وسهلة</p>
        <p>خدمة ما بعد البيع ودعم فني متميز</p>
      </span>
    </div>,
    <div className="box-service apps" key={2}>
      <div className="image">
        <img src={appsImage2} alt="" />
      </div>
      <div className="text">تطبيقات الهاتف المحمول</div>
      <span className="hover-data">
        <h3>تطبيقات الهاتف المحمول</h3>
        <p>تصاميم متجاوبة مع كافة الأجهزة</p>
        <p>جودة التصميم والبرمجة</p>
        <p>تجربة مستخدم مميزة وسهلة</p>
        <p>خدمة ما بعد البيع ودعم فني متميز</p>
      </span>
    </div>,
    <div className="box-service apps" key={3}>
      <div className="image">
        <img src={appsImage3} alt="" />
      </div>
      <div className="text">عرض التطبيق والموقع</div>
      <span className="hover-data">
        <h3>تطبيقات الهاتف المحمول</h3>
        <p>تصاميم متجاوبة مع كافة الأجهزة</p>
        <p>جودة التصميم والبرمجة</p>
        <p>تجربة مستخدم مميزة وسهلة</p>
        <p>خدمة ما بعد البيع ودعم فني متميز</p>
      </span>
    </div>,
    <div className="box-service marketing" key={4}>
      <div className="image">
        <img src={marketingImage1} alt="" />
      </div>
      <div className="text">اعلانات الفيسبوك</div>
      <span className="hover-data">
        <h3>تطبيقات الهاتف المحمول</h3>
        <p>تصاميم متجاوبة مع كافة الأجهزة</p>
        <p>جودة التصميم والبرمجة</p>
        <p>تجربة مستخدم مميزة وسهلة</p>
        <p>خدمة ما بعد البيع ودعم فني متميز</p>
      </span>
    </div>,
    <div className="box-service marketing" key={5}>
      <div className="image">
        <img src={marketingImage2} alt="" />
      </div>
      <div className="text">اعلانات جوجل</div>
      <span className="hover-data">
        <h3>تطبيقات الهاتف المحمول</h3>
        <p>تصاميم متجاوبة مع كافة الأجهزة</p>
        <p>جودة التصميم والبرمجة</p>
        <p>تجربة مستخدم مميزة وسهلة</p>
        <p>خدمة ما بعد البيع ودعم فني متميز</p>
      </span>
    </div>,
    <div className="box-service design" key={6}>
      <div className="image">
        <img src={designImage1} alt="" />
      </div>
      <div className="text">سوشيال ميديا</div>
      <span className="hover-data">
        <h3>تطبيقات الهاتف المحمول</h3>
        <p>تصاميم متجاوبة مع كافة الأجهزة</p>
        <p>جودة التصميم والبرمجة</p>
        <p>تجربة مستخدم مميزة وسهلة</p>
        <p>خدمة ما بعد البيع ودعم فني متميز</p>
      </span>
    </div>,
    <div className="box-service design" key={7}>
      <div className="image">
        <img src={designImage2} alt="" />
      </div>
      <div className="text">اللوجو و الهوية البصرية</div>
      <span className="hover-data">
        <h3>تطبيقات الهاتف المحمول</h3>
        <p>تصاميم متجاوبة مع كافة الأجهزة</p>
        <p>جودة التصميم والبرمجة</p>
        <p>تجربة مستخدم مميزة وسهلة</p>
        <p>خدمة ما بعد البيع ودعم فني متميز</p>
      </span>
    </div>,
    <div className="box-service design" key={8}>
      <div className="image">
        <img src={designImage3} alt="" />
      </div>
      <div className="text">الفيديو جرافيك</div>
      <span className="hover-data">
        <h3>تطبيقات الهاتف المحمول</h3>
        <p>تصاميم متجاوبة مع كافة الأجهزة</p>
        <p>جودة التصميم والبرمجة</p>
        <p>تجربة مستخدم مميزة وسهلة</p>
        <p>خدمة ما بعد البيع ودعم فني متميز</p>
      </span>
    </div>,
  ];

  return (
    <div className="boxs-parent">
      {arrOfBoxs.filter((el) => {
        let arrOfClasses = el.props.className.split(" ");
        return arrOfClasses[1] === props.valOfClass;
      })}
    </div>
  );
}

export default BoxsServices;
