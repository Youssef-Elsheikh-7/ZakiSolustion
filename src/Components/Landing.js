import { Link } from "react-router-dom";
import "../Components_Style/Landing.css";
function Landing() {
  return (
    <section className="landing-page d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className="landing-text1">زكي سليوشن</h1>
        <h3 className="landing-text2">أحلامك الرقمية، هي حلولنا</h3>
        <Link className="btn btn-primary landing-btn" to={"/contactUs"}>
          تواصل معنا
        </Link>
      </div>
    </section>
  );
}

export default Landing;
