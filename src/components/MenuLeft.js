import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const MenuLeft = (props) => {
    const data = useSelector((state) => state.product.type);
    const dispatch=useDispatch();
    const handleScroll=(e)=>{
        dispatch({type:"SET_NAME", payload:e})
    }
    if (data) {
        let dataArr = Object.entries(data);
        const getTitle = () => {
            return dataArr.map((ele, i) => <li onClick={(e)=>handleScroll(ele[1].name)} key={i}>{ele[1].name}</li>)
        }
        return (
            <div className="menu-left">
                <ul >
                    {getTitle()}
                </ul>
            </div>
        );
    }
    else{
        return <div></div>
    }
}


export default MenuLeft;