const itemInitialState = {size:['S',0], amount:1, total:0}
const item = (state = itemInitialState, action) => {
    switch (action.type) {
        case "CHANGE_SIZE_ITEM":
            return {...state, item:action.item, total:action.total, size: action.size}
        case "CHANGE_AMOUNT_ITEM":
            return {...state, amount: action.amount, total:action.amount*action.price}
        default:
            return state
    }
}
export default item