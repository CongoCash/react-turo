import React from 'react';
import {Thumbnail, Button, Row, Col} from 'react-bootstrap';
import './RentReviews.css';

export default class RentReviews extends React.Component {

  render() {

    let reviewsDesc = [
      'Awesome car. Easy person to deal with!',
      'This was a great rental!!! The car was ready to go and was an eye catcher!!!  Would gladly recommend, thanks for a fun time!!!',
      'Thank you! You are truly the best!!!'
    ];

    let reviews = reviewsDesc.map((review, index) => {
      return (
        <Row>
          <Col xs={4}>
            <div className="review-margin">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
          </Col>
          <Col xs={8}>
            <h5 className="review-desc">{review}</h5>
          </Col>
        </Row>
      )
    });

    return(
      <React.Fragment>
        <Row className="flex-center review-bg">
          <Col className="padding-0" xs={12}>
            <h2 className="review-title">Reviews</h2>
          </Col>
        </Row>
        {reviews}
      </React.Fragment>
    );

  }
}