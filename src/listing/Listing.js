import React from 'react';
import {FormGroup, FormControl, ControlLabel, HelpBlock, Row, Col} from 'react-bootstrap';

export default class List extends React.Component {

  render() {

    return(
      <React.Fragment>
        <form>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>
        </form>
      </React.Fragment>
    );

  }
}