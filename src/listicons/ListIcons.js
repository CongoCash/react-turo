import React from 'react';
import {Thumbnail, Button, Row, Col} from 'react-bootstrap';
import './ListIcons.css';

export default class ListIcons extends React.Component {

  render() {
    let iconsURL = [
      'https://cdn3.iconfinder.com/data/icons/abstract-1/512/Publicity-512.png',
      'https://www.freeiconspng.com/uploads/money-icon-29.png',
      'https://cdn3.iconfinder.com/data/icons/positive-values/128/handshake-hands-greet-512.png'
    ];

    let iconTitle = [
      'Publicity', 'Extra Money', 'Trust'
    ];

    let iconDesc = [
      'Joining our fleet gains exposure for your cars', 'Listing your car with us will earn you side money with no extra work',
      'Years of experience with car rentals'
    ];

    let icons = iconsURL.map((icon, index) => {
      return (
        <Col lg={4} md={4} sm={6} xs={12}>
          <Thumbnail className="review-icons" src={icon} alt="242x200">
            <h3>{iconTitle[index]}</h3>
            <p>{iconDesc[index]}</p>
          </Thumbnail>
        </Col>
      )
    });

    return(
      <Row>
        {icons}
      </Row>
    );

  }
}