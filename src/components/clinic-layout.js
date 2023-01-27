import React, { Component } from "react";
import '../stylesheets/base.css';
import Header from "./clinic-header.js";
import Footer from "./clinic-footer.js";
import Appointment from "./clinic-appointment.js";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Appointment />
        <Footer />
      </div>
    )
  }
}

export default Layout;
