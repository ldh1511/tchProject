const stepInitialState = 0;
const step = (state = stepInitialState, action) => {
    switch (action.type) {
        case "SET_STEP":
            let newStep=state+1;
            return newStep;
        case "RESET_STEP":
            return 0;
        default:
            return state
    }
}
export default step;