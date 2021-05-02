import { combineReducers } from "redux";
import cart from "./cart";
import item from "./itemSelected";
import modal from "./modal";
import paymentInfo from "./paymentInfo";
import reducer from "./reducer";
import scroll from "./scroll";
import search from "./search";
import step from "./step";

const rootReducer=combineReducers({
    product:reducer,
    search:search,
    cart:cart,
    modal:modal,
    step:step,
    paymentInfo:paymentInfo,
    scroll:scroll,
    itemSelected:item
})
export default rootReducer;