import React from "react";
import { Col, Row, Container } from "../components/Grid";
import MainContainer from "../components/MainContainer";
import Banner from "../components/Banner";
import "./css/stylesheets.css"

const NoMatch = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <MainContainer id="homecontainer">
            <Banner />
            <Container id="textarea">
              <p></p>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
              </Container>
          </MainContainer>
        </Col>
        <Col size="md-6 sm-12">
          <Container />
        </Col>
      </Row>
    </Container>
  );
};

export default NoMatch;
