import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Form
} from "react-bootstrap";

const initialUser = {
  email: ""
};

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { ...initialUser }
    };
  }

  onChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    alert("Submmited successfuly.");
    this.setState({
      user: { ...initialUser }
    });
  };

  render() {
    return (
      <Row>
        <Col xs={12}>
          <form onSubmit={this.onSubmit}>
            <Row>
              <Col xs={12} sm={6} md={12} lg={6} className="form-container">
                <Col xs={12}>
                  <h4 className="text-center title">MyApp</h4>
                  <h3 className="text-center title-message">Welcome Back</h3>
                </Col>
                <Col xs={12}>
                  <Col xs={12}>
                    <Row>
                      <Col xs={12}>
                        <FormGroup>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl
                            placeholder="Email Address"
                            onChange={this.onChange}
                            value={this.state.user.email}
                            name="email"
                            required
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                      <Col xs={12}>
                        <Button
                          variant="primary"
                          block
                          className="login-btn"
                          type="submit"
                        >
                          Submit
                        </Button>
                      </Col>
                      <Col xs={12}>
                        <Col className="login-btn-separator" />
                      </Col>
                      <Col xs={12} className="signup-link">
                        <p className="text-center">
                          <a
                            href="javascript:void(0);"
                            onClick={() => this.props.changeStep(1)}
                          >
                            Back to login
                          </a>
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Col>
              </Col>
              <Col
                xs={12}
                sm={6}
                md={12}
                lg={6}
                className="d-none d-sm-block d-md-none d-lg-block"
              >
                <img
                  src={require("../assets/images/person.jpg")}
                  style={{ height: "100%", width: "100%" }}
                />
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    );
  }
}