import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Theerthan D </span>
            from <span className="purple"> Banglore, India.</span>
            <br />
            Actively seeking innovative opportunities to build scalable and impactful solutions."
            <br />
            I have completed my BSc in Computer Science and Statistics at NTU, Bangalore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Martial Arts
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(144 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Satya Nadella</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
