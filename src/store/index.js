import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

let store;
const middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
  store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
} else {
  store = createStore(rootReducer, applyMiddleware(...middleware));
}

export default store;
