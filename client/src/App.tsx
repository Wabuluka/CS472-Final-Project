import { useState } from "react";
import { Container } from "react-bootstrap";
import FooterComponent from "./components/FooterComponent";
import { ModalComponent } from "./components/ModalComponent";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <NavbarComponent onClick={() => setModalShow(!modalShow)} />
      <main>
        <Container>
          <HomePage />
        </Container>
      </main>
      <ModalComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={"Add Product"}
      >
        <h1>Hello World</h1>
      </ModalComponent>
      <FooterComponent />
    </>
  );
}

export default App;
