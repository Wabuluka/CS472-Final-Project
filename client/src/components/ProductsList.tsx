import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { API_URI } from "../config/env";
import { IProduct } from "../types/product";

function Products() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const results = await axios.get(API_URI);
      setProducts(results.data.products);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const ProductCard = ({ product }: { product: IProduct }) => {
    return (
      <div className="col-sm-12">
        <Card className="mt-4">
          <Card.Body>
            <Card.Title className="d-flex justify-content-between">
              <a className="lead">{product.name}</a>
              <p>
                $ {product.price}.<span className="small">0</span>
              </p>
            </Card.Title>
            <Card.Text className="">
              {product.description.slice(0, 100)}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
            <span>{moment(product.dateAdded).format("yyyy [ - ] MM")}</span>
            <small className="code">{product.averageRating}</small>
          </Card.Footer>
        </Card>
      </div>
    );
  };
  return (
    <div className="row">
      {products.map((product: IProduct, index: number) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default Products;
