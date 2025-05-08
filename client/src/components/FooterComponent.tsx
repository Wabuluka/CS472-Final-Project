import { Container } from "react-bootstrap";

function FooterComponent() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center footer py-3 bg-light mt-4">
      <Container>
        <span className="mb-3 mb-md-0 text-body-secondary">
          &copy; Davies Wabuluka
        </span>
      </Container>
    </footer>
  );
}

export default FooterComponent;
