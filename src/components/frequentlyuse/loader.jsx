import React from "react";
import { Card, Col, Placeholder } from "react-bootstrap";
import PlaceHolderImg from "../../assets/images/placeholder.png";
const Loader = () => {
  return (
    <>
      <Col className="mt-4" md={4}>
        <Card style={{ width: "16rem" }}>
          <Card.Img variant="top" src={PlaceHolderImg} />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Loader;
