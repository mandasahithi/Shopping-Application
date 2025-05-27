import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { reducerFunction as ProductReducer } from "./ShoppingProducts/reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  ProductReducer,
});

const persistConfiguration = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfiguration, rootReducer);

const enhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = legacy_createStore(persistedReducer, enhancer);
