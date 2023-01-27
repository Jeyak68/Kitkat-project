import React, { Component } from "react";
import '../stylesheets/base.css';
import Header from "./eye-header.js";
import Footer from "./eye-footer.js";
import Appointment from "./eye-appointment.js";

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
