/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { Component } from "react";
import SingleProduct from "../../components/Products/SingleProduct";
import Auth from "../../modules/Auth";
import LoginRegister from "../../components/LoginRegisterModal";
import Filter from "./components/Filter";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      productsBAK: this.props.products,
      departments: this.props.departments,
      modalShow: false,
      login: true
    };
    this.addToBag = this.addToBag.bind(this);
  }
  componentDidMount() {
    this.loadProducts();
  }

  componentDidUpdate(previousProps) {
    const previousParams = previousProps.match.params;
    const currentParams = this.props.match.params;
    if (
      previousParams.category !== currentParams.category ||
      previousParams.subcategory !== currentParams.subcategory
    ) {
      this.loadProducts();
    }
  }

  loadProducts = () => {
    const { category, subcategory } = this.props.match.params;
    if (!category || category.toLowerCase() === "all") {
      this.props.getAllProducts();
      return;
    }

    const field = subcategory ? "category" : "department";
    const value = subcategory || category;
    const normalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    this.props.getProductsForCollection(field, normalizedValue);
  }
  showHideModal = () => {
    this.setState({ modalShow: false });
  };

  loginClicked = () => {
    this.setState({ modalShow: true, login: true });
  };
  registerClicked = () => {
    this.setState({ modalShow: true, login: false });
  };

  addToBag = params => {
    if (
      Auth.getUserDetails() !== undefined &&
      Auth.getUserDetails() !== null &&
      Auth.getToken() !== undefined
    ) {
      let cart = this.props.postCart(params);
      cart.then(res => {
        console.log(res);
      });
    } else {
      this.setState({ modalShow: true });
    }
  };

  render() {
    const { products, applyFilters, error, loading } = this.props;
    const { category, subcategory } = this.props.match.params;
    const collectionTitle = subcategory || (category === "all" ? "All products" : category);
    console.log(this.props);
    return (
      <div className="container product_section_container">
        <div className="row">
          <div className="col product_section clearfix">
            <div class="breadcrumbs d-flex flex-row align-items-center">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li class="active">
                  <a href="/">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    {collectionTitle}
                  </a>
                </li>
                <li class="active">
                  <a href="#">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    {subcategory || "collection"}
                  </a>
                </li>
              </ul>
            </div>

            <h1 className="collection_title">{collectionTitle}</h1>

            <div className="sidebar">
              <Filter applyFilters={applyFilters} />
            </div>
            <div className="main_content">
              <div class="products_iso">
                <div class="row">
                  <div class="col">
                    <div class="product_sorting_container product_sorting_container_top">
                      <ul class="product_sorting">
                        <li>
                          <span class="type_sorting_text">Default Sorting</span>
                          <i class="fa fa-angle-down"></i>
                          <ul class="sorting_type">
                            <li
                              class="type_sorting_btn"
                              data-isotope-option='{ "sortBy": "original-order" }'
                            >
                              <span>Default Sorting</span>
                            </li>
                            <li
                              class="type_sorting_btn"
                              data-isotope-option='{ "sortBy": "price" }'
                            >
                              <span>Price</span>
                            </li>
                            <li
                              class="type_sorting_btn"
                              data-isotope-option='{ "sortBy": "name" }'
                            >
                              <span>Product Name</span>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span>Show</span>
                          <span class="num_sorting_text">6</span>
                          <i class="fa fa-angle-down"></i>
                          <ul class="sorting_num">
                            <li class="num_sorting_btn">
                              <span>6</span>
                            </li>
                            <li class="num_sorting_btn">
                              <span>12</span>
                            </li>
                            <li class="num_sorting_btn">
                              <span>24</span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div class="pages d-flex flex-row align-items-center">
                        <div class="page_current">
                          <span>1</span>
                          <ul class="page_selection">
                            <li>
                              <a href="#">1</a>
                            </li>
                            <li>
                              <a href="#">2</a>
                            </li>
                            <li>
                              <a href="#">3</a>
                            </li>
                          </ul>
                        </div>
                        <div class="page_total">
                          <span>of</span> 3
                        </div>
                        <div id="next_page" class="page_next">
                          <a href="#">
                            <i class="fas fa-long-arrow-alt-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {products && products.length > 0 &&
                    products.slice(0, 8).map((item, index) => {
                      return (
                        <div
                          className="col-lg-3 col-sm-6"
                          key={index}
                          data-aos="zoom-in"
                        >
                          <SingleProduct
                            productItem={item}
                            addToBag={this.addToBag}
                          />
                        </div>
                      );
                    })}
                </div>
                {!loading && (error || (products && products.length === 0)) && (
                  <div className="catalog-empty">
                    <h2>{collectionTitle} collection</h2>
                    <p>
                      {error && error.message !== "products not found"
                        ? "This collection could not be loaded right now."
                        : "There are no products in this collection yet."}
                    </p>
                  </div>
                )}
                {products && products.length > 0 && (
                  <div className="product_sorting_container product_sorting_container_bottom clearfix">
                    <span className="showing_results">
                      Showing {Math.min(products.length, 8)} of {products.length} products
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <LoginRegister
          show={this.state.modalShow}
          login={this.state.login}
          registerClicked={() => this.registerClicked()}
          loginClicked={() => this.loginClicked()}
          onHide={() => this.showHideModal()}
        />
      </div>
    );
  }
}

export default Category;
