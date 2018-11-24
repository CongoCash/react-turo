import React from 'react';
import {Thumbnail, Button, Row, Col} from 'react-bootstrap';
import './Fleet.css';

export default class Fleet extends React.Component {

  render() {
    let imageURL = [
      "https://d2t6ms4cjod3h9.cloudfront.net/wp-content/uploads/2014/07/bmw-i8-protonic-blue-6.jpg",
      "https://www-europe.nissan-cdn.net/content/dam/Nissan/za/vehicles/gt-r/product_code/product_version/overview/1160x600_SA_GTR_PEARL%20WHITE.jpg.ximg.m_12_h.smart.jpg",
      "https://www.keithpiersontoyota.com/assets/stock/ColorMatched_01/White/640/cc_2018TOC160003_01_640/cc_2018TOC160003_01_640_3T7.jpg",
      "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/17q1/674191/2018-jaguar-xf-photos-and-info-news-car-and-driver-photo-675930-s-original.jpg",
      "https://d2t6ms4cjod3h9.cloudfront.net/wp-content/uploads/2014/07/bmw-i8-protonic-blue-6.jpg",
      "https://www-europe.nissan-cdn.net/content/dam/Nissan/za/vehicles/gt-r/product_code/product_version/overview/1160x600_SA_GTR_PEARL%20WHITE.jpg.ximg.m_12_h.smart.jpg",
      "https://www.keithpiersontoyota.com/assets/stock/ColorMatched_01/White/640/cc_2018TOC160003_01_640/cc_2018TOC160003_01_640_3T7.jpg",
      "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/17q1/674191/2018-jaguar-xf-photos-and-info-news-car-and-driver-photo-675930-s-original.jpg",


    ];

    let images = imageURL.map((image, index) => {
        return (
            <Col lg={3} md={4} sm={6} xs={12} className="fleet-padding">
              <Thumbnail className="fleet-image" src={image} alt="242x200">
                <h3>Thumbnail label</h3>
                <p>BMW I8</p>
                <p>
                  <Button bsStyle="primary">Rent</Button>
                </p>
              </Thumbnail>
            </Col>
        )
      }
    )

    return(
      <React.Fragment>
        <Row>
          {images}
        </Row>
      </React.Fragment>
    );

  }
}