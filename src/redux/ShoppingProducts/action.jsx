import {
  PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
  PRODUCT_REQUEST,
  POST_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  GET_PRODUCT_BY_ID_SUCCESS,
  TOGGLE_SECTION,
  CLOSE_ALL_SECTIONS,
  FETCH_PRODUCT_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_SELECTED_SIZE,
} from "../actionType";

import axios from "axios";

// GET
// loading screen

export const productSuccessAction = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload: payload };
};

export const productByIdSuccessAction = (payload) => {
  return { type: GET_PRODUCT_BY_ID_SUCCESS, payload: payload };
};
export const productFailureAction = (error) => {
  return { type: PRODUCT_FAILURE, payload: error };
};

// POST
// loading
export const productPostRequestAction = () => {
  return { type: PRODUCT_REQUEST };
};
export const productPostSuccessAction = (payload) => {
  return { type: POST_PRODUCT_SUCCESS, payload };
};

export const productPostFailureAction = () => {
  return { type: PRODUCT_FAILURE };
};
export const productRequestAction = () => {
  return { type: PRODUCT_REQUEST };
};

// getproduct
// export const getProduct = () => (dispatcher) => {
//   dispatcher(productRequestAction());

//   axios
//     .get("http://localhost:3001/products")
//     .then((response) => {
//       dispatcher(productSuccessAction(response.data));
//     })
//     .catch((error) => {
//       console.log(error);
//       dispatcher(productFailureAction(error));
//     });
// };
export const getProduct = () => async (dispatcher) => {
  dispatcher(productRequestAction());
  try {
    const response = await fetch('/products.json');
    const data = await response.json();
    dispatcher(productSuccessAction(data.products));
  } catch (error) {
    console.error("Error loading products:", error);
    dispatcher(productFailureAction(error));
  }
};

// delete to do
export const deleteProduct = (id) => (dispatcher) => {
  dispatcher(productRequestAction());
  axios
    .delete(`http://localhost:3001/products/${id}`)
    .then(() => {
      dispatcher({ type: DELETE_PRODUCT_SUCCESS, payload: id });
    })
    .catch(() => {
      dispatcher({ type: PRODUCT_FAILURE });
    });
};

// update to do
export const updateProduct = (id, updatedTitle) => (dispatcher) => {
  dispatcher(productRequestAction()); //loading screen
  const updatedProduct = {
    title: updatedTitle,
  };
  axios
    .put(`http://localhost:3001/products/${id}`, updatedProduct)
    .then((response) => {
      dispatcher({ type: UPDATE_PRODUCT_SUCCESS, payload: response.data });
    })
    .catch(() => {
      dispatcher({ type: PRODUCT_FAILURE });
    });
};

// getProducts by id

// Toogling content in product page

export const toggleSection = (productId, section) => ({
  type: TOGGLE_SECTION,
  payload: { productId, section },
});

export const closeAllSections = () => ({
  type: CLOSE_ALL_SECTIONS,
});

// get product by id
export const fetchProducts = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  try {
    const response = await fetch('/products.json');
    const data = await response.json();
    const products = data.products;
    const product = products.find(p => p.id === id);
    if (product) {
      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: { id, data: product },
      });
    } else {
      dispatch({ type: PRODUCT_FAILURE, payload: 'Product not found' });
    }
  } catch (error) {
    dispatch({ type: PRODUCT_FAILURE, payload: error.message });
  }
};

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const incrementCartItem = (id) => ({
  type: 'INCREMENT_CART_ITEM',
  payload: id,
});

export const decrementCartItem = (id) => ({
  type: 'DECREMENT_CART_ITEM',
  payload: id,
});

export const setSelectedSize = (size) => ({
  type: SET_SELECTED_SIZE,
  payload: size,
});
