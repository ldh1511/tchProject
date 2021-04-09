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
                newState[check].amount += newProduct.amount;
                newState[check].total += newProduct.total;
                return newState;
            }
            else {
                return [...state, newProduct]
            }
        default:
            return state
    }
}
export default cart;