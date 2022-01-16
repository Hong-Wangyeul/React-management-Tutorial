import React from "react";
import CustomerProfile from "./CustomerProfile";
import CustomerInfo from "./CustomerInfo";


function Customer({customerList}){
    return  <div>
                <CustomerProfile name={customerList.name} id={customerList.id} image={customerList.image}/>
                <CustomerInfo birthday={customerList.birthday} gender={customerList.gender} job={customerList.job} married={customerList.married}/>
            </div>
}

// function CustomerProfile(){
//     return  <div>
//                 <img src = />
//     </div>
           
// }

export default Customer;
