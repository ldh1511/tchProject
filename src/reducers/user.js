const userInitialState = {
    isLogin: false,
    name: "",
    photo: "",
    userId: "",
    city:"",
    district:"",
    ward:"",
    specificAddr:"",
    phone:""
}
const user = (state = userInitialState, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            return {
                ...state,
                isLogin: action.isLogin,
                name: action.name,
                photo: action.photo,
                userId: action.userId
            }
        case "USER_LOGOUT":
            let newState={
                isLogin: false,
                name: "",
                photo: "",
                userId: ""
            }
            return newState
        case "UPDATE_INFO":
            return{
                ...state, 
                city:action.city, 
                district:action.district, 
                ward: action.ward,
                specificAddr:action.specificAddr,
                phone:action.phone
            }
        default:
            return state
    }
}
export default user;