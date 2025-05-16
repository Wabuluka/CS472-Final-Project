import axios from "axios";
import { Field, Form, Formik } from "formik";
import moment from "moment";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { RatingDisplay } from "../components/RatingDisplay";
import { API_URI } from "../config/env";
import { IReview } from "../types/review";

export default function SingleProduct() {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const { id } = useParams();

  useEffect(() => {
    async function getProductReviews() {
      const results = await axios.get(`${API_URI}/reviews/${id}/reviews`);
      setReviews(results.data);
    }
    getProductReviews();
  }, [id]);

  async function handleReviewSubmit(values: IReview) {
    try {
      const review = await axios.post(
        `${API_URI}/reviews/${id}/reviews`,
        values
      );
      console.log(review);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(reviewId?: string) {
    try {
      const values = {
        reviewId,
        productId: id,
      };
      await axios.delete(`${API_URI}/reviews/reviews`, { data: values });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="row mb-5">
        <div className="col-lg-12 ">
          <Formik
            initialValues={{ author: "", comment: "", rating: "" }}
            onSubmit={(values) => handleReviewSubmit(values)}
          >
            <Form>
              <div className="row">
                <div className="col-lg-6">
                  <label htmlFor="author">Author Name</label>
                  <Field
                    id="author"
                    name="author"
                    placeholder="Author"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="title">Rating out 5</label>
                  <Field as="select" name="rating" className="form-control">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Field>
                </div>
                <div className="col-sm-12 mt-2">
                  <label htmlFor="title">Comment</label>
                  <Field
                    id="comment"
                    name="comment"
                    placeholder="Comment"
                    className="form-control"
                    as="textarea"
                  />
                </div>
              </div>
              <Button type="submit" className="btn btn-dark mt-3">
                Submit Review
              </Button>
            </Form>
          </Formik>
        </div>
        <hr className="mt-3" />
      </div>
      <div className="row">
        <div className="col-lg-12">
          product id: <strong>{id}</strong>
        </div>
        {reviews.length !== 0 ? (
          reviews.map((review, _index) => (
            <div className="col-lg-12 mb-2" key={_index}>
              <div className="card bg-light-subtle border">
                <div className="card-header d-flex justify-content-between">
                  <div className="d-flex justify-content-start">
                    <RatingDisplay rating={Number(review.rating) || 0} />
                    &nbsp;&nbsp;
                    <span>
                      Author <strong>{review.author}</strong>
                    </span>
                  </div>
                  <p>{moment(review?.date).format("yyyy [-] MM")}</p>
                </div>
                <div className="card-body">{review.comment}</div>
                <Card.Footer>
                  <button
                    type="button"
                    className="btn danger"
                    style={{ color: "gray" }}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn danger"
                    style={{ color: "red" }}
                    onClick={() => handleDelete(review?._id)}
                  >
                    Delete
                  </button>
                </Card.Footer>
              </div>
            </div>
          ))
        ) : (
          <div className="col">
            <div className="card">
              <div className="card-body">No reviews found</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
