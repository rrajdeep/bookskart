import React from "react";

export const OrderItem = (props) => {
    const data = props.data;
    return (
        <>
            <tr>
                <td>{parseInt(props.sno) + 1}</td>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.qty}</td>
                <td>{data.price * data.qty}</td>
                <td>Complete</td>
            </tr>
        </>
    )
}
