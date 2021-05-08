import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

function CategoryPage(props) {
    const product = useSelector(state => state.product.data);
    const title = useSelector((state) => state.product.type);
    let slug = props.location.pathname;
    slug = slug.split('/');
    let match = product.filter(e => e[1].type === slug[slug.length - 1]);
    const getTitle = () => {
        let titleArr = Object.entries(title);
        let x = titleArr.filter((ele) => ele[1].id === match[0][1].type);
        return x[0][1].name;
    }
    return (
        <>
            <Header />
            <div className="category">
                <div className="category-block">
                    <ul>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </div>
                <div className="category-block">
                    <div className="category-block-top">
                        <h1>{getTitle()}</h1>
                        <div className="category-title-back">
                            <h2 >{getTitle()}</h2>
                        </div>

                    </div>
                    <div className="category-block-bottom">
                        item
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryPage;