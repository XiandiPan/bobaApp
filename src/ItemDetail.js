import React from 'react';
import { Container, Row, Col , Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function ItemDetail() {

  return (
    <div>
    <h1>Detail of each boba like topping and sugar level</h1>
    <Image
                src="https://www.shutterstock.com/image-vector/bubble-milk-tea-boba-vector-600nw-2299991473.jpg"
                alt="First boba picture"
                fluid
              />
              <ul>choices
                <ol>sugar level</ol>
                <ol>toppings</ol>
                <ol>size</ol>
              </ul>
    </div>
  );
}

export default ItemDetail;

