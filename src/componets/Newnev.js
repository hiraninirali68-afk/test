import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Newnev() {
    const history = useHistory()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Blog-App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={() => history.push("/")} >Login</Nav.Link>
                            <Nav.Link onClick={() => history.push("/sig")}>SignUp</Nav.Link>
                            <Nav.Link onClick={() => history.push("/addBlog")}>Add Blog</Nav.Link>
                            <Nav.Link onClick={() => history.push("/allBlog")}>All Blog</Nav.Link>
                            <Nav.Link onClick={() => history.push("/myblog")}>my Blog</Nav.Link>
                            

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Newnev
