const defaultState = {
    data: [],
    active: false,
    selected:false,
    value:[]
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_PRODUCT":
            console.log("test");
            let data = action.payload;
            return { ...state, data: data };
        case "SET_VALUE_SEARCH":
            let value=action.value;
            return {...state, value:value};
        case "RESET_VALUE_SEARCH":
            return{...state, value:[]}
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