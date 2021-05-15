const userInitialState = {
    isLogin: false,
    name: "",
    photo: "",
    userId: ""
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
        default:
            return state
    }
}
export default user;