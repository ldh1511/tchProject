import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item';
import cartGif from '../img/cart-checkout.gif';

function Itempageright({ match }) {
    let size = Object.entries(match[0][1].size);
    const dispatch = useDispatch();
    const itemSelected = useSelector((state) => state.itemSelected);
    const item = useSelector((state) => state.product.data);
    const cart=useSelector((state)=>state.cart);
    const elRef = useRef([]);
    const cartRef=useRef();
    const handleSelectSize = (e) => {
        dispatch({
            type: "CHANGE_SIZE_ITEM",
            item: match[0],
            total: (match[0][1].price + parseInt(e[1])) * parseInt(itemSelected.amount),
            size: e,
        })
    }
    const handleSelectAmount = (e) => {
        console.log(e.target.value);
        dispatch({
            type: "CHANGE_AMOUNT_ITEM",
            amount: parseInt(e.target.value),
            price: match[0][1].price
        })
    }
    const handleAddToCart = () => {
        dispatch({
            type: "ADD",
            payload: match[0],
            amount: itemSelected.amount,
            total: itemSelected.total,
            size: itemSelected.size
        })
        cartRef.current.className="active";
    }
    const getSize = () => {
        return size.map((e, i) =>
            <div key={i} className="form-check">
                <input type="checkbox"
                    className="form-check-input"
                    name={e[0]}
                    value="checkedValue"
                    onClick={() => handleSelectSize(e)}
                    checked={e[0] === itemSelected.size[0] ? true : false}
                />
                {`${e[0]} (+${e[1]}đ)`}
            </div>
        )
    }
    const getRelatedItem = () => {
        let result = item.filter(e => e[1].type === match[0][1].type);
        return result.map((e, i) =>
            <Item data={e} key={i} />
        )
    }
    useEffect(() => {
        let result;
        for (let i = 0; i < elRef.current.length; i++) {
            if (i === itemSelected.loc) {
                result = i;
            }
        }
        if (result !== undefined) {
            elRef.current[result].scrollIntoView({ block: 'end', behavior: 'smooth' })
        }
        getRelatedItem();
    }, [itemSelected.loc])
    useEffect(()=>{
        
    },[cart.length])
    return (
        <div className="item-pages-right">
            <div className="item-pages-right-box" ref={el => elRef.current[0] = el}>
                <h1>{match[0][1].name}</h1>
                <p>{match[0][1].description}</p>
                <div className="item-pages-block">
                    <h4>Số lượng</h4>
                    <input
                        className="form-control"
                        name="quantity"
                        type="number"
                        value={itemSelected.amount}
                        onChange={(e) => handleSelectAmount(e)}
                    />
                </div>
                <div className="item-pages-block">
                    <h4>Size</h4>
                    <div className="form-size">
                        {getSize()}
                    </div>
                </div>
                <div className="item-pages-block">
                    <h3>{itemSelected.total} đ</h3>
                </div>
                <div className="item-pages-btn-container">
                    <button className="item-pages--btn" onClick={handleAddToCart}>
                        Thêm vào giỏ hàng
                </button>
                    <img alt="" src={cartGif} ref={cartRef}></img>
                </div>
            </div>
            <div className="item-pages-right-box" ref={el => elRef.current[1] = el}>
                <h1>Sự mộc mạc trở thành dấu ấn Việt</h1>
                <p>Khi người Pháp đem văn hóa cà phê vào Việt Nam, người bản xứ thay thế sữa tươi đắt đỏ bằng sữa đặc rẻ tiền hơn để pha cùng cà phê. Tuy nhiên việc làm này vô tình khiến kết cấu của ly cà phê sánh đặc và đậm đà hơn. Dần dà, ly cà-phê-sữa-đặc đậm vị quen thuộc với nếp sống người Việt trở thành một nét sáng tạo riêng, chinh phục được trái tim hàng triệu người yêu cà phê trên thế giới.
                Chằng có cách nào mô tả chính xác được mùi vị của Cà phê sữa Việt Nam hơn việc tự mình nhấm nháp.</p>
                <small>
                    Ngụm đầu tiên, vị ngọt thấm vào đầu lưỡi. Sau đó rút đi, để lại vị đắng thanh thoát. <br></br>
                Ngụm thứ hai, và bất chợt bạn cảm thấy mọi thứ trên đời này đều ổn cả.
                </small>
            </div>
            <div className="item-pages-right-box" ref={el => elRef.current[2] = el}>
                <h1>Có thể bạn sẽ thích</h1>
                <div className="related-box">
                    {getRelatedItem()}
                </div>
            </div>
        </div>
    );
}

export default Itempageright;