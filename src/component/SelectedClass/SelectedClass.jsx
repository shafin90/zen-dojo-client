import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import { authContext } from '../AuthProvider/AuthProvider';
const STRIPE_PUBLISHABLE_KEY = 'pk_test_51NI6RJJlO98Mt1tpy1EJVt8YGEWmBjaYDBIbiKK3TicjVHJyQVwUEoDnTEJJfOaHDebDD7I0KNZ45HxJrisVNUDD006WpyiR5T';



const SelectedClass = () => {
    // Recieving data from authprovider through context API.
    const { user } = useContext(authContext);


    // State declaration of his component.
    const [selectedClass, setSelectedClass] = useState([]);
    const [email, setEmail] = useState('');






    useEffect(() => {
        setEmail(user?.email)
    }, [])



    useEffect(() => {
        fetch('https://zen-doj-server-shafin90.vercel.app/getting_selected_class')
            .then(res => res.json())
            .then(data => setSelectedClass(data))
    }, []);


    console.log(selectedClass)
    // filter current users selected class.
    let cuurentUsersSelectedClasses = selectedClass.filter(item => item.userEmail == user?.email);

    const filter = () => {
        fetch('https://zen-doj-server-shafin90.vercel.app/getting_selected_class')
            .then(res => res.json())
            .then(data => setSelectedClass(data))


        cuurentUsersSelectedClasses = selectedClass.filter(item => item.userEmail == user?.email);
    }







    const handlePayment = (className, classId, amount) => {
        // Make an API call to process the payment
        fetch('https://zen-doj-server-shafin90.vercel.app/process_payment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ className, classId, amount, email })
        })
            .then(res => res.json())
            .then(data => {
                // Handle the response from the server
                console.log(data);
                // Redirect or show a success message after payment


                // deleting data from sleected list
                fetch(`https://zen-doj-server-shafin90.vercel.app/${classId}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            alert('deleted successfully')
                            filter();
                        }
                        else {
                            alert('not deleted yet')
                        }
                    })


            })
            .catch(error => {
                // Handle any errors that occurred during payment
                console.error(error);
                // Show an error message to the user
            });
    };

    console.log(cuurentUsersSelectedClasses)
    // console.log(typeof  )
    return (
        <Container >
            <h1 className='text-center fw-bold display-4 mb-4'>My Selected Classes</h1>
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
                                    token={() => handlePayment(e.className, e._id, parseInt(cuurentUsersSelectedClasses[0]?.price))}
                                    stripeKey={STRIPE_PUBLISHABLE_KEY}
                                    amount={parseInt(cuurentUsersSelectedClasses[0]?.price)}
                                    name="Payment"
                                    currency="USD"
                                    description="Payment for selected class"
                                    panelLabel="Pay Now"
                                    locale="auto"
                                    allowRememberMe={false}
                                >
                                    <button className="btn no-border-radius bg-blue text-white btn-sm">Payment</button>
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
