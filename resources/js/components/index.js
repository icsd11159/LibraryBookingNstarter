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
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
    Router
} from "react-router-dom";
import { SingleDatePicker } from "react-dates";
import "../../../src/assets/css/nucleo-icons.css";
import "../../../src/assets/scss/blk-design-system-react.scss?v=1.0.0";
import "../../../src/assets/demo/demo.css";
/* import 'react-tabs/style/react-tabs.css'; */
/* import { Tabs, TabPane } from "rc-tabs"; */
import { AppProvider } from "../services/context";
import PageHeader from "../../../src/components/PageHeader/PageHeader.jsx";
import { Button } from "reactstrap";
/* import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar"; */
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

// core components
import IndexNavbar from "../../../src/components/Navbars/IndexNavbar.js";

import Footer from "../../../src/components/Footer/Footer.jsx";

// sections for this page/view
import Basics from "../../../src/views/IndexSections/Basics.jsx";

//import Tabs from "../../../src/views/IndexSections/Tabs.jsx";
//import Tabs, { TabPane } from "rc-tabs";
import Pagination from "../../../src/views/IndexSections/Pagination.jsx";
import Notifications from "../../../src/views/IndexSections/Notifications.jsx";
import Typography from "../../../src/views/IndexSections/Typography.jsx";
import JavaScript from "../../../src/views/IndexSections/JavaScript.jsx";
import NucleoIcons from "../../../src/views/IndexSections/NucleoIcons.jsx";
import Signup from "../../../src/views/IndexSections/Signup.js";
import Examples from "../../../src/views/IndexSections/Examples.jsx";
import Download from "../../../src/views/IndexSections/Download.jsx";
import Navbars from "../../../src/views/IndexSections/Navbars.js";
import Register from " ../../../src/views/examples/Register.js";
import "../../../src/App.css";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Alert } from "reactstrap";
import SeatPlan from "./Seats/SeatPlan.js";
import Seats from "./Seats/Seats.js";
import SuccessModal from "./Seats/SuccessModal.js";

