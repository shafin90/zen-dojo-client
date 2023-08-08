import { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";


const ClassList = () => {

    const [classList, setClassList] = useState([]);

    useEffect(() => {
        fetch('https://zen-doj-server-shafin90.vercel.app/getting_approved_classes')
            .then(res => res.json())
            .then(data => setClassList(data))
    }, [])



    if(classList.length==0){
        return (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          );
    }



    const handleSelection=(item)=>{
        console.log('its working')
        fetch('https://zen-doj-server-shafin90.vercel.app/selected_class',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
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
                                    <td><button onClick={()=>handleSelection(e)} className="btn btn-primary btn-sm">select</button></td>
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