const addrDataInitialState = {
    city:'',
    districts:[],
    ward:[]
}
const addrData = (state = addrDataInitialState, action) => {
    switch (action.type) {
        case "SET_CITY":
            return {...state, city:action.city}
        case "SET_DISTRICT":
            return {...state, districts:action.districts}
        case "SET_WARD":
            return {...state, ward:action.ward}
        default:
            return state
    }
}
export default addrData;