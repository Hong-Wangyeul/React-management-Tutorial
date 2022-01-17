import React from "react";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";


function CustomerProfile({name, id, image, birthday, gender, job, married}){
    return  <TableRow>
                <TableCell><p>{id}</p></TableCell>
                <TableCell><img src={image} alt="profile" /></TableCell>
                <TableCell><h2>{name}</h2></TableCell>
                <TableCell><p>{birthday}</p></TableCell>
                <TableCell><p>{gender}</p></TableCell>
                <TableCell><p>{job}</p></TableCell>
                <TableCell><p>{married}</p></TableCell>
            </TableRow>
}

export default CustomerProfile;
