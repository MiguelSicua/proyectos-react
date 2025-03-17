import { Wrapper } from "./Styles/ContactStyles";

const Contact = () => {
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Feel to Contact us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31811.118893260747!2d-74.07407283782958!3d4.70214521442957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ab26ea0240f%3A0x96607cc537204acd!2sUnicentro%20Bogot%C3%A1%20Centro%20Comercial!5e0!3m2!1ses-419!2sco!4v1740153695606!5m2!1ses-419!2sco"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mldgzyll"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
