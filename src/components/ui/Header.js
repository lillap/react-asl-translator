import React, { useEffect, useState } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { getStorage } from '../../utils/localstorage';
import ProfileButtons from './redirectButtons/ProfileButtons';

const Header = () => {

    // const [userExists, setUserExists] = useState(false);

    // useEffect (() => {
    //     if (getStorage('session')) {
    //         setUserExists(true); 
    //     } else {
    //         setUserExists(false);
    //     }
    // }, []);

  return (
    <Jumbotron fluid>
        <Container>
            <h1>Fluid jumbotron</h1>
            <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
            </p>


        </Container>
    </Jumbotron>
  )
};

export default Header; 