import { combineReducers } from "redux";
import cart from "./cart";
import modal from "./modal";
import reducer from "./reducer";
import search from "./search";

const rootReducer=combineReducers({
    product:reducer,
    search:search,
    cart:cart,
    modal:modal
})
export default rootReducer;