import React from 'react';
import { Container, Row, Col , Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Items(){
  const componentStyle = {
    backgroundColor: 'pink',
    height:'100vh',
    width:'100%'
  };


  return (
    <div>
      <div style={componentStyle}>
        <Container>
          <h1>Pick your favorite Boba here</h1>
          <Row>
            <Col>
              <Image
                src="https://www.shutterstock.com/image-vector/bubble-milk-tea-boba-vector-600nw-2299991473.jpg"
                alt="First boba picture"
                fluid
              />
              First, but unordered
            </Col>
            <Col>
              <Image
                src="https://www.shutterstock.com/image-vector/bubble-milk-tea-boba-vector-600nw-2299991473.jpg"
                alt="Second boba picture"
                fluid
              />
              Second, but last
            </Col>
            <Col>
              <Image
                src="https://www.shutterstock.com/image-vector/bubble-milk-tea-boba-vector-600nw-2299991473.jpg"
                alt="Third boba picture"
                fluid
              />
              Third, but second
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                src="https://www.shutterstock.com/image-vector/bubble-milk-tea-boba-vector-600nw-2299991473.jpg"
                alt="First boba picture"
                fluid
              />
              First, but unordered
            </Col>
            <Col>
              <Image
                src="https://www.shutterstock.com/image-vector/bubble-milk-tea-boba-vector-600nw-2299991473.jpg"
                alt="Second boba picture"
                fluid
              />
              Second, but last
            </Col>
            <Col>
              <Image
                src="https://www.shutterstock.com/image-vector/bubble-milk-tea-boba-vector-600nw-2299991473.jpg"
                alt="Third boba picture"
                fluid
              />
              Third, but second
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                src="https://www.shutterstock.com/image-vector/bubble-milk-tea-boba-vector-600nw-2299991473.jpg"
                alt="First boba picture"
                fluid
              />
              First, but unordered
            </Col>
            <Col>
              <Image
                src="https://www.shutterstock.com/image-vector/bubble-milk-tea-boba-vector-600nw-2299991473.jpg"
                alt="Second boba picture"
                fluid
              />
              Second, but last
            </Col>
            <Col>
              <Image
                src="https://www.shutterstock.com/image-vector/bubble-milk-tea-boba-vector-600nw-2299991473.jpg"
                alt="Third boba picture"
                fluid
              />
              Third, but second
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Items;
