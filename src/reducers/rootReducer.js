import { combineReducers } from "redux";
import addrData from "./addressData";
import cart from "./cart";
import item from "./itemSelected";
import modal from "./modal";
import paymentInfo from "./paymentInfo";
import reducer from "./reducer";
import scroll from "./scroll";
import search from "./search";
import step from "./step";
import toggleCart from "./toggleCart";
import user from "./user";

const rootReducer=combineReducers({
    product:reducer,
    search:search,
    cart:cart,
    modal:modal,
    step:step,
    paymentInfo:paymentInfo,
    scroll:scroll,
    itemSelected:item,
    toggleCart:toggleCart,
    user:user,
    addrData:addrData
})
export default rootReducer;