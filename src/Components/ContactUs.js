import "../Components_Style/ContactUs.css";
function ContactUs() {
  return (
    <section className="contact" id="contact-from">
      <div className="container">
        <div className="form-area">
          <form
            action="https://formsubmit.co/4839b19070b8e964d2cdd74a0de390ce"
            method="POST"
          >
            <input
              className="input"
              type="hidden"
              name="_captcha"
              value="false"
            />
            <input
              className="input"
              type="hidden"
              name="_subject"
              value="New Message From Zaki WebSite"
            />
            <input
              className="input"
              type="hidden"
              name="_next"
              value="http://zaki.solustion.surge.sh/next"
            />
            <input
              className="input"
              type="text"
              name="name"
              required
              placeholder="الاسم"
            />
            <input
              className="input"
              type="phone"
              name="phone"
              placeholder="رقم التواصل"
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              required
            />
            <input
              className="input"
              type="text"
              name="work"
              placeholder="العمل"
            />
            <textarea
              name="Message"
              rows="4"
              cols="50"
              placeholder="اكتب رسالتك"
            />
            <button type="submit">إرسال</button>
          </form>
        </div>
        <div className="contact-info">
          <h1>العنوان </h1>
          <p> الحرم اليوناني بالجامعة الامريكية / القاهرة </p>
          <h1>اتصل بنا </h1>
          <p>01012285008</p>
          <h1>البريد الالكتروني </h1>
          <p>info@zaki-solusion.com</p>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
