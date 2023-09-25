import { Link } from "react-router-dom";
import "../Components_Style/CopyRigth.css";
function CopyRight() {
  return (
    <div className="copy">
      <p> حقوق النشر © 2023 zakisoluion.com جميع الحقوق محفوظة</p>
      <p className="sec">
        <Link to={"/rules"}>شروط الاستخدام / سياسة الخصوصية</Link>
      </p>
    </div>
  );
}

export default CopyRight;
