import React from "react";
import { Col, Row, Container } from "../components/Grid";
import "./css/stylesheets.css"

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Container id="homecontainer">
            Welcome to Beta Bytes!
            </Container>
        </Col>
        <Col size="md-6 sm-12">
          <Container />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;