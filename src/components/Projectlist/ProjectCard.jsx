import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ProjectCards.css";
import { FaCode, FaLink } from "react-icons/fa";
function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <div className="card-img-div">
        <Card.Img
          className="card-img shadow-inset-center"
          variant="top"
          src={props.imgPath}
          alt="card-img"
        />
      </div>
      <Card.Body>
        <Card.Title className="project-title">{props.title}</Card.Title>
        <Card.Text
          className="card-description"
          style={{ textAlign: "justify" }}
        >
          {props.description}
        </Card.Text>
      </Card.Body>
      <div className="button-groups">
        {props.Demo ? (
          <Button
            className="viewbtn"
            variant="primary"
            href={props.Demo}
            target="_blank"
          >
            Demo <FaLink className="btn-link" />
          </Button>
        ) : (
          ""
        )}
        {props.Code ? (
          <Button
            className="viewbtn"
            variant="primary"
            href={props.Code}
            target="_blank"
          >
            Code <FaCode className="btn-link" />
          </Button>
        ) : (
          ""
        )}
      </div>
    </Card>
  );
}
export default ProjectCard;
