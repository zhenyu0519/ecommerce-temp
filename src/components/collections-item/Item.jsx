import React from "react";
// redux
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";
// component
import CustomButton from "../custom-button/CustomButton";

import "./item.scss";

function Item({ item, addItem }) {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(Item);
