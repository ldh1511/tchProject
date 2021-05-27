const addrDataInitialState = {
    province:'',
    districts:[],
    ward:[]
}
const addrData = (state = addrDataInitialState, action) => {
    switch (action.type) {
        case "SET_CITY":
            return {...state, province:action.province}
        case "SET_DISTRICT":
            return {...state, districts:action.districts}
        case "SET_WARD":
            return {...state, ward:action.ward}
        default:
            return state
    }
}
export default addrData;