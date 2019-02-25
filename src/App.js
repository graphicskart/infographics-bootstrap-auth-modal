import React, { Component } from 'react';
import {
  Button,
  Modal,
  Col
} from 'react-bootstrap';
import './App.css';
import { Login, Signup, ForgotPassword } from './components';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      step: 1
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true, step: 1 });
  }

  changeStep = (step) =>{
    this.setState({
      step
    });
  }

  render() {
    return (
      <div>
        <Col className="text-center">
          <Button variant="primary" onClick={this.handleShow}>
            Login
          </Button>
        </Col>
        <Modal 
          show={this.state.show} 
          onHide={this.handleClose} 
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            {this.state.step === 1?<Login changeStep={this.changeStep} />:null}
            {this.state.step === 2?<Signup changeStep={this.changeStep} />:null}
            {this.state.step === 3?<ForgotPassword changeStep={this.changeStep} />:null}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default App;