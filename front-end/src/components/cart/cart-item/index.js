import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove, increase, decrease, increaseQty, decreaseQty } from "../../store/cartSlice"; 
// import { increase } from "../../store/cartSlice";
// import { decrease } from "../../store/cartSlice";

export const CartItem = (props) => {
    const dispatch = useDispatch();
    const data = props.data;

    var [quantity, setQunatity] = useState(1);
    // var [netPrice, setNetPrice] = useState(data.price*quantity);

    const modifyQuantity = (action, id) => {
        if (action === "increase") {
            quantity++;
            setQunatity(quantity);
            // setNetPrice(data.price*quantity);
            dispatch(increase(data.price));
            dispatch(increaseQty(id));

        } else if (action === "decrease") {
            if (quantity === 1) {
                setQunatity(1);
                // setNetPrice(data.price*quantity);
            } else {
                quantity--;
                setQunatity(quantity);
                // setNetPrice(data.price*quantity);
                dispatch(decrease(data.price));
                dispatch(decreaseQty(id));
            }
        }
    }

    const handleRemove = (bookId) => {
        dispatch(remove(bookId));
        dispatch(decrease(data.price*quantity));
    }

    return (
        <>
            <tr>
                <td>
                    <div className="cart-product-div">
                        <img src={"./images/" + data.path} alt="" />
                    </div>
                </td>
                <td>INR {data.price}</td>
                <td>
                    <div>
                        <div className="">
                            <button type="button" name="increase" onClick={(e) => modifyQuantity(e.target.name, data.id)}>+</button>
                        </div>
                        <div>
                            <span className="quantity">{quantity}</span>
                        </div>
                        <div className="">
                            <button type="button" name="decrease" onClick={(e) => modifyQuantity(e.target.name,data.id)}>-</button>
                        </div>
                    </div>
                </td>
                <td >{data.price*quantity}</td>
                <td>
                    <button type="button" onClick={() => handleRemove(data.id)}><AiOutlineClose className="delete-item" size={20} title="delete from cart"></AiOutlineClose></button>
                </td>
            </tr>
        </>
    );
}
