// externals
import React, { useEffect, useState, useContext } from "react";
import moment, { isMoment } from "moment";
import ReactDOM from "react-dom";
import Tabs, { TabPane } from "rc-tabs";
//import SingleDatePicker from "react-dates/lib/components/SingleDatePicker";
import emailjs from 'emailjs-com';
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
    const [fromName, setfromName] = useState(null);
    const [sendSuccess, setfsendSuccess] = useState(false);
    const [details, setdetails] = useState( Object.keys(bookingDetails).map((book,index)=>{
      return book+":"+bookingDetails[book]+" "
     }));
     const [date, setBookDate] = useState(  "Extra check to the Date:"+":"+bookingDetails['date'] );

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
      
    const sendEmail=(e)=> {
        e.preventDefault();
    
        emailjs.sendForm('BookingInfromGmail', 'template_un8wsdh',  e.target, 'user_aMlscFw0hR9U6PRoOmNZb')
          .then((result) => {
              console.log(result.text);
              setfsendSuccess(true);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
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
              <form className="contact-form" onSubmit={sendEmail}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                    </InputGroupAddon>
                    <input type="text" name="to_name" placeholder="To Name" />
                       </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                    </InputGroupAddon>
                    <input type="text" name="from_name" placeholder="From Name" />
                       </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <input type="email" name="email" placeholder="EmailTo"  />
                       </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                    </InputGroupAddon>
                    <input type="text" size ="40" name="details"  value={details} readOnly/>
                       </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                    </InputGroupAddon>
                    <input type="text" size ="30" name="date"  value={date} readOnly/>
                       </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                    </InputGroupAddon>
                    <input type="text" name="message" placeholder="Message" />
                       </InputGroup>
                </FormGroup>
                <input type="submit" value="Send" />
                 </form> 
              </Form>
              {sendSuccess? 
              <div className="text-center text-muted mb-4" color="primary">
              <form className="form no-padding">
              Το mail στάλθηκε με επιτυχία! 
              </form>
              </div>
              :null}
            </CardBody>
          </Card>
        
        </Col>
      </>
       
    );
};
export default SuccessModal;
