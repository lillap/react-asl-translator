import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import HeaderBackground from '../../resources/header-bg2.jpg'

const Header = () => {

  const headerBackground = {background: "url("+ HeaderBackground +")"}

  return (
    <Jumbotron fluid className="text-center" style={headerBackground}>
        <Container>
            <h1>ASL TRANSLATOR</h1>
        </Container>
    </Jumbotron>
  )
};

export default Header; 