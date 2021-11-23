import {
  ChangeStateProduct,
  ListProduct,
  RegisterProduct,
  UpdateProduct,
} from "../../services/product";
import { typeStore } from "../constants";

export const Products = (products) => ({
  type: typeStore.product.list,
  products,
});

export const ProductsFilter = (productsFilter) => ({
  type: typeStore.product.productsFilter,
  productsFilter,
});

export const listProducts = (header) => async (dispatch) => {
  try {
    const products = await ListProduct(header);
    console.log(products);
    dispatch(Products(products));
    dispatch(ProductsFilter(products));
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = (item, header) => async (dispatch) => {
  try {
    let isOk = await UpdateProduct(item, header);
    if (isOk) dispatch(listProducts(header));
    return isOk;
  } catch (error) {
    console.log(error);
  }
};

export const registerProduct = (item, header) => async (dispatch) => {
  try {
    let isOk = await RegisterProduct(item, header);
    if (isOk) dispatch(listProducts(header));
    return isOk;
  } catch (error) {
    console.log(error);
  }
};

export const changeStateProduct = (item, header) => async (dispatch) => {
  try {
    let isOk = await ChangeStateProduct(item, header);
    if (isOk) dispatch(listProducts(header));
    return isOk;
  } catch (error) {
    console.log(error);
  }
};
