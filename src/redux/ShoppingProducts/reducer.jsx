import {
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  TOGGLE_SECTION,
  CLOSE_ALL_SECTIONS,
  FETCH_PRODUCT_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CARTINCREMENT,
  CARTDECREMENT,
  SET_SELECTED_SIZE,
} from "../actionType";

const initialState = {
  products: [],
  productById: {},
  cartItems: [],
  isLoading: false,
  isError: false,
  isDeleted: false,
  isUpdated: false,
  error: null,
  selectedSize: " ", // New state
  toggleStates: {
    productId: {
      showDetails: false,
      showFeatures: false,
      showComposition: false,
      showDelivery: false,
    },
  },
};

// logic to update store .
export const reducerFunction = (state = initialState, { type, payload }) => {
  // writing reducer func  for counter

  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true, isDeleted: false, error: null };

    case GET_PRODUCT_SUCCESS:
      return { ...state, products: payload, isLoading: false, isError: false };
    case PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true, error: payload };

    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productById: {
          ...state.productById,
          [payload.id]: payload.data,
        },
        products: [
          ...state.products.filter((p) => p.id !== payload.id), // Remove existing product with the same id
          payload.data, // Add the fetched product
        ],
      };

    case POST_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isDeleted: false,
        products: [...state.products, payload],
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isUpdated: false,
        isDeleted: true, // Reset after a short time
        products: state.products.filter((item) => item.id !== payload),
      };

    // case TOGGLE_SECTION:
    //   return {
    //     ...state,
    //     [payload]: !state[payload],
    //   };
    case TOGGLE_SECTION: {
      const { productId, section } = payload;

      return {
        ...state,
        toggleStates: {
          ...state.toggleStates,
          [productId]: {
            ...state.toggleStates[productId],
            [section]: !state.toggleStates?.[productId]?.[section],
          },
        },
      };
    }
    case CLOSE_ALL_SECTIONS:
      return {
        ...state,
        toggleStates: {}, // or reset to initial toggle state logic
      };

    case ADD_TO_CART: {
      // If item already in cart, increment its quantity
      const existing = state.cartItems.find(item => item.id === payload.id);
      if (existing) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...payload, quantity: 1 }],
      };
    }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload),
      };

    case 'INCREMENT_CART_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case 'DECREMENT_CART_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case SET_SELECTED_SIZE:
      return {
        ...state,
        selectedSize: payload,
      };
    default:
      return state;
  }
};
