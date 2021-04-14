import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        
        <header>
            
                <Navbar className='navcol' variant='dark' expand="lg" collapseOnSelect>
                    <Container>
                        <LinkContainer to="/">
                    <Navbar.Brand><img class='App-logo'src='../images/Untitled-1.png'/></Navbar.Brand>
                    </LinkContainer>
                   
                           
                       
                    
                    
                   </Container>
                </Navbar>
            
        </header>
        
    )
}

export default Header
