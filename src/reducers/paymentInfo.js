const paymentInfoInitialState = {payment:'cod',note:''}
const paymentInfo = (state = paymentInfoInitialState, action) => {
    switch (action.type) {
        case "SET_PAYMENTINFO":
            let name=action.name;
            let value=action.value;
            return {...state, [name]:value}
        default:
            return state
    }
}
export default paymentInfo;