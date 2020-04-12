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
import { BrowserRouter, Route, Switch, Redirect ,Router} from "react-router-dom";

import "../../../src/assets/css/nucleo-icons.css";
import "../../../src/assets/scss/blk-design-system-react.scss?v=1.0.0";
import "../../../src/assets/demo/demo.css";


import PageHeader from "../../../src/components/PageHeader/PageHeader.jsx";

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

import Tabs from "../../../src/views/IndexSections/Tabs.jsx";
import Pagination from "../../../src/views/IndexSections/Pagination.jsx";
import Notifications from "../../../src/views/IndexSections/Notifications.jsx";
import Typography from "../../../src/views/IndexSections/Typography.jsx";
import JavaScript from "../../../src/views/IndexSections/JavaScript.jsx";
import NucleoIcons from "../../../src/views/IndexSections/NucleoIcons.jsx";
import Signup from "../../../src/views/IndexSections/Signup.js";
import Examples from "../../../src/views/IndexSections/Examples.jsx";
import Download from "../../../src/views/IndexSections/Download.jsx";
import Navbars from "../../../src/views/IndexSections/Navbars.jsx";
import Register from " ../../../src/views/examples/Register.js";
import '../../../src/App.css';
class Index extends React.Component {
 
 
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
    
      <BrowserRouter>
      <Route>
      <IndexNavbar />  
     
        <div className="wrapper">
      
          <PageHeader />
          <div className="main">
        
        
          {/*  <Basics /> */}
           <Navbars />
            <Tabs />
           {/*  <Pagination />
            <Notifications />
            <Typography />
            <JavaScript />
            <NucleoIcons />
           
            <Examples /> */}
            <Download /> 
         
      
          </div>
        <Footer />
        </div>
        </Route>
        </BrowserRouter>
        
    );
  }
}

export default Index;
if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
