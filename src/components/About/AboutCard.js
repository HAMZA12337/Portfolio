import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> </span>Braimi Hamza
            from <span className="purple"> Casablanca,Morocco.</span>
            <br />Software Engineering Student and 
            I enjoy solving problems and creating codes that live on the internet.
                My interest in computer science started back in 2019 when I decided to try learning{" "}
                IT-Development & Big Data Analytics— it turns out programming
                skills are essential to achieve that, my journey with programming started from that time!
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">BRAIMI</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
