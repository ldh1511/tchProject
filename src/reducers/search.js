const defaultState = {
    searchInfo: { search: "" },
    searchValue: [],
}
const search = (state = defaultState, action) => {
    switch (action.type) {
        case "UPDATE":
            return { ...state, searchInfo: { ...state.searchInfo, [action.name]: action.payload } }
        case "SET_VALUE":
            let curValue = action.payload;
            if (state.searchInfo.search.length === 0) {
                curValue = state.product;
            }
            return { ...state, searchValue: curValue }
        default:
            return state
    }
}
export default search;