/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className={
          this.props.activeClass ? "hamburger_menu active" : "hamburger_menu"
        }
      >
        <div className="hamburger_close" onClick={this.props.onClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <div className="hamburger_menu_content text-right">
          <ul className="menu_top_nav">
            <li className="menu_item">
              <Link to="/fashion-cube/shops/all">shop catalog</Link>
            </li>
            <li className="menu_item">
              <Link to="/fashion-cube/shops/women">women</Link>
            </li>
            <li className="menu_item">
              <Link to="/fashion-cube/shops/accessories">accessories</Link>
            </li>
            <li className="menu_item">
              <Link to="/fashion-cube/shops/men">men</Link>
            </li>
            <li className="menu_item">
              <Link to="/fashion-cube">home</Link>
            </li>
            <li className="menu_item">
              <button type="button" onClick={() => this.props.onAuthClick(true)}>
                sign in
              </button>
            </li>
            <li className="menu_item">
              <button type="button" onClick={() => this.props.onAuthClick(false)}>
                register
              </button>
            </li>
            <li className="menu_item">
              <Link to="/fashion-cube/lookbook">lookbook</Link>
            </li>
            <li className="menu_item">
              <Link to="/fashion-cube/about">about</Link>
            </li>
            <li className="menu_item">
              <Link to="/fashion-cube/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
MobileMenu.propTypes = {
  activeClass: PropTypes.bool,
  onClose: PropTypes.func,
  onAuthClick: PropTypes.func,
};

export default MobileMenu;
