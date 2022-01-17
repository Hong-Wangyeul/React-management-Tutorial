import React from "react";
import CustomerProfile from "./CustomerProfile";
import CustomerInfo from "./CustomerInfo";
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';



function Customer({customerList}){
    return  <CustomerProfile name={customerList.name} id={customerList.id} image={customerList.image} birthday={customerList.birthday} gender={customerList.gender} job={customerList.job} married={customerList.married}/> 
                    {/* <CustomerInfo birthday={customerList.birthday} gender={customerList.gender} job={customerList.job} married={customerList.married}/> */}
    }

// function CustomerProfile(){
//     return  <div>
//                 <img src = />
//     </div>
           
// }

export default Customer;
