import React from 'react';
import { Table, Card, Button } from 'react-bootstrap';

export const Dashboard = () => {
    return (
        <Card>
            <Card.Header className='table-heading'>Listings</Card.Header>
        <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Page Name</th>
                    <th>Category</th>
                    <th>Category List</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td><Button size="sm">Update</Button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
            </tbody>
        </Table>
        </Card>
    )
}