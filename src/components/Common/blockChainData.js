import React from 'react';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
const ShowData = (props) =>
{
   const shippingObj = props.data
    return(
        <Table>
            <TableBody displayRowCheckbox={false}>
             {Object.keys(props.data).map((keyobj,index)=>
            {
                return (
                <TableRow key={index}>
                <TableRowColumn>{keyobj}</TableRowColumn>
                <TableRowColumn>{shippingObj[keyobj]}</TableRowColumn>
                </TableRow>)
            })}
            </TableBody>
            </Table>
    )
}


export default ShowData