import React from 'react';
import {Thumbnail, Button, Row, Col} from 'react-bootstrap';
import './RentIcons.css';

export default class RentIcons extends React.Component {

  render() {
    let iconsURL = [
      'https://s3.amazonaws.com/iconbros/icons/icon_pngs/000/000/704/original/quality.png?1513425680',
      'https://www.freeiconspng.com/uploads/low-price-icon-17.png',
      'https://cdn2.iconfinder.com/data/icons/cars-10/512/i8-512.png'
    ];

    let iconTitle = [
      'Guarantee Quality', 'Lowest Prices', 'Variety'
    ];

    let iconDesc = [
      'We verify the quality of our cars prior to each trip', 'Always the lowest prices around',
      'Cars to fit all your needs'
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
      <React.Fragment>
        {icons}
      </React.Fragment>
    );

  }
}