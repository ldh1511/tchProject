import { combineReducers } from "redux";
import cart from "./cart";
import modal from "./modal";
import paymentInfo from "./paymentInfo";
import reducer from "./reducer";
import search from "./search";
import step from "./step";

const rootReducer=combineReducers({
    product:reducer,
    search:search,
    cart:cart,
    modal:modal,
    step:step,
    paymentInfo:paymentInfo
})
export default rootReducer;