import DatePicker from "react-dates/lib/components/SingleDatePicker";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import classnames from "classnames";
import moment from "moment";
import {
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Nav,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavItem,
    NavLink
} from "reactstrap";
import ReactModal from "react-modal";
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggein: false,
            visibleAlert: false,
            menunumber: 1,
            iconTabs: 1,
            textTabs: 4,
            rowsSeats: null,
            bookingDay: null,
            currentMonth: null,
            currentYear: null,
            username: null,
            bookingSuccess: false,
            bookingDetails: null,
            pososto_pl: null,
            from_hour: "10:00",
            to_hour: "11:00",
            orofos: "Ισόγειο",
            books: [],
            borrowed: "Επέλεξε βιβλίο",
            book_id: null,
            borrowSuccess: false,
            suggested: [],
            suggested_category: [],
            suggested_writer: [],
            suggestedSelected:{},
            epilogi:null,
            history:[]

            /*   rowsSeat:[[{number:'1A' , table:false, isReserved:false, orientation:true ,tooltip:"1A"},{number:"1B" , table:true, isReserved:false, orientation:false ,tooltip:"TABLE"}],
  [{number:"T" , table:false, isReserved:false, orientation:false ,tooltip:"TABLE"}],
  [{number:'1' , table:false, isReserved:false, orientation:false ,tooltip:"1"}]] 
     */
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.onShowAlert = this.onShowAlert.bind(this);
        this.handleKrathseis = this.handleKrathseis.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleTabs = (e, stateName, index, orofos) => {
        console.log(orofos);
        e.preventDefault();
        this.setState(
            {
                [stateName]: index,
                orofos: orofos
            },
            () => {
                {
                    this.state.from_hour &&
                        this.state.to_hour &&
                        this.state.bookingDay &&
                        (this.HasCheckins(),
                        this.handleGetSeat(
                            this.state.responseSeat,
                            moment(this.state.bookingDay)
                        ));
                }
            }
        );
    };
    handleDateChange = date => {
        this.setState(
            {
                bookingDay: date
            },
            () => {
                console.log(this.state.bookingDay);
                {
                    this.state.from_hour &&
                        this.state.to_hour &&
                        (this.HasCheckins(),
                        this.handleGetSeat(
                            this.state.responseSeat,
                            moment(date)
                        ));
                    this.seatLibrary();
                }
            }
        );
    };

    onTimeChange = time => {
        this.setState(
            {
                from_hour: time
            },
            () => {
                console.log(time);
                {
                    this.state.bookingDay &&
                        this.state.to_hour &&
                        (this.HasCheckins(),
                        this.handleGetSeat(
                            this.state.responseSeat,
                            moment(this.state.bookingDay)
                        ));
                }
            }
        );
    };
    onTimeToChange = time => {
        this.setState(
            {
                to_hour: time
            },
            () => {
                console.log(time);
                {
                    this.state.from_hour &&
                        this.state.bookingDay &&
                        (this.HasCheckins(),
                        this.handleGetSeat(
                            this.state.responseSeat,
                            moment(this.state.bookingDay)
                        ));
                }
            }
        );
    };

    HasCheckins = () => {
        //const alert = useAlert();

        return axios({
            url: "api/hascheckins",
            method: "GET",
            header: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            params: {
                date: this.state.bookingDay,
                from_hour: this.state.from_hour,
                to_hour: this.state.to_hour,
                orofos: this.state.orofos
            }
        })
            .then(res => {
                if (!res.data) {
                    console.log(res.data);
                    this.setState({ pososto_pl: " " });
                } else {
                    console.log("pososto");
                    console.log(res.data);

                    // this.setState({rowsSeats:null } ,()=>{
                    //  let orofos=[{'Ισόγειο':[],'Όροφος1':[],'Όροφος2':[],'Όροφος3':[]}];//
                    this.setState({
                        pososto_pl:
                            "Ο χώρος είναι πλήρης κατά " +
                            res.data.toFixed(2) +
                            "% με βάση τα check In των Επισκεπτών"
                    });

                    // });
                }
            })

            .catch(function($response) {
                //handle error
                console.log($response);
                // this.props.handleLogin(false);
            });
    };
    handleBorrowBook = book => {
        console.log("handleBorrowBook");
        console.log(book);
        this.setState({ borrowed: book.book_name, book_id: book.id });
    };
    seatLibrary = () => {
        //const alert = useAlert();
        if (this.state.bookingDay) {
            return axios({
                url: "api/libraryseats",
                method: "GET",
                header: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                params: { date: this.state.bookingDay }
            })
                .then(res => {
                    if (!res.data) {
                        console.log(res.data);
                    } else {
                        console.log(res.data);

                        // this.setState({rowsSeats:null } ,()=>{
                        //  let orofos=[{'Ισόγειο':[],'Όροφος1':[],'Όροφος2':[],'Όροφος3':[]}];//
                        this.setState(
                            { rowsSeats: null, responseSeat: res.data },
                            () => {
                                let resp = res.data;
                                this.handleGetSeat(resp, moment());
                            }
                        );

                        // });
                    }
                })

                .catch(function($response) {
                    //handle error
                    console.log($response);
                    // this.props.handleLogin(false);
                });
        }
    };
    handleGetBook = () => {
        console.log("handleGetBook");

        return axios({
            url: "api/getbook",
            method: "GET",
            header: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
            .then(res => {
                if (!res.data) {
                    console.log(res.data);
                } else {
                    // this.setState({rowsSeats:null } ,()=>{
                    //  let orofos=[{'Ισόγειο':[],'Όροφος1':[],'Όροφος2':[],'Όροφος3':[]}];//
                    this.setState({
                        books: res.data
                    });
                    console.log("books");
                    console.log(res.data);
                    // });
                }
            })

            .catch(function($response) {
                //handle error
                console.log($response);
                // this.props.handleLogin(false);
            });
    };
    handleBookindSeats = (passengersPlans, bookingDay) => {
        console.log("handleBookindSeats");
        console.log(bookingDay);
        console.log(passengersPlans);
        return axios({
            url: "api/bookingseats",
            method: "GET",
            header: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            params: {
                date: bookingDay,
                seats: passengersPlans,
                username: this.state.username,
                from_hour: this.state.from_hour,
                to_hour: this.state.to_hour
            }
        })
            .then(res => {
                if (!res.data) {
                    console.log(res.data);
                } else {
                    console.log(res.data);

                    // this.setState({rowsSeats:null } ,()=>{
                    //  let orofos=[{'Ισόγειο':[],'Όροφος1':[],'Όροφος2':[],'Όροφος3':[]}];//
                    this.setState({
                        bookingSuccess: true,
                        bookingDetails: res.data
                    });
                    // });
                }
            })

            .catch(function($response) {
                //handle error
                console.log($response);
                // this.props.handleLogin(false);
            });
    };
    handleTheBorrow = () => {
        return axios({
            url: "api/borrowbook",
            method: "POST",
            header: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            params: {
                id: this.state.book_id,
                user: this.state.username
            }
        })
            .then(res => {
                if (!res.data) {
                    console.log(res.data);
                } else {
                    console.log(res.data);

                    // this.setState({rowsSeats:null } ,()=>{
                    //  let orofos=[{'Ισόγειο':[],'Όροφος1':[],'Όροφος2':[],'Όροφος3':[]}];//
                    this.setState({
                        borrowSuccess: true
                    },()=>{
                        this.handleGeτSuggestedfromusers(this.state.book_id)
                    });
                    // });
                }
            })

            .catch(function($response) {
                //handle error
                console.log($response);
                // this.props.handleLogin(false);
            });
    };
    handleGetSeat = (resp, date) => {
        let all = {};
        let seatsl = [];
        resp &&
            Object.keys(resp).map((rows, index) => {
                seatsl = [];

                resp[rows] &&
                    resp[rows].map((row, index) => {
                        let oneseat = null;
                        if (row.type === "corridor") {
                            oneseat = null;
                        } else if (row.type === "table") {
                            oneseat = {
                                number: "T",
                                table: true,
                                isReserved: true,
                                orientation: false,
                                tooltip: "TABLE"
                            };
                        } else {
                            let num = row.id;
                            let orientationn = false;
                            let isReserved = false;

                            let tooltips =
                                row.room_name +
                                "," +
                                row.seat_number +
                                "," +
                                row.tooltip;

                            if (row.reverseOrientation === 1) {
                                orientationn = true;
                            }
                            console.log(date);

                            //gia na mhn epilegei prohgoumenes meres
                            if (
                                (row.date && moment(row.date).isSame(date)) ||
                                moment(row.date).isSameOrAfter(moment())
                            ) {
                                if (parseInt(row.reserved) === 1) {
                                    isReserved = true;
                                    tooltips = tooltips + ":" + row.user_name;
                                } else {
                                    tooltips = tooltips + ", free";
                                }
                            } else {
                                tooltips = tooltips + ", free";
                            }
                            oneseat = {
                                number: row.seat_number,
                                table: false,
                                id: num,
                                isReserved: isReserved,
                                orientation: orientationn,
                                tooltip: tooltips
                            };
                        }
                        let myrow = parseInt(row.row);
                        seatsl[myrow]
                            ? seatsl[myrow].push(oneseat)
                            : seatsl.push([oneseat]);
                    });

                all = {
                    ...all,
                    [rows]: seatsl
                };
            });

        this.setState({
            rowsSeats: all
        });
        console.log(this.state.rowsSeats);
    };
    handleGetLibrarySeat = orofos => {
        console.log("orofos");
        console.log(orofos);
        this.seatLibrary();
    };

    componentDidMount() {
        document.body.classList.toggle("index-page");
    }
    componentWillUnmount() {
        document.body.classList.toggle("index-page");
    }
    // optional cofiguration
    handleLogin = (log, username) => {
        this.state.isLoggein = log;
        this.setState({ username: username }, () => {
            this.handleGeτSuggested(username);
            this.handleHistory(username);
        });
        this.handleGetBook();
        console.log(username);
        //  this.onShowAlert();
    };
    onShowAlert = () => {
        this.setState({ visibleAlert: true }, () => {
            window.setTimeout(() => {
                this.setState({ visibleAlert: false });
            }, 3000);
        });
    };
    handleGeτSuggestedfromusers = book_id => {

        return axios({
            url: "api/suggestedSelectedbook",
            method: "GET",
            header: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            params: {
                book_id: book_id,
                user: this.state.username
            }
        })
            .then(res => {
                if (!res.data) {
                    console.log(res.data);
                } else {
                    console.log(res.data);

                    // this.setState({rowsSeats:null } ,()=>{
                    //  let orofos=[{'Ισόγειο':[],'Όροφος1':[],'Όροφος2':[],'Όροφος3':[]}];//
                    this.setState({
                        suggestedSelected: res.data,
                        epilogi:" Χρήστες που δανείστηκαν το  "+ this.state.borrowed+
                        " προτίμησαν και αυτά:"
                    });

                    // });
                }
            })

            .catch(function($response) {
                //handle error
                console.log($response);
                // this.props.handleLogin(false);
            });

    }; 
    //afou epileksei ena me vasi xristes
    handleGeτSuggested = username => {
        //me oti exei epileksei mexri twra
        return axios({
            url: "api/suggestedbook",
            method: "GET",
            header: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            params: {
                user: this.state.username
            }
        })
            .then(res => {
                if (!res.data) {
                    console.log(res.data);
                } else {
                    console.log(res.data);

                    // this.setState({rowsSeats:null } ,()=>{
                    //  let orofos=[{'Ισόγειο':[],'Όροφος1':[],'Όροφος2':[],'Όροφος3':[]}];//
                    this.setState({
                        suggested: res.data,
                        suggested_category: res.data["category"],
                        suggested_writer: res.data["writer"]
                    });

                    // });
                }
            })

            .catch(function($response) {
                //handle error
                console.log($response);
                // this.props.handleLogin(false);
            });
    };
    //istoriko
    handleHistory = username => {
        //me oti exei epileksei mexri twra
        return axios({
            url: "api/history",
            method: "GET",
            header: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            params: {
                user: this.state.username
            }
        })
            .then(res => {
                if (!res.data) {
                    console.log(res.data);
                } else {
                    console.log("history");
                    console.log(res.data);

                    // this.setState({rowsSeats:null } ,()=>{
                    //  let orofos=[{'Ισόγειο':[],'Όροφος1':[],'Όροφος2':[],'Όροφος3':[]}];//
                    this.setState({
                        history: res.data
                    });

                    // });
                }
            })

            .catch(function($response) {
                //handle error
                console.log($response);
                // this.props.handleLogin(false);
            });
    };
    handleKrathseis = number => {
        console.log(number);
        this.setState = { menunumber: number };
    };
    handlemonthChange = month => {
        //fix callendar
        this.setState({
            currentMonth: month
        });
    };
    handleyearChange = year => {
        //fix callendar
        this.setState({
            currentYear: year
        });
    };

    render() {
        return (
            <div>
                <AppProvider
                    value={{
                        state: this.state,
                        methods: {
                            handleGetLibrarySeat: this.handleGetLibrarySeat,
                            handleDateChange: this.handleDateChange,
                            handleBookindSeats: this.handleBookindSeats,
                            onTimeChange: this.onTimeChange,
                            onTimeToChange: this.onTimeToChange
                        }
                    }}
                >
                    <BrowserRouter>
                        <Route>
                            <IndexNavbar handleLogin={this.handleLogin} />

                            <div>
                                {this.state.isLoggein ? (
                                    <Alert
                                        color="success"
                                        isOpen={this.state.visibleAlert}
                                    >
                                        This is a success alert — check it out!
                                    </Alert>
                                ) : null}
                            </div>
                            <div className="wrapper">
                                <div className="main">
                                    <PageHeader />
                                    <div>
                                        <Container>
                                        <div>
                                            Προτείνεται με βάση τον
                                                    συγγραφέα:
                                                    &nbsp;
                                                    Προτείνεται με βάση την
                                                    κατηγορία:
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                     &nbsp;&nbsp;&nbsp;&nbsp;
                                                      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                      &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;
                                                      &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                                                      &nbsp;&nbsp;
                                                    {this.state.epilogi?this.state.epilogi:null}
                                                    </div>
                                            <div margin="25px">
                                               
                                                {this.state.suggested_writer &&
                                                this.state.isLoggein &&
                                                this.state.suggested_writer[
                                                    "id"
                                                ] ? (
                                                    
                                                    
                                                
                                                    <img
                                                        className="photo"
                                                        alt={this.state
                                                            .suggested_writer[
                                                            "book_name"
                                                        ]}
                                                        src={require("../../../public/images/books/" +
                                                            this.state
                                                                .suggested_writer[
                                                                "id"
                                                            ] +
                                                            ".jpg")}
                                                    />
                                                  
                                                ) : null}
                                              &nbsp;&nbsp;&nbsp;&nbsp;
                                              &nbsp;&nbsp;&nbsp;&nbsp;
                                              &nbsp;&nbsp;&nbsp;&nbsp;
                                              &nbsp;&nbsp;
                                             
                                                {this.state.isLoggein &&
                                                this.state.suggested_category &&
                                                this.state.suggested_category.length>0
                                                  ? (
                                                   
                                                    this.state.suggested_category.map((category,index)=>{
                                                        return(
                                                           
                                                    <img
                                                        className="photo"
                                                        alt={ this.state
                                                            .suggested_category[index][
                                                            "book_name"
                                                        ] }
                                                        src={require("../../../public/images/books/" +
                                                            this.state
                                                                .suggested_category[index][
                                                                "id"
                                                            ] +
                                                            ".jpg")}
                                                    />
                                                    
                                                    
                                                  
                                                        );
                                                        
                                                })
                                               
                                                ) : null}
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                     &nbsp;&nbsp;&nbsp;&nbsp;
                                                      &nbsp;&nbsp;
                                                     
                                                    {this.state.isLoggein && this.state.suggestedSelected   ? (
                                                   
                                                   Object.keys(this.state.suggestedSelected).map((category,index)=>{
                                                  console.log(this.state
                                                    .suggestedSelected[category].book_id)
                                                       return(
                                                         
                                                   <img
                                                       className="photo"
                                                       
                                                       src={require("../../../public/images/books/" +
                                                           this.state .suggestedSelected[category].book_id
                                                           +".jpg")}
                                                   />
                                                   
                                                   
                                                 
                                                       );
                                                       
                                               })
                                              
                                               ) : null}
                                             
                                            </div>
                                            
                                        </Container>
                                      
                                    </div>
                                    <div className="section section-tabs">
                                        <Container>
                                            <div>
                                                <button
                                                    type="button"
                                                    className="btn-round"
                                                    color="primary"
                                                    size="lg"
                                                    onClick={e =>
                                                        this.handleTheBorrow()
                                                    }
                                                >
                                                    Ιστορικό Κρατήσεων
                                                </button>

                                                <UncontrolledDropdown nav>
                                                    <DropdownToggle
                                                        caret
                                                        color="default"
                                                        data-toggle="dropdown"
                                                        href="#pablo"
                                                        nav
                                                        onClick={e =>
                                                            e.preventDefault()
                                                        }
                                                    >
                                                        <i className="fa fa-cogs d-lg-none d-xl-none" />
                                                        Τα βιβλία μου
                                                    </DropdownToggle>
                                                    <DropdownMenu
                                                        size="40"
                                                        heigh="40"
                                                        width="40"
                                                    >
                                                        {this.state.history &&
                                                            this.state.history
                                                                .length > 0 &&
                                                            this.state.history.map(
                                                                (
                                                                    book,
                                                                    index
                                                                ) => {
                                                                   
                                                                    return (
                                                                        <DropdownItem
                                                                            size="40"
                                                                            heigh="40"
                                                                            width="40"
                                                                            id={
                                                                                index
                                                                            }
                                                                           
                                                                        >
                                                                            {
                                                                                this
                                                                                    .state
                                                                                    .history[
                                                                                    index
                                                                                ][0]
                                                                                    .book_name
                                                                            }
                                                                        </DropdownItem>
                                                                    );
                                                                }
                                                            )}
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                            </Container>
                                            </div>
                                    <div className="section section-tabs">
                                        <Container>
                                            <div>
                                                <button
                                                    type="button"
                                                    className="btn-round"
                                                    color="primary"
                                                    size="lg"
                                                    onClick={e =>
                                                        this.handleTheBorrow()
                                                    }
                                                >
                                                    Κράτηση Βιβλίου
                                                </button>
                                                {this.state.borrowSuccess
                                                    ? "Ο δανεισμός του βιβλίου έγινε με επιτυχία"
                                                    : null}

                                                <UncontrolledDropdown nav>
                                                    <DropdownToggle
                                                        caret
                                                        color="default"
                                                        data-toggle="dropdown"
                                                        href="#pablo"
                                                        nav
                                                        onClick={e =>
                                                            e.preventDefault()
                                                        }
                                                    >
                                                        <i className="fa fa-cogs d-lg-none d-xl-none" />
                                                        {this.state.borrowed}
                                                    </DropdownToggle>
                                                    <DropdownMenu
                                                        size="40"
                                                        heigh="40"
                                                        width="40"
                                                    >
                                                        {this.state.books &&
                                                            this.state.books
                                                                .length > 0 &&
                                                            this.state.books.map(
                                                                (
                                                                    book,
                                                                    index
                                                                ) => {
                                                                    {
                                                                        console.log(
                                                                            this
                                                                                .state
                                                                                .books[
                                                                                index
                                                                            ]
                                                                                .book_name
                                                                        );
                                                                    }
                                                                    return (
                                                                        <DropdownItem
                                                                            size="40"
                                                                            heigh="40"
                                                                            width="40"
                                                                            id={
                                                                                index
                                                                            }
                                                                            onClick={e =>
                                                                                this.handleBorrowBook(
                                                                                    this
                                                                                        .state
                                                                                        .books[
                                                                                        index
                                                                                    ]
                                                                                )
                                                                            }
                                                                        >
                                                                            {
                                                                                this
                                                                                    .state
                                                                                    .books[
                                                                                    index
                                                                                ]
                                                                                    .book_name
                                                                            }
                                                                        </DropdownItem>
                                                                    );
                                                                }
                                                            )}
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                            <div className="title">
                                                <h3 className="mb-3">
                                                    Ημερολόγιο Κρατήσεων
                                                </h3>

                                                {this.state.bookingSuccess &&
                                                    this.state
                                                        .bookingDetails && (
                                                        <h4 className="mb-3">
                                                            Συγχαρητήρια η
                                                            κράτησή σας
                                                            πραγματοποιήθηκε με
                                                            επιτυχία
                                                        </h4>
                                                    )}
                                            </div>
                                            <Row>
                                                {this.state.bookingSuccess &&
                                                this.state.bookingDetails ? (
                                                    <SuccessModal />
                                                ) : null}
                                                <Col
                                                    className="ml-auto mr-auto"
                                                    md="30"
                                                    xl="6"
                                                >
                                                    <div className="mb-2">
                                                        <small className="text-uppercase font-weight-bold">
                                                            Επιλέξτε Ημερομηνία
                                                            και Θέση κράτησης
                                                        </small>
                                                    </div>
                                                    <Card>
                                                        <CardHeader>
                                                            <Nav
                                                                className="nav-tabs-info"
                                                                role="tablist"
                                                                tabs
                                                            >
                                                                <NavItem>
                                                                    <NavLink
                                                                        className={classnames(
                                                                            {
                                                                                active:
                                                                                    this
                                                                                        .state
                                                                                        .textTabs ===
                                                                                    4
                                                                            }
                                                                        )}
                                                                        onClick={e =>
                                                                            this.toggleTabs(
                                                                                e,
                                                                                "textTabs",
                                                                                4,
                                                                                "Ισόγειο"
                                                                            )
                                                                        }
                                                                        href="#pablo"
                                                                    >
                                                                        Ισόγειο
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink
                                                                        className={classnames(
                                                                            {
                                                                                active:
                                                                                    this
                                                                                        .state
                                                                                        .textTabs ===
                                                                                    5
                                                                            }
                                                                        )}
                                                                        onClick={e =>
                                                                            this.toggleTabs(
                                                                                e,
                                                                                "textTabs",
                                                                                5,
                                                                                "Όροφος1"
                                                                            )
                                                                        }
                                                                        href="#pablo"
                                                                    >
                                                                        1ος
                                                                        Όροφος
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink
                                                                        className={classnames(
                                                                            {
                                                                                active:
                                                                                    this
                                                                                        .state
                                                                                        .textTabs ===
                                                                                    6
                                                                            }
                                                                        )}
                                                                        onClick={e =>
                                                                            this.toggleTabs(
                                                                                e,
                                                                                "textTabs",
                                                                                6,
                                                                                "Όροφος2"
                                                                            )
                                                                        }
                                                                        href="#pablo"
                                                                    >
                                                                        2ος
                                                                        Όροφος
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink
                                                                        className={classnames(
                                                                            {
                                                                                active:
                                                                                    this
                                                                                        .state
                                                                                        .textTabs ===
                                                                                    7
                                                                            }
                                                                        )}
                                                                        onClick={e =>
                                                                            this.toggleTabs(
                                                                                e,
                                                                                "textTabs",
                                                                                7,
                                                                                "Όροφος3"
                                                                            )
                                                                        }
                                                                        href="#pablo"
                                                                    >
                                                                        3ος
                                                                        Όροφος
                                                                    </NavLink>
                                                                </NavItem>
                                                            </Nav>
                                                        </CardHeader>
                                                        <CardBody>
                                                            <TabContent
                                                                className="tab-space"
                                                                activeTab={
                                                                    "link" +
                                                                    this.state
                                                                        .textTabs
                                                                }
                                                            >
                                                                <TabPane tabId="link4">
                                                                    <Seats
                                                                        orofos={
                                                                            "Ισόγειο"
                                                                        }
                                                                    />
                                                                </TabPane>
                                                                <TabPane tabId="link5">
                                                                    <Seats
                                                                        orofos={
                                                                            "Όροφος1"
                                                                        }
                                                                    />
                                                                </TabPane>
                                                                <TabPane tabId="link6">
                                                                    <Seats
                                                                        orofos={
                                                                            "Όροφος2"
                                                                        }
                                                                    />
                                                                </TabPane>
                                                                <TabPane tabId="link7">
                                                                    <Seats
                                                                        orofos={
                                                                            "Όροφος3"
                                                                        }
                                                                    />
                                                                </TabPane>
                                                            </TabContent>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                                {/*  <Footer /> */}
                            </div>
                        </Route>
                    </BrowserRouter>
                </AppProvider>
            </div>
        );
    }
}

export default Index;
if (document.getElementById("root")) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}
