import React from "react";
import "./ProjectCards.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import Project1 from "../../Images/Project1.png";
import Project2 from "../../Images/Project2.png";
import Project3 from "../../Images/Project3.png";
import Project4 from "../../Images/Project4.png";
import Project5 from "../../Images/Project5.png";
import Project6 from "../../Images/Project6.png";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h2 className="title">Some of my Projects</h2>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Project1}
                title="PiedPiper Blog Website"
                description="Pied-Piper01 is a simple blog web application built with ReactJs and Firebase.
                It allows users to create, read, and comment on posts. The posts and images are stored in Firebase, making it easy to scale and manage the app. 
                The app is also responsive, which means it works well on all types of screens."
                Demo="https://piedpiper01.netlify.app"
                Code="https://github.com/0rigin-c0de/PiedPiper01"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Project2}
                title="Foodie Restaurant Website Template"
                description="Foodie is a responsive and visually appealing restaurant website template built with React. 
                It provides an interactive interface for showcasing delicious food items, ordering food, and learning more about the restaurant's services. 
                This template is open source, allowing developers to customize and enhance it according to their needs."
                Demo="https://foodie01.netlify.app/"
                Code="https://github.com/0rigin-c0de/Foodie"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Project3}
                title="Mern Auth App"
                description="This MERN app is a secure and user-friendly system for authentication, registration, and profile management. It features a backend API built with Express and MongoDB, with protected routes and JWT authentication stored in HTTP-only cookies.The React frontend uses React Bootstrap for UI components. Overall, the app offers users to create accounts,
                log in, view and update their profiles."
                Demo="https://github.com/0rigin-c0de/mern-auth"
                Code="https://github.com/0rigin-c0de/mern-auth"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Project4}
                title="Wiki Viewer"
                description="Wiki Viewer is a web app that allows users to search for and view Wikipedia articles. 
                The app uses the Wikipedia API to fetch article data, and it is built with HTML, CSS, and JavaScript. 
                The app also has a random wiki generated button, which allows users to view a random Wikipedia article."
                Demo="https://wikiviewer01.netlify.app/"
                Code="https://github.com/0rigin-c0de/wiki-veiwer"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Project5}
                title="Snake-Game Java"
                description="The Snake Game is a classic arcade-style game built in Java. 
                It features a snake controlled by the player, moving within a grid to eat apples. 
                The objective is to avoid collisions with the boundaries or the snake's body. 
                The game has a GUI implemented with Java's Swing library. 
                "
                Demo="https://github.com/0rigin-c0de/snake-Game"
                Code="https://github.com/0rigin-c0de/snake-Game"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Project6}
                title="Note-Taking App"
                description="The Notes App is a React JS and Firebase web application that allows users to create, edit, and manage notes. 
                It features a markdown editor for formatting and previewing notes. 
                The sidebar displays a list of notes, and users can create, delete, and sign out. 
                The app demonstrates proficiency in React JS, Firebase integration, user authentication, and real-time collaboration."
                Demo="https://github.com/0rigin-c0de/Markdown-App-"
                Code="https://github.com/0rigin-c0de/Markdown-App-"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
