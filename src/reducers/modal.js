const modalInitialState = {
    active:false
}
const modal = (state = modalInitialState, action) => {
    switch (action.type) {
        case "MODAL_ACTIVE":
            let active=!state.active
            return {...state, active:active}
        case "MODAL_SET_ITEM":
            let item=action.payload;
            let amount=1;
            let price=item[1].price;
            let size=Object.entries(item[1].size);
            return {...state, item:item, amount:amount, total:price, size:size[size.length-1], img: item[1].link }
        case "MODAL_GET_ITEM":
            let itemSelected=action.payload;
            return {...state, item:itemSelected, amount:action.amount, total:action.total, img: action.img}
        case "CHANGE_AMOUNT":
            let newAmount=action.payload;
            let total=(state.item[1].price + state.size[1])*newAmount;
            return {...state, amount:newAmount,total:total}
        case "CHANGE_SIZE":
            let newSize=action.payload;
            let newPrice=(state.item[1].price+newSize[1])*state.amount;
            return{...state,size:newSize, total:newPrice}
        default:
            return state
    }
}
export default modal;