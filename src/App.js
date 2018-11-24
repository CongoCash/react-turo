import React, { Component } from 'react';
import logo from './logo.svg';
import {Grid, Row, Col, Tabs, Tab, Nav, NavItem} from 'react-bootstrap';
import Navigation from './navigation/Navigation';
import CarouselImages from './carousel/Carousel';
import RentIcons from './renticons/RentIcons';
import ListIcons from './listicons/ListIcons';
import Fleet from './fleet/Fleet';
import RentReviews from './rentreviews/RentReviews';
import Listing from './listing/Listing';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rent: true
    }
  }

  clickRent = (e) => {
    document.getElementById("list").style.borderBottom = 'none';
    e.target.style.borderBottom = '3px solid red';
    this.setState({
      rent: true,
    })
  };

  clickList = (e) => {
    document.getElementById("rent").style.borderBottom = 'none';
    e.target.style.borderBottom = '3px solid red';
    this.setState({
      rent: false
    })
  };

  render() {
    return (
      <div className="App">
        <Grid fluid>
          <Row>
            <Col sm={12} className="width-100">
              <Navigation />
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="width-100">
              <CarouselImages />
            </Col>
          </Row>
          <Row>
            <Col xs={3}></Col>
            <Col xs={3}>
              <h3 onClick={this.clickRent} className="margin-section" id="rent">Rent a car</h3>
            </Col>
            <Col xs={3}>
              <h3 onClick={this.clickList} className="margin-section" id="list">List your car</h3>
            </Col>
            <Col xs={3}></Col>
          </Row>
          {this.state.rent ?
            <React.Fragment>
              <RentIcons />
              <RentReviews />
              <Row className="margin-section">
                <Col sm={12}>
                  <h1 className="archivo margin-section">OUR FLEET</h1>
                </Col>
              </Row>
            </React.Fragment>
            :
            <React.Fragment>
              <ListIcons/>
            </React.Fragment>

          }
          <Row>
            <Col sm={12}>
              {this.state.rent ?
                <Fleet /> :
                <Listing />
              }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
