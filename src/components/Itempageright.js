import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Itempageright({ match }) {
    let size = Object.entries(match[0][1].size);
    const dispatch = useDispatch();
    const itemSelected = useSelector((state) => state.itemSelected);
    const handleSelectSize = (e) => {
        dispatch({ 
            type: "CHANGE_SIZE_ITEM", 
            item: match[0], 
            total: (match[0][1].price + parseInt(e[1]))*parseInt(itemSelected.amount), 
            size: e 
        })
    }
    const handleSelectAmount = (e) => {
        console.log(e.target.value);
        dispatch({ type: "CHANGE_AMOUNT_ITEM", amount: parseInt(e.target.value), price: match[0][1].price })
    }
    const handleAddToCart=()=>{
        dispatch({type:"ADD",payload: match[0], amount: itemSelected.amount, total: itemSelected.total, size:itemSelected.size})
    }
    const getSize = () => {
        return size.map((e, i) =>
            <div key={i} className="form-check">
                <input type="checkbox" className="form-check-input" name={e[0]} id="" value="checkedValue" defaultValue="0" onClick={() => handleSelectSize(e)} checked={e[0] === itemSelected.size[0] ? true : false} />
                {`${e[0]} (+${e[1]}đ)`}
            </div>
        )
    }
    return (
        <div className="item-pages-right">
            <h1>{match[0][1].name}</h1>
            <p>{match[0][1].description}</p>
            <div className="item-pages-block">
                <h4>Số lượng</h4>
                <input className="form-control" name="quantity" type="number" value="1" onChange={(e) => handleSelectAmount(e)}></input>
            </div>
            <div className="item-pages-block">
                <h4>Size</h4>
                <div className="form-size">
                    {getSize()}
                </div>
            </div>
            <div className="item-pages-block">
                <h3>{match[0][1].price} đ</h3>
            </div>
            <button className="item-pages--btn" onClick={handleAddToCart}>
                Mua ngay
            </button>
        </div>
    );
}

export default Itempageright;