const nameInitialState = false;
const toggleCart = (state = nameInitialState, action) => {
    switch (action.type) {
        case "CHANGE_STATE_CART":
            return !state
        default:
            return state
    }
}
export default toggleCart;