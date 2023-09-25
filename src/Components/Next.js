import { Link } from "react-router-dom";
import "../Components_Style/Next.css";

function Next() {
  return (
    <div className="next" id="next">
      <h1>
        شكرا لتواصلك معنا
        <span>♥️</span>
      </h1>
      <Link className="contact-us btn btn-primary" to={"/"}>
        الرجوع الي الرئيسية
      </Link>
    </div>
  );
}

export default Next;
