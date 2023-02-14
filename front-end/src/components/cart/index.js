import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "./cart-item";
// import { AiOutlineClose } from "react-icons/ai"
import "./cart.css";
import { addToOrders, emptyCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const Cart = () => {
    const { user, isAuthenticated } = useAuth0();
    console.log(user.email);
    const dispatch = useDispatch();
    var items = useSelector((state) => state.cart.basket);
    var subTotal = useSelector((state) => state.cart.total);

    const handleOrder = async (items) => {
        try {
            await items.map((ele) => {
                dispatch(addToOrders(ele));
            });
            
            const body = {
                userId: user.name,
                order: items,
            }
            const res = await axios.post("http://localhost:3001/orders", body);
            const data = await res.data;
            console.log("message from post", data);
            dispatch(emptyCart());
        } catch (err) {
            console.log("Error in post", err);
        }
    }

    return (
        <>
        
        {
            (items.length === 0 || items === undefined) ?
            <div>
                <img src="./images/empty-cart.png" alt="empty-cart"></img>
            </div>
            :          
            <div className="cart-container">
            <table>
                <tbody>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                    {
                        items && items.map((item, index) => {
                            return (
                                <CartItem key={index} data={item}></CartItem>
                            )
                        })
                    }
                </tbody>
            </table>
            <div>
                <h3>Total: {subTotal}</h3>
            </div>
            <div>
                <button type="button" className="checkout-btn" onClick={() => handleOrder(items)}>Place order</button>
            </div>
        </div>}
        </>
    )
}
