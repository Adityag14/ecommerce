/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import BaseLayout from "../layouts/BaseLayout";

// Route Views
import Home from "../views/Home/HomeContainer";
import SingleProductContainer from "../views/Product/SingleProductContainer";
import CategoryContainer from "../views/Category/CategoryContainer";
import { AboutPage, ContactPage, LookbookPage } from "../views/EditorialPages";

var routes = [
  {
    path: "/fashion-cube",
    exact: true,
    layout: BaseLayout,
    component: Home,
  },

  {
    path: "/home",
    layout: BaseLayout,
    component: () => <Redirect to="/fashion-cube" />,
  },
  {
    path: "/fashion-cube/single-product/:id",
    layout: BaseLayout,
    component: SingleProductContainer,
  },
  {
    path: "/fashion-cube/shops/:category/:subcategory?",
    layout: BaseLayout,
    component: CategoryContainer,
  },
  {
    path: "/fashion-cube/lookbook",
    layout: BaseLayout,
    component: LookbookPage,
  },
  {
    path: "/fashion-cube/about",
    layout: BaseLayout,
    component: AboutPage,
  },
  {
    path: "/fashion-cube/contact",
    layout: BaseLayout,
    component: ContactPage,
  },
];

export default routes;
