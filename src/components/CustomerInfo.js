import React from "react";

function CustomerInfo({birthday, gender, job, married}){
    return  <div>
                <p>{birthday}</p>
                <p>{gender}</p>
                <p>{job}</p>
                <p>{married}</p>
            </div>
}





export default CustomerInfo;

