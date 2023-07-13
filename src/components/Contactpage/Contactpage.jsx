import React, { useState } from "react";
import "./Contactpage.css";
import { Container } from "react-bootstrap";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";
import { FaCopyright } from "react-icons/fa";

function Contactpage() {
  const [loader, setLoader] = useState(true);
  return (
    <>
      <div className="contactbackground">
        <div className="col-md-12">
          <div className="row contact-row">
            <div className="col-md-6 get-in-touch">
              <Container className="contact-container">
                <h2 className="contacthead">Get In Touch</h2>
                <div className="col-md-7 get-div">
                  <p className="contactpara">
                    I'd love to hear from you! Whether you have a question,
                    collaboration opportunity, or just want to say hello, feel
                    free to reach out. Simply drop me a message, and I'll get
                    back to you as soon as possible. Looking forward to
                    connecting!
                  </p>
                  <button
                    className="contactbtn"
                    onClick={() => {
                      window.open("https://wa.me/6006280992");
                    }}
                  >
                    Say Hello
                    <IoLogoWhatsapp className="watsapp-icon" />{" "}
                  </button>
                </div>
              </Container>
            </div>
            <div className="col-md-6 input-form">
              <div className="contact-form">
                <h2 className="contact-me">
                  Contact Me <AiFillMessage className="contact-icon" />
                </h2>
                <form
                  action="https://getform.io/f/5a0211bc-584c-467a-98a1-e991caea1f39"
                  className="contact"
                  method="POST"
                >
                  <div className="input-div">
                    <div>
                      <label className="input-label">Name :</label>
                      <br></br>
                      <input
                        type="text"
                        name="user_name"
                        className="text-box"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="input-label">Email :</label>
                      <br></br>
                      <input
                        type="email"
                        name="user_email"
                        className="text-box"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div>
                      <label className="input-label">Message :</label>
                      <br></br>
                      <textarea
                        name="message"
                        className="text-box"
                        placeholder="Your Message"
                        required
                      />
                    </div>
                  </div>
                  {loader ? (
                    <div className="send-button">
                      <button
                        type="submit"
                        name="submit"
                        className="send-btn"
                        value="SEND"
                      >
                        SEND <IoMdSend />
                      </button>
                    </div>
                  ) : (
                    <div className="send-button">
                      <button type="submit" name="submit" className="send-btn">
                        <div className="submit-btn-loader"></div>
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
            <p className="copyright">
              <FaCopyright className="copyright-icon" /> 2023.
              <br />
              Designed & Built by - <span>Sunil Kumar</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactpage;
