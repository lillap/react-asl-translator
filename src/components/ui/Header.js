import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import HeaderBackground from '../../resources/header-bg.jpg'

const Header = () => {

  const headerBackground = {background: "url("+ HeaderBackground +")"}; // get header-background image

  return (
    <Jumbotron fluid className="text-center" style={headerBackground}>
        <Container>
            <h1>ASL TRANSLATOR</h1>
        </Container>
    </Jumbotron>
  )
};

export default Header; 