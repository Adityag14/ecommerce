/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeCartView from "../HomeCartView";
import LoginRegister from "../LoginRegisterModal";
import MobileMenu from "../MobileMenu";
import device from "../../modules/mediaQuery";
import MediaQuery from "react-responsive";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      authModalShow: false,
      login: true,
      activeclass: false,
    };
  }

  componentDidMount() {
    if (Object.keys(this.props.cart).length < 1) {
      this.props.getCartByUserId();
    }
  }

  showHideModal = () => {
    this.setState({ modalShow: !this.state.modalShow });
  };

  showAuthModal = (login) => {
    this.setState({ authModalShow: true, login });
  };

  hideAuthModal = () => {
    this.setState({ authModalShow: false });
  };

  handleMenuClicked = () => {
    this.setState({ activeclass: !this.state.activeclass });
  };
  render() {
    const { departments, cart } = this.props;

    return (
      <div className="main_nav_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-right">
              <div className="logo_container">
                <Link to="/fashion-cube">
                  Aditya's <span>Edit</span>
                </Link>
              </div>
              <nav className="navbar">
                <ul className="navbar_menu">
                  <li>
                    <Link to="/home">home</Link>
                  </li>
                  <li className="mega-drop-down">
                    <a href="#">
                      shop <i className="fa fa-angle-down"></i>
                    </a>

                    <div className="mega-menu">
                      <div className="mega-menu-wrap">
                        <div className="mega-menu-content">
                          <h5>Catalog</h5>
                          <ul className="stander">
                            <li>
                              <Link to="/fashion-cube/shops/all">View all</Link>
                            </li>
                            <li>
                              <Link to="/fashion-cube/shops/women">Women</Link>
                            </li>
                            <li>
                              <Link to="/fashion-cube/shops/accessories">Accessories</Link>
                            </li>
                            <li>
                              <Link to="/fashion-cube/shops/men">Men</Link>
                            </li>
                          </ul>
                        </div>
                        {departments &&
                          departments.map((item, index) => {
                            return (
                              <div className="mega-menu-content" key={index}>
                                <h5>{item.departmentName}</h5>
                                <ul className="stander">
                                  {item.categories.split(",").map((i, idx) => {
                                    return (
                                      <li key={idx}>
                                        <Link to={`/fashion-cube/shops/${encodeURIComponent(item.departmentName)}/${encodeURIComponent(i)}`}>
                                          {i}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </li>

                  <li>
                    <Link to="/fashion-cube/lookbook">lookbook</Link>
                  </li>
                  <li>
                    <Link to="/fashion-cube/about">about</Link>
                  </li>
                  <li>
                    <Link to="/fashion-cube/contact">contact</Link>
                  </li>
                </ul>
                <ul className="navbar_user">
                  <li>
                    <a href="#">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="navbar_icon_button"
                      aria-label="Sign in or register"
                      onClick={() => this.showAuthModal(true)}
                    >
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </button>
                  </li>
                  <li className="checkout">
                    <a href="#" onClick={() => this.showHideModal()}>
                      <i className="fas fa-shopping-bag"></i>
                      {cart.totalQty !== undefined && (
                        <span id="checkout_items" className="checkout_items">
                          {cart.totalQty}
                        </span>
                      )}
                    </a>
                  </li>
                </ul>
                <div
                  className="hamburger_container"
                  onClick={() => this.handleMenuClicked()}
                >
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <MediaQuery query={device.max.tabletL}>
          <MobileMenu
            activeClass={this.state.activeclass}
            onClose={() => this.handleMenuClicked()}
            onAuthClick={this.showAuthModal}
          />
        </MediaQuery>
        {this.state.modalShow ? (
          <HomeCartView
            cart={cart}
            show={this.state.modalShow}
            onHide={() => this.showHideModal()}
          />
        ) : null}
        <LoginRegister
          show={this.state.authModalShow}
          login={this.state.login}
          registerClicked={() => this.showAuthModal(false)}
          loginClicked={() => this.showAuthModal(true)}
          onHide={this.hideAuthModal}
        />
      </div>
    );
  }
}

export default NavBar;
