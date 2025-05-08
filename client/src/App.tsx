import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
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
        <div>
          <Formik
            initialValues={{ title: "", price: "", category: "" }}
            onSubmit={(values) => console.log("Done", values)}
          >
            <Form>
              <label htmlFor="title">Product Title</label>
              <Field
                id="title"
                name="title"
                placeholder="Title"
                className="form-control"
              />
              <div className="row">
                <div className="col-sm-6 mt-2">
                  <label htmlFor="price">Price</label>
                  <Field
                    id="price"
                    name="price"
                    placeholder="Price"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-6 mt-2">
                  <label htmlFor="title">Category</label>
                  <Field
                    id="category"
                    name="category"
                    placeholder="Category"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-12 mt-2">
                  <label htmlFor="title">Description</label>
                  <Field
                    id="description"
                    name="description"
                    placeholder="Description"
                    className="form-control"
                    as="textarea"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="form-control mt-2"
                variant={"primary"}
              >
                Submit
              </Button>
            </Form>
          </Formik>
        </div>
      </ModalComponent>
      <FooterComponent />
    </>
  );
}

export default App;
