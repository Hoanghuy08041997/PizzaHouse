import React from "react";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import menu1 from "./img/menu-01.jpg";
import menu2 from "./img/menu-02.jpg";
import menu3 from "./img/menu-08.jpg";
import menu4 from "./img/menu-04.jpg";

const Menu = () => {
    return (
        <Container className="my-5">
            <h2 className="text-left mb-4 text-white">Our Menu</h2>
            <Row>
                <Col md={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={menu1} alt="Chicken Tenders & Fries" />
                        <Card.Body>
                            <Card.Title>Chicken Tenders & Fries</Card.Title>
                            <Card.Text>
                                <span className="text-muted text-decoration-line-through">$10.00</span> $7.60
                            </Card.Text>
                            <Button variant="dark" className="col-md-12">Buy</Button>
                        </Card.Body>
                        <div className="position-absolute top-0 start-0 badge bg-warning text-white">SALE</div>
                    </Card>
                </Col>
                <Col md={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={menu2} alt="Mushroom Pizza" />
                        <Card.Body>
                            <Card.Title>Mushroom Pizza</Card.Title>
                            <Card.Text>$10.00</Card.Text>
                            <Button variant="dark" className="col-md-12">Buy</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={menu3} alt="Hamburger" />
                        <Card.Body>
                            <Card.Title>Hamburger</Card.Title>
                            <Card.Text>$3.00</Card.Text>
                            <Button variant="dark" className="col-md-12">Buy</Button>
                        </Card.Body>
                        <div className="position-absolute top-0 start-0 badge bg-success text-white">NEW</div>
                    </Card>
                </Col>
                <Col md={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={menu4} alt="Smoked Pork" />
                        <Card.Body>
                            <Card.Title>Smoked Pork</Card.Title>
                            <Card.Text>
                                <span className="text-muted text-decoration-line-through">$25.00</span> $22.00
                            </Card.Text>
                            <Button variant="dark" className="col-md-12">Buy</Button>
                        </Card.Body>
                        <div className="position-absolute top-0 start-0 badge bg-warning text-white">SALE</div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Menu;
