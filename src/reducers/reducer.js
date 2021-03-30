const defaultState = {
    data: [],
    active: false,
    selected:false
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_PRODUCT":
            let data = action.payload;
            return { ...state, data: data };
        case "SET_TYPE":
            let dt = state;
            let type = action.payload;
            return { ...dt, type: type };
        case "SET_ACTIVE":
            let activeState = !state.active;
            return { ...state, active: activeState }
        case "SELECTED":
            return {...state, selected:!state.selected}
        default:
            return state
    }
}
export default reducer;