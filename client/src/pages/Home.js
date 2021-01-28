import React from "react";
import { Col, Row, Container } from "../components/Grid";
import MainContainer from "../components/MainContainer";
import "./css/stylesheets.css"

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <MainContainer id="homecontainer">
            Welcome to <h1>Betta Bytes</h1>
            </MainContainer>
        </Col>
        <Col size="md-6 sm-12">
          <Container />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;