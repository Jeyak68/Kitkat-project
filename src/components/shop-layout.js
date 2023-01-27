import React, { Component } from "react";
import '../stylesheets/base.css';
import Header from "./shop-header.js";
import Footer from "./shop-footer.js";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Layout;
