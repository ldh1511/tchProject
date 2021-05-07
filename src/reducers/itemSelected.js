const itemInitialState = {size:['S',0], amount:1, total:0, loc:0}
const item = (state = itemInitialState, action) => {
    switch (action.type) {
        case "SELECT_ITEM":
            return {...state, item: action.item, total:action.total}
        case "CHANGE_SIZE_ITEM":
            return {...state, item:action.item, total:action.total, size: action.size}
        case "CHANGE_AMOUNT_ITEM":
            return {...state, amount: action.amount, total:action.amount*action.price}
        case "CHANGE_LOCATION_ITEM":
            return {...state, loc:action.loc}
        default:
            return state
    }
}
export default item