const cartInitialState = []
const cart = (state = cartInitialState, action) => {
    switch (action.type) {
        case "ADD":
            let check;
            state.map((e, i) => {
                if (e.item[0] === action.payload[0] && e.size[0] === action.size[0]) {
                    check = i;
                    return true;
                }
                return false;
            })
            let newProduct = {
                item: action.payload,
                amount: action.amount,
                total: action.total,
                size: action.size
            };
            if (check !== undefined) {
                let newState = state;
                newState[check].amount = newProduct.amount;
                newState[check].total = newProduct.total;
                newState[check].size= newProduct.size;
                return newState;
            }
            else {
                return [...state, newProduct]
            }
        case "REMOVE_ITEM":
            let result=state.filter(e=>e.item[1].id!==action.match)
            return result;
        case "SET_EMPTY":
            return [];
        default:
            return state
    }
}
export default cart;