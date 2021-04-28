const scrollInitialState = {}
const scroll = (state = scrollInitialState, action) => {
    switch (action.type) {
        case "SET_NAME":
            let scrollName=action.payload
            return {scrollName}
        default:
            return state
    }
}
export default scroll;