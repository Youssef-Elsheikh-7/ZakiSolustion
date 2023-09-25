import num from "../images/num.png";
import wa from "../images/WA_Logo.png";
import facebook from "../images/Path10.png";
import linkedin from "../images/Path11.png";
import twitter from "../images/Path12.png";
import insta from "../images/path13.png";
// import logo from "../images/logo.png";
import logoph from "../images/logoPh.png";
import "../Components_Style/Footer.css";
function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="logo">
          <img src={logoph} alt="Logo" />
        </div>
        <ul className="icons">
          <li>
            <a href="/">
              <img src={facebook} alt="facebook-icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={linkedin} alt="linkedin-icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={insta} alt="facebook-icon" style={{ width: "49px" }} />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={twitter} alt="twitter-icon" />
            </a>
          </li>
        </ul>
        <div className="contact">
          <h3>تواصل معنا</h3>
          <p> الحرم اليوناني بالجامعة الامريكية / القاهرة </p>
          <div className="nums">
            <span className="num">
              <img src={num} alt="number-icon" />
              01012285008
            </span>
            <span className="whatsapp">
              <img src={wa} alt="whatsapp-icon" />
              01012285008
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
