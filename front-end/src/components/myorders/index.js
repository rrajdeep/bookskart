import React, { useEffect, useState } from "react";
import "./orders.css";
import { useSelector } from "react-redux";
import { OrderItem } from "./ordered-component";
import axios from "axios";
import {useAuth0} from "@auth0/auth0-react"

const styleObj = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "50px",
}

export const Orders = () => {

    const {user} = useAuth0();
    const [myOrder, setmyOrder] = useState([])
    useEffect(() => {
        const getOrders = async () => {
            const url = "http://localhost:3001/orders/" + user.name;
            const res = await axios.get(url);
            const data = await res.data;
            if(data[0] === undefined) {
                setmyOrder([]);
            } else {
                setmyOrder(data[0].items);
            }        
        };
        getOrders();
    },[]);

    // const orderItems = useSelector((state) => state.cart.orders) 

    return (
        <>
            {
                (myOrder.length === 0 || myOrder === undefined) ? 
                <div>No orders to show </div>
                :
                <div className="order-container" style={styleObj}>
                <table>
                    <caption>Order history</caption>
                    <tbody>
                    <tr>
                        <th>#</th>
                        <th>Order Id</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                    {
                        myOrder.map((item,index) => {
                            return(
                                <OrderItem key={index} data={item} sno={index}></OrderItem>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
            }
        </>
    );
}
