import React from "react";
import Container from "../../GridSystem/Container";
import Row from "../../GridSystem/Row";

interface props {}

const UserPage: React.FC<props> = () => {
  return (
    <>
      <Row>
        <Container className="col-7 bg-pallete-primary">
          <h1>Este es un test</h1>
        </Container>
      </Row>
    </>
  );
};

export default UserPage;
