import { Button, Form, InputGroup, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent({ onClick }: { onClick: () => void }) {
  return (
    <Navbar className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="/">CS472 - Final Project</Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="me-auto">
          <Form className="d-flex">
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search word"
                className="me-1"
                aria-label="Search"
              />
              <Form.Control
                type="search"
                placeholder="Search Category"
                className="me-1"
                aria-label="Search"
              />
            </InputGroup>
            <Button variant="default">Search</Button>
          </Form>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button variant="light" onClick={onClick}>
              + Add Product
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
