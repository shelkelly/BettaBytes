import React from "react";
import { Col, Row, Container } from "../components/Grid";
import MainContainer from "../components/MainContainer";
import Banner from "../components/Banner";
import "./css/stylesheets.css"

const BettaBlog = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <MainContainer id="bbcontainer">
            <Banner />
            <Container id="textarea">
              <p><h1>Betta Blog</h1></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis varius felis, vitae mollis ligula. Integer varius interdum dui, ultrices commodo ante elementum et. Phasellus aliquam nisl purus, vel feugiat lectus varius sit amet. Pellentesque accumsan finibus libero vel ullamcorper. Vivamus urna sem, auctor non pellentesque at, maximus suscipit nulla. Sed enim tellus, malesuada eu maximus id, dictum a felis. Sed ut nisl quis quam accumsan malesuada at eu nisi. Nulla et maximus ipsum. Sed non metus magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut a ultrices ligula, in iaculis nibh. Aliquam molestie, nulla sit amet ullamcorper vestibulum, mi mi iaculis lacus, at congue diam lacus et diam. Aenean laoreet, magna quis condimentum maximus, lectus dolor facilisis arcu, non dictum arcu velit varius dolor.

Praesent consectetur varius viverra. Ut egestas dolor ac dui scelerisque luctus eu eu velit. Donec lacus ante, ultrices vel mauris et, fringilla tincidunt diam. Nam rutrum, ante ut porttitor pretium, est dolor interdum enim, vitae ullamcorper augue nibh sed est. Praesent suscipit lectus in finibus faucibus. Maecenas elementum tortor ligula, id finibus lacus luctus eu. Pellentesque tincidunt, orci sit amet hendrerit porttitor, sapien risus ornare velit, a commodo mi augue vel leo. Nullam iaculis posuere est in dapibus. Curabitur ornare leo tincidunt elit volutpat mattis. Phasellus luctus viverra risus, ut efficitur libero cursus ut. In hac habitasse platea dictumst. Maecenas elementum pretium dolor, a tincidunt velit molestie vulputate. Cras sit amet nisl lorem. Vivamus tempus placerat justo nec bibendum.

Mauris eu cursus leo, a blandit nisi. Vivamus lobortis congue mattis. Vivamus ut eros quam. Mauris sed condimentum massa, sit amet dignissim ligula. Nulla egestas auctor porta. Donec nec urna et neque tincidunt pretium ut sit amet ipsum. Maecenas ut tincidunt nisl. Sed neque purus, pharetra pellentesque finibus eget, commodo eu ex. Morbi eros mauris, molestie et placerat in, pellentesque id nunc. Nunc gravida suscipit neque a pellentesque.</p>
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

export default BettaBlog;