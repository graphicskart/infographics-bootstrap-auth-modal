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
  email: "",
  password: "",
  confirmPassword: ""
};

export default class Signup extends Component {
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
                  <h3 className="text-center title-message">Welcome</h3>
                </Col>
                <Col xs={12}>
                  <Col xs={12}>
                    <Row>
                      <Col xs={12} className="google-btn">
                        <Button variant="outline-primary" block>
                          <img
                            src={require("../assets/images/google.png")}
                            style={{ width: "6%" }}
                            className="pull-left"
                          />
                          Signup with Google
                        </Button>
                      </Col>
                      <Col xs={12} className="text-center or-text">
                        <p>OR SIGNUP WITH EMAIL</p>
                      </Col>
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
                        <FormGroup>
                          <FormLabel>Password</FormLabel>
                          <FormControl
                            placeholder="Password"
                            type="password"
                            onChange={this.onChange}
                            value={this.state.user.password}
                            name="password"
                            required
                          />
                        </FormGroup>
                        <FormGroup>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl
                            placeholder="Confirm Password"
                            type="password"
                            onChange={this.onChange}
                            value={this.state.user.confirmPassword}
                            name="confirmPassword"
                            required
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
                          Sign up
                        </Button>
                      </Col>
                      <Col xs={12}>
                        <Col className="login-btn-separator" />
                      </Col>
                      <Col xs={12} className="signup-link">
                        <p className="text-center">
                          Already have account?{" "}
                          <a
                            href="javascript:void(0);"
                            onClick={() => this.props.changeStep(1)}
                          >
                            Sign in
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