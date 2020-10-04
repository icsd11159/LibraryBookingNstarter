// externals
import React, { useEffect, useState, useContext } from "react";
import moment, { isMoment } from "moment";
import ReactDOM from "react-dom";
import Tabs, { TabPane } from "rc-tabs";
//import SingleDatePicker from "react-dates/lib/components/SingleDatePicker";

import DatePicker from "react-datepicker";
import "react-dates/lib/css/_datepicker.css";
import "react-datepicker/dist/react-datepicker.css";

import AppContext from "../../services/context";
// components

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


// helpers/api/constants/config

const SuccessModal = props => {
    const store = useContext(AppContext);
    const { handleGetLibrarySeat,handleDateChange, handleBookindSeats} = store.methods;
    const { rowsSeats,  bookingDay , bookingDetails,bookingSuccess } = store.state;
    const { orofos } = props;


    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {  
       
            if(bookingSuccess){
              setIsModalOpen(true);
          }
      
      }, []); 
      const openModal =(index) => {
        setIsModalOpen(true);
   
      //  setIntermediateStopsCoords(intermediateStopsCoords);
      };
      const closeModal = () => {
        setIsModalOpen(false);
   
      };
      

    return (
       
        <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Φόρμα Αποστολής</small>
              </div>
              
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
               <div className="panel-body">
                      <form className="form no-padding">
           Συγχαρητήρια! Η κράτησή σου πραγματοποιήθηκε με επιτυχία! 
           Με τα εξής στοιχεία:
            <div>
            <span>
           {Object.keys(bookingDetails).map((book,index)=>{
            return "   "+book+":"+bookingDetails[book]+"   "
           })}
           </span>
           </div>
           Αν θέλεις να αποσταλεί mail στους υπόλοιπους Αναγνώστες συμπλήρωσε τα στοιχεία τους
         
           </form>
           </div>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" autoComplete="new-email"/>
                  </InputGroup>
                </FormGroup>
             
              
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Αποστολή Email
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        
        </Col>
      </>
       
    );
};
export default SuccessModal;
