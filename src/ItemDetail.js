import React from 'react';
import { Container, Row, Col , Image} from 'react-bootstrap';

const BOBA_IMG = "https://www.shutterstock.com/image-vector/bubble-milk-tea-boba-vector-600nw-2299991473.jpg"


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
            <h1>Pick your favorite Boba here</h1>
            <Col xs>
            <Image src='BOBA_IMG' alt="boba picture" fluid />First, but unordered</Col>
            <Col xs={{ order: 12 }}><Image src='BOBA_IMG' alt="boba picture" fluid />Second, but last</Col>
            <Col xs={{ order: 1 }}><Image src='BOBA_IMG' alt="boba picture" fluid />vThird, but second</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ItemDetail;

