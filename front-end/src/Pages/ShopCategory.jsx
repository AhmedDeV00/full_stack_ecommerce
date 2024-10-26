import React, { useContext } from 'react'
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopCategory";
import dropdown_icon from "../Components/assets/Frontend_Assets/dropdown_icon.png";
import Item from '../Components/item/Item.jsx';

function ShopCategory(props) {

    const { all_product } = useContext(ShopContext);
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item) => {
                    if (props.category === item.category) {
                        return <Item key={item._id} id={item._id} name={item.name} image={`https://full-stack-ecommerce-or2v.onrender.com/${item.image}`} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else {
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">Explore More</div>
        </div>
    )
}

export default ShopCategory
