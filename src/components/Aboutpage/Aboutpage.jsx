import React from "react";
import "./Aboutpage.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              <FaUser className="about-user" /> <span>About Me</span>
            </h3>
            <p className="aboutdetails">
              I'm a self-taught Frontend developer from India, passionate about
              creating engaging web experiences. Focused on React and Open
              Source, I strive to enhance my skills and contribute to the
              development community. Currently mastering JavaScript with React
              to build robust web applications. Exploring backend technologies
              for full-stack development. As a self-driven learner, I enjoy
              tackling challenges and expanding my knowledge. Feel free to ask
              me anything about Frontend Development.
            </p>
          </Col>
          <Col md={5}>
            <div className="webimage">
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_jtbfg2nb.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
