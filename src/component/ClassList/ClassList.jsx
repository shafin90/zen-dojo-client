import { useContext, useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { authContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const ClassList = () => {

    // Getting data from AuthProvider component through context API.
    const {user} = useContext(authContext);
    
    // Declaring state for this component.
    const [classList, setClassList] = useState([]);


    // Declaring usenavigation hook.
    const navigate = useNavigate();



    // Loading al data of class.
    useEffect(() => {
        fetch('https://zen-doj-server-shafin90.vercel.app/getting_approved_classes')
            .then(res => res.json())
            .then(data => setClassList(data))
    }, [])



    // Spinner will be shown untill the data is loaded.
    if(classList.length==0){
        return (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          );
    }



    // When user click on select button, then this function will be excecuted.
    const handleSelection=(item)=>{
        // If user wants to select a class without being logged in account, then user will be redirected to login page.
        if(!user){  
            navigate('/login')
        }

        console.log(item)
    
        // Sending the class data to the server to store it as selected class for the user.
        fetch('https://zen-doj-server-shafin90.vercel.app/selected_class',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({...item, userEmail:user?.email})
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }



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
                    {
                        classList.map(e => {
                            return (
                                <tr key={e._id}>
                                    <td><img className="table-image" src={e.image} alt="" /></td>
                                    <td>{e.className}</td>
                                    <td>loading</td>
                                    <td><button onClick={()=>handleSelection(e)} className="btn no-border-radius bg-blue px-3 btn-sm text-white">select</button></td>
                                </tr>
                            )

                        })
                    }

                </tbody>
            </Table>

        </Container>
    );
};

export default ClassList;