import React from "react";
import Table from 'react-bootstrap/Table';
import {Dropdown, DropdownButton} from "react-bootstrap";

function Transaction(){
    return(
        <div className="bg-dark" style={{height:"100vh"}}>
            <div className="container p-5" >
            <h1 className="text-light">Incoming Transaction</h1>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr className="text-danger">
                    <th>No</th>
                    <th>User</th>
                    <th>Bukti Transfer</th>
                    <th>Remaining Active</th>
                    <th>Status User</th>
                    <th>Status Payment</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Radif Ganteng</td>
                    <td>bca.jpg</td>
                    <td>26/hari</td>
                    <td className="text-success">Active</td>
                    <td className="text-success">Approve</td>
                    <td>
                        <DropdownButton id="dropdown-basic-button" title="">
                        <Dropdown.Item href="#/action-1">Approve</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Cancel</Dropdown.Item>
                        </DropdownButton>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Haris Rahman</td>
                    <td>bni.jpg</td>
                    <td>26/hari</td>
                    <td className="text-success">Active</td>
                    <td className="text-success">Approve</td>
                    <td>
                        <DropdownButton id="dropdown-basic-button" title="">
                        <Dropdown.Item href="#/action-1">Approve</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Cancel</Dropdown.Item>
                        </DropdownButton>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Amin Subagyo</td>
                    <td>permata.jpg</td>
                    <td>0</td>
                    <td>Not Active</td>
                    <td>Cancel</td>
                    <td>
                        <DropdownButton id="dropdown-basic-button" title="">
                        <Dropdown.Item href="#/action-1">Approve</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Cancel</Dropdown.Item>
                        </DropdownButton>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Haris Astina</td>
                    <td>permata.jpg</td>
                    <td>0</td>
                    <td>Not Active</td>
                    <td className="text-warning">Pending</td>
                    <td>
                        <DropdownButton id="dropdown-basic-button" title="">
                        <Dropdown.Item href="#/action-1">Approve</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Cancel</Dropdown.Item>
                        </DropdownButton>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Aziz Oni On</td>
                    <td>bi.jpg</td>
                    <td>0</td>
                    <td>Not Active</td>
                    <td className="text-warning">Pending</td>
                    <td>
                        <DropdownButton id="dropdown-basic-button" title="">
                        <Dropdown.Item href="#/action-1">Approve</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Cancel</Dropdown.Item>
                        </DropdownButton>
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Sugeng No Pants</td>
                    <td>bni.jpg</td>
                    <td>0</td>
                    <td>Not Active</td>
                    <td className="text-warning">Pending</td>
                    <td>
                        <DropdownButton id="dropdown-basic-button" title="">
                        <Dropdown.Item href="#/action-1">Approve</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Cancel</Dropdown.Item>
                        </DropdownButton>
                    </td>
                </tr>
            </tbody>
            </Table>
        </div>
        </div>
        
        
    );
}

export default Transaction;