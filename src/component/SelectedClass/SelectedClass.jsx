import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import { authContext } from '../AuthProvider/AuthProvider';
const STRIPE_PUBLISHABLE_KEY = 'pk_test_51NI6RJJlO98Mt1tpy1EJVt8YGEWmBjaYDBIbiKK3TicjVHJyQVwUEoDnTEJJfOaHDebDD7I0KNZ45HxJrisVNUDD006WpyiR5T';



const SelectedClass = () => {
    const {user} = useContext(authContext);


    // State declaration of his component.
    const [selectedClass, setSelectedClass] = useState([]);





    useEffect(() => {
        fetch('https://zen-doj-server-shafin90.vercel.app/getting_selected_class')
            .then(res => res.json())
            .then(data => setSelectedClass(data))
    }, []);


    console.log(selectedClass)
       // filter current users selected class.
       const cuurentUsersSelectedClasses = selectedClass.filter(item=>item.email==user?.email); 




  
  
    const handlePayment = (classId) => {
        // Make an API call to process the payment
        fetch('https://zen-doj-server-shafin90.vercel.app/process_payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ classId })
        })
        .then(res => res.json())
        .then(data => {
            // Handle the response from the server
            console.log(data);
            // Redirect or show a success message after payment
        })
        .catch(error => {
            // Handle any errors that occurred during payment
            console.error(error);
            // Show an error message to the user
        });
    };
    
    console.log(cuurentUsersSelectedClasses)
    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Student Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cuurentUsersSelectedClasses.map(e => (
                        <tr key={e._id}>
                            <td><img className="table-image" src={e.image} alt="" /></td>
                            <td>{e.className}</td>
                            <td>loading</td>
                            <td>
                                <StripeCheckout
                                    token={() => handlePayment(e._id)}
                                    stripeKey={STRIPE_PUBLISHABLE_KEY}
                                    amount='100'
                                    name="Payment"
                                    currency="USD"
                                    description="Payment for selected class"
                                    panelLabel="Pay Now"
                                    locale="auto"
                                    allowRememberMe={false}
                                >
                                    <button className="btn btn-primary btn-sm">Payment</button>
                                </StripeCheckout>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default SelectedClass;
