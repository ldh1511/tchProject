import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';


function SearchBox(props) {
    const data = useSelector((state) => state);
    const dispatch = useDispatch();
    const getClassName = () => {
        if (data.active === true) {
            return 'search-box active';
        }
        else {
            return 'search-box';
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let searchInfo = data.searchInfo.search;
        let result = data.product.filter((ele) => ele[1].name.includes(searchInfo));
        dispatch({ type: "SET_VALUE", payload: result });
    }
    const handleInput = (e) => {
        dispatch({ type: "UPDATE", name: e.target.name, payload: e.target.value });
    }
    return (
        <div className={getClassName()} >
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="search-box-top">
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="drink" defaultValue="checkedValue" /> Thức uống
                    <input className="form-check-input" type="radio" name="news" defaultValue="checkedValue" /> Tin tức
                </label>
                </div>
                <div className="search-box-bottom">
                    <div className="form-group">
                        <input onChange={(e) => handleInput(e)} type="text" className="form-control" name="search" aria-describedby="helpId" placeholder="Tìm kiếm sản phẩm..." />
                    </div>
                    <i className="fas fa-search"></i>
                </div>
            </form>
        </div>
    );
}

export default SearchBox;