/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
   Collapse,
} from "reactstrap";
ReactModal.setAppElement("#root");
class Signup extends React.Component {
  state = {
     
    isModalOpen:true
  };
 /*  constructor(props) {
    super(props);
    this.state = {
     
      isModalOpen:true
    };
    console.log("mphke");
  } */
 
  //That means that function is always executed on mount, will be run on start and when checkpaymentMethod changes. 
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so, pass an array as an optional second argument to useEffect: [...]

  closeModal = () => {
    
    this.state.isModalOpen=false;
   
 
  };
  render() {
console.log("moikr")
    return (
      <ReactModal
      isOpen={this.state.isModalOpen}
      onRequestClose={this.closeModal}
      contentLabel="Route"
        overlayClassName="ticket-overlay"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        shouldReturnFocusAfterClose={true}
        style={{
          content: {
            padding: 0,
            width: "50%",
            height: "80%",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)"
          }
        }}
    >
      <div className="panel-body" style={{  alignItems: "center"}}>
                  <div className="panel-head">
                    Select Seats For
                    <span onClick={this.closeModal} className={"close-modal-icon"}>
                       {"X"}
                     </span>
     <div className="section section-signup">
     
        <Row className="row-grid justify-content-between align-items-center">
         {/*  <Col lg="6">
            <h3 className="display-3 text-white">
              A beautiful Black Design{" "}
              <span className="text-white">completed with examples</span>
            </h3>
            <p className="text-white mb-3">
              The Design System comes with four pre-built pages to help you
              get started faster. You can change the text and images and
              you're good to go. More importantly, looking at them will give
              you a picture of what you can built with this powerful Bootstrap
              4 Design System.
            </p>
            <div className="btn-wrapper">
              <Button color="primary" to="register-page" tag={Link}>
                Register Page
              </Button>
            </div>
          </Col> */}
          <Col className="mb-lg-auto" lg="6">
            <Card className="card-register">
              <CardHeader>
                <CardImg
                  alt="..."
                  src={require("../../assets/img/square-purple-1.png")}
                />
                <CardTitle tag="h4">Register</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form">
                  <InputGroup
                    className={classnames({
                      "input-group-focus": this.state.fullNameFocus
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Full Name"
                      type="text"
                      onFocus={e => this.setState({ fullNameFocus: true })}
                      onBlur={e => this.setState({ fullNameFocus: false })}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": this.state.emailFocus
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="text"
                      onFocus={e => this.setState({ emailFocus: true })}
                      onBlur={e => this.setState({ emailFocus: false })}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": this.state.passwordFocus
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-lock-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="text"
                      onFocus={e => this.setState({ passwordFocus: true })}
                      onBlur={e => this.setState({ passwordFocus: false })}
                    />
                  </InputGroup>
                  <FormGroup check className="text-left">
                    <Label check>
                      <Input type="checkbox" />
                      <span className="form-check-sign" />I agree to the{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        terms and conditions
                      </a>
                      .
                    </Label>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-round" color="primary" size="lg">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>

    </div>
    </div> 
     </div>
 
    </ReactModal>
   
    );
  }
}

export default Signup;
