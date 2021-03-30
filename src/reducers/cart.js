const cartInitialState = []
const cart = (state = cartInitialState, action) => {
    switch (action.type) {
        case "ADD":
            let newProduct = {
                item: action.payload,
                amount: action.amount,
                total: action.total,
                size: action.size
            };
            return [...state, newProduct]
        default:
            return state
    }
}
export default cart;