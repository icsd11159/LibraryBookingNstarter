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

// core components
import IndexNavbar from "./components/Navbars/IndexNavbar.jsx";
import PageHeader from "./components/PageHeader/PageHeader.jsx";
import Footer from "./components/Footer/Footer.jsx";

// sections for this page/view
import Basics from "./IndexSections/Basics.jsx";
import Navbars from "./IndexSections/Navbars.jsx";
import Tabs from "./IndexSections/Tabs.jsx";
import Pagination from "./IndexSections/Pagination.jsx";
import Notifications from "./IndexSections/Notifications.jsx";
import Typography from "./IndexSections/Typography.jsx";
import JavaScript from "./IndexSections/JavaScript.jsx";
import NucleoIcons from "./IndexSections/NucleoIcons.jsx";
import Signup from "./IndexSections/Signup.js";
import Examples from "./IndexSections/Examples.jsx";
import Download from "./IndexSections/Download.jsx";

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <PageHeader />
          <div className="main">
         {/*    <Basics /> */}
            <Signup />
            <Navbars />
            <Tabs />
          {/*   <Pagination />
            <Notifications />
            <Typography />
            <JavaScript />
            <NucleoIcons /> */}
          
          {/*   <Examples /> */}
            <Download />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Index;
