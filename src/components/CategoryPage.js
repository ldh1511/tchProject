import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Item from './Item';

function CategoryPage(props) {
    const product = useSelector(state => state.product.data);
    const title = useSelector((state) => state.product.type);
    const [sort, setSort] = useState("");
    let slug = props.location.pathname;
    slug = slug.split('/');
    let match = product.filter(e => e[1].type === slug[slug.length - 1]);
    const [items, setItems] = useState(match);
    const getTitle = () => {
        let titleArr = Object.entries(title);
        let x = titleArr.filter((ele) => ele[1].id === match[0][1].type);
        return x[0][1].name;
    }
    const getItem = () => {
        return items.map((e, i) => <Item data={e} key={i} />)
    }
    const handleSortItems = (e) => {
        let result;
        if (e.target.value === "up") {
            result = match.sort((a, b) => a[1].price - b[1].price);
        }
        if (e.target.value === "down") {
            result = match.sort((a, b) => b[1].price - a[1].price);
        }
        setSort(result);
    }
    useEffect(() => {
        if (sort !== "") {
            setItems(sort)
        }
    }, [sort])
    return (
        <>
            <Header />
            <div className="category">
                <div className="category-block">
                    <div className="category-block-top">
                        <h1>{getTitle()}</h1>
                        <div className="category-title-back">
                            <h2 >{getTitle()}</h2>
                        </div>
                    </div>
                    <div className="category-block-middle">
                        <ul>
                            <li>
                                <NavLink to='/product' className="li-Nav">sản phẩm</NavLink>
                            </li>
                            <li><i className="fas fa-angle-double-right"></i></li>
                            <li>{getTitle()}</li>
                        </ul>
                        <select className="sort-box" onClick={(e) => handleSortItems(e)}>
                            <option value="up">Giá tăng dần</option>
                            <option value="down">Giá giảm dần</option>
                        </select>
                    </div>
                    <div className="category-block-bottom">
                        {getItem()}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryPage;