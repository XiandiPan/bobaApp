import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ItemDetail() {

  const componentStyle = {
    backgroundColor: 'pink',
    height:'100vh'
  };

  return (
    <div>
      <div style={componentStyle}>
        <Container>
          <Row>
            <Col xs>First, but unordered</Col>
            <Col xs={{ order: 12 }}>Second, but last</Col>
            <Col xs={{ order: 1 }}>Third, but second</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ItemDetail;

