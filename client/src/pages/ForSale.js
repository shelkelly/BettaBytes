import React from "react";
import { Col, Row, Container } from "../components/Grid";
import MainContainer from "../components/MainContainer";
import Banner from "../components/Banner";
import "./css/stylesheets.css"

const ForSale = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <MainContainer id="bbcontainer">
            <Banner />
            <Container id="textarea">
              <p><h1>For Sale</h1></p>
              <p>You've come to the right place.</p>
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

export default ForSale;