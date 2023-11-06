import React from "react";

function ContactForm() {
  return (
    <section className="id-contact__form">
        <h2>Contact</h2>
        <hr />
      <form>
        <div className="form-group">
          <div className="container">
            <input type="text" className="form-control" id="inputName" placeholder="Name" />
          </div>
        </div>
        <div className="form-group">
          <div className="container">
            <input type="email" className="form-control" id="inputEmai" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <div className="container">
            <textarea id="inputMessage" placeholder="Message" />
          </div>
        </div>
        <div className="id-contact__form__btn">
          <div className="container">
            <button type="submit" className="id-btn form">
              <p>Submit</p>
            </button>
          </div>

        </div>
      </form>
    </section>
  );
}

export default ContactForm;
