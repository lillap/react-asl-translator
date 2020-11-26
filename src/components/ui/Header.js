import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import HeaderBackground from '../../resources/header-bg.jpg'

const Header = () => {

  const headerBackground = {background: "url("+ HeaderBackground +")"}; // get header-background image

  return (
    <Jumbotron fluid className="text-center" style={headerBackground}>
        <Container>
            <h1>ASL TRANSLATOR</h1>
            <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
            </p>
        </Container>
    </Jumbotron>
  )
};

export default Header; 