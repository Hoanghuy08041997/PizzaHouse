import { Navbar, Nav as BootstrapNav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'

const Nav = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">Pizza House</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <BootstrapNav className="me-auto">
                        <BootstrapNav.Link href="#">Home</BootstrapNav.Link>
                        <BootstrapNav.Link href="#">About Us</BootstrapNav.Link>
                        <BootstrapNav.Link href="tel:+84">Contact</BootstrapNav.Link>
                    </BootstrapNav>
                    <Form className="d-flex ms-auto">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" type="submit">
                            <FontAwesomeIcon icon={faSearch} />
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Nav;
