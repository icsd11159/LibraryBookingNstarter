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
import {Register}from " ../../../src/views/examples/Register.js";
import Signup from "../../../src/views/IndexSections/Signup.js";
import ReactModal from "react-modal";
import axios from "axios";
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
  Collapse,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Modal,
  Row,
  Col
} from "reactstrap";
import {getLogin} from "../services/api";
ReactModal.setAppElement("#root");

class ComponentsNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent",
      isModalOpen:false,
      Usermail:'',
      Password:''
    };
    this.handlePassWordChange= this.handlePassWordChange.bind(this);
    this.handleEmailChange= this.handleEmailChange.bind(this);
   // this.handleSubmit = this.handleSubmit.bind(this);
  }



  //state = {isModalOpen:false};

  //That means that function is always executed on mount, will be run on start and when checkpaymentMethod changes. 
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so, pass an array as an optional second argument to useEffect: [...]
  
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  openModal = () => {
    //console.log("This Open Modal")
    this.setState({isModalOpen:true});
  //  document.getElementById("signup-section");
    
  }
  
  handlePassWordChange(event) {
    this.setState({Password: event.target.value});
  }
  handleEmailChange(event){
    this.setState({Usermail: event.target.value});

  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.Password);
    event.preventDefault();
  }
  closeModal = () => {
    
    this.setState({isModalOpen:false});

  }
  userRegister=()=>{
    console.log(this.state.Password)
    return axios({
      url:"api/loginc",
      method:"POST",
      header:{
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      data: { password: this.state.Password, email: this.state.Usermail}
    }).then((res) => {console.log(res)})
    .then(function (response) {
      //handle success
      console.log("response");
      console.log(response);
      this.setState({isModalOpen:false});

  })
  .catch(function (response) {
      //handle error
      console.log(response)
     
  });
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
     
      <React.Fragment>  
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              title="Designed and Coded by Creative Tim"
              tag={Link}
            >
              <span>ΙΣΝ• SNF </span>
              Stavros Niarxos Foundation
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    BLK•React
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://twitter.com/CreativeTim"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Twitter"
                >
                  <i className="fab fa-twitter" />
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.facebook.com/CreativeTim"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Like us on Facebook"
                >
                  <i className="fab fa-facebook-square" />
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.instagram.com/CreativeTimOfficial"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Instagram"
                >
                  <i className="fab fa-instagram" />
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-cogs d-lg-none d-xl-none" />
                  Getting started
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/tutorial">
                    <i className="tim-icons icon-paper" />
                    Documentation
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/register-page">
                    <i className="tim-icons icon-bullet-list-67" />
                    Register Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/landing-page">
                    <i className="tim-icons icon-image-02" />
                    Landing Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/profile-page">
                    <i className="tim-icons icon-single-02" />
                    Profile Page
                  </DropdownItem>
                </DropdownMenu>
               
              </UncontrolledDropdown>
              <NavItem>
              <Button color="primary"   /* to="register-page" tag={Link}  */
              onClick={this.openModal}
              >
                  Sign Up/Registers
                </Button>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="default"
                  onClick={this.scrollToDownload}
                >
                  <i className="tim-icons icon-cloud-download-93" /> Download
                </Button>
                
              </NavItem>
              
            </Nav>
            
          </Collapse>
          
        </Container>
    
      </Navbar>
     
  
      <Col sm="5" md="7">
     <Modal
    
     isOpen={this.state.isModalOpen}
    
     >
 <Button color="primary"   /* to="register-page" tag={Link}  */
              onClick={this.closeModal}
              >
                  Close
                </Button>
       
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                     <img
                      alt="..."
                      src={require("../../assets/img/icons/common/github.svg")}
                    /> 
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("../../assets/img/icons/common/google.svg")}
                    /> 
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5" >
              <div className="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <Form role="form" >
                <FormGroup className="mb-3" >
                  <InputGroup className="input-group-alternative  " style={{backgroundColor: '#B59CB8'}}>
                    <InputGroupAddon addonType="prepend" >
                      <InputGroupText   >
                        <i className="ni ni-email-83"  />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input 
                    placeholder="Email"
                     type="email" 
                     autoComplete="new-email"
                     value={this.state.Usermail} 
                     onChange={this.handleEmailChange}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative"  style={{backgroundColor: '#B59CB8'}}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password"
                     id ="password "
                     type="password"
                      autoComplete="new-password"
                      value={this.state.Password} 
                      onChange={this.handlePassWordChange}  />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                    color="primary"
                    style={{color:"primary"}}

                  />
                 
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                 
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={this.userRegister}>
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3"  style={{color:"primary"}}>
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
                color="primary"
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
               
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
     
    
</Modal>
</Col>


</React.Fragment>
    );
  }
}

export default ComponentsNavbar;
