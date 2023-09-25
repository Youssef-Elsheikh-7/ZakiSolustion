import MainTitle from "../Components/Title";
import "../Components_Style/OurServices.css";
import BoxsServices from "./BoxsServices";
import { useState } from "react";
function OurServices() {
  const [val, setVal] = useState("apps");
  const addActiveOnBtn = (e) => {
    let parent = document.querySelectorAll(".fillter-btns");
    for (let i = 0; i < parent.length; i++) {
      parent[i].classList.remove("active");
    }
    e.target.classList.add("active");
  };

  return (
    <section className="our-services" id="our-services">
      <div className="container">
        <MainTitle text="خدماتنا"></MainTitle>
        <div className="fillter-parent">
          <button
            className="btn btn-primary fillter-btns active"
            onClick={(e) => {
              addActiveOnBtn(e);
              setVal("apps");
            }}
          >
            المواقع والتطبيقات
          </button>
          <button
            className="btn btn-primary fillter-btns "
            onClick={(e) => {
              addActiveOnBtn(e);
              setVal("marketing");
            }}
          >
            التسويق الالكتروني
          </button>
          <button
            className="btn btn-primary fillter-btns "
            onClick={(e) => {
              addActiveOnBtn(e);
              setVal("design");
            }}
          >
            خدمات التصميم
          </button>
        </div>
        <BoxsServices valOfClass={val}></BoxsServices>
      </div>
    </section>
  );
}
export default OurServices;
