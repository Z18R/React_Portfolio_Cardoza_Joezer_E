import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Cardoza, Joezer E. </span>
            from <span className="purple"> Philippines</span>
            <br /> I'm Computer Engineer graduate with a passion for web development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Upload my Videos in youtube
            </li>
            <li className="about-activity">
              
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "It's about time"{" "}
          </p>
          <footer className="blockquote-footer">Joezer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
