import React from 'react';
import { useDispatch } from 'react-redux';
import { firebaseConnect } from '../connect';

function OrderSearch(props) {
    const dispatch = useDispatch();
    const handleInput = (e) => {
        let ref = firebaseConnect.database().ref('product/');
        if (e.target.value !== '') {
            ref.orderByChild('name').equalTo(`${e.target.value}`).on('value', (snapshot) => {
                if (snapshot.val() !== null) {
                    dispatch({type:"SET_VALUE_SEARCH", value:Object.entries(snapshot.val())})
                }
            })
        }
        else{
            dispatch({type:"RESET_VALUE_SEARCH"})
        }
    }
    return (
        <div className="order-search">
            <input type="text"
                placeholder="Tìm kiếm sản phẩm"
                name="oder-search"
                onChange={e => handleInput(e)}>
            </input>
        </div>
    );
}

export default OrderSearch;