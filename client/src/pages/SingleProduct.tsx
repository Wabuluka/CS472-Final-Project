import axios from "axios";
import { Field, Form, Formik } from "formik";
import moment from "moment";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
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
      console.log(values);
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
                  <Field
                    id="rating"
                    name="rating"
                    placeholder="Rating"
                    className="form-control"
                  />
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
              <Button type="submit" className="btn btn-primary mt-3">
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
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <p>
                    by<code> {review.author}</code>
                  </p>
                  <p>{moment(review?.date).format("yyyy [-] MM")}</p>
                </div>
                <div className="card-body">{review.comment}</div>
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
