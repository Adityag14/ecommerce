/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import {
  getAllProducts,
  applyFilters
} from "../../redux/actions/productAction";
import { connect } from "react-redux";
import Category from "./Category";
import { postCart } from "../../redux/actions/cartAction";

const mapStoreToProps = state => ({
  products: state.product.products,
  loading: state.product.loading,
  error: state.product.error
});
const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts()),
  getProductsForCollection: (field, value) =>
    dispatch(applyFilters(`${field}=${encodeURIComponent(value)}`)),
  applyFilters: filter_string => dispatch(applyFilters(filter_string)),
  postCart: productId => dispatch(postCart(productId))
});

export default connect(mapStoreToProps, mapDispatchToProps)(Category);
