import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router";
import { API_URI } from "../config/env";
import { IProduct } from "../types/product";
import { RatingDisplay } from "./RatingDisplay";

function Products() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const results = await axios.get(`${API_URI}/products`);
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
        <Card className="bg-light-subtle mt-4">
          <Card.Body className="placeholder-glow">
            <Card.Title className="d-flex justify-content-between">
              <h6>
                <Link className="home-link" to={`/${product._id}`}>
                  {product.name}
                </Link>
              </h6>
              <span className="cta-section">$ {product.price}</span>
            </Card.Title>
            <Card.Text className="">{product.description}</Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
            <div className="d-flex justify-content-start">
              <span>{moment(product.dateAdded).format("yyyy [ - ] MM")}</span>
              &nbsp;&nbsp;
              <RatingDisplay rating={product.averageRating} />
            </div>
            <div className="d-flex justify-content-end">
              {product.category && (
                <span className="btn btn-dark">{product?.category}</span>
              )}
            </div>
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
