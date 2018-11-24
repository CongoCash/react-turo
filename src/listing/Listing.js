import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './Listing.css'

export default class Listing extends React.Component {

  

  render() {
    let iconURLs = [
      'https://cdn1.iconfinder.com/data/icons/strongicon-vol-18/24/emoticon-20-512.png',
      'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678090-camera-512.png',
      'https://images.vexels.com/media/users/3/146254/isolated/preview/2e8184c5bcdb44acaf2157771ffe21ea-clean-sparkling-car-icon-by-vexels.png'
    ]

    let iconDesc = [
      'We will list your car amongst our trusted fleet of cars',
      'When your car gets rented, we will perform pre-rental inspections and photos',
      'We deliver the car to the renter and perform post-rent inspection and photos prior to returning the car to you'
    ];

    let listingDesc = iconURLs.map((url, index) => {
      return (
        <Row className="flex-center">
          <Col lgOffset={2} xs={2} >
            <img src={url} height={75} width={75}/>
          </Col>
          <Col lg={6} xs={10} >
            <h4 className="text-left list-text">
              {iconDesc[index]}
            </h4>
          </Col>
        </Row>
      )
    });

    return(
      <React.Fragment>
        <Row className="underline">
          <Col xs={12}>
            <h1>How it works</h1>
          </Col>
        </Row>
        {listingDesc}
        <Row>
          <Col lgOffset={2} lg={8}xs={12}>
            <h1>Get Started</h1>
            <h3>
              Email us at danieljue@gmail.com to get started
            </h3>
          </Col>
        </Row>
      </React.Fragment>
    );

  }
}