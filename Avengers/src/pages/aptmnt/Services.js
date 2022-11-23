import React, { useEffect, useState } from "react";
import { Button, Card, Figure, Table } from "react-bootstrap";
import "./Services.css"
 
function Services({updateService}) {
  
  const initialservice = {
    sname: ""
  };  

 
  const [service, setService] = useState(initialservice);

  const selectService =(e,data) =>{
    // e.preventDefault();
    console.log("Service component : " + data);
    setService({...service,  sname:data});
  }

  useEffect(()=>{
    setService(service)
  },[])
 



    return (
    <div> <br/><br/><br/><br/>

    <Table width = "600" striped bordered hover size="sm">
      <tbody>
        <tr >
            <td width = "200">    
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="AutoLoans.jpg"/>
                        <Card.Body>
                        <Card.Title>Auto Loans</Card.Title>
                        <Card.Text>
                        ..... Descriptions
                        </Card.Text>
                        <Button variant="primary" onClick={(e) => {selectService(e, 'Auto Loans')}}>Select</Button>
                        </Card.Body>
                </Card>
            </td>
            <td width = "200">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="SavingAccount.jpg"/>
                        <Card.Body>
                        <Card.Title>Savings Account</Card.Title>
                        <Card.Text>
                        .....
                        </Card.Text>
                        <Button variant="primary" onClick={(e) => {selectService(e, 'Savings Account')}}>Select</Button>
                        </Card.Body>
                </Card>
            </td>
            <td >
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="StudentBanking.jpg"/>
                        <Card.Body>
                        <Card.Title>Student Banking</Card.Title>
                        <Card.Text>
                        .....
                        </Card.Text>
                        <Button variant="primary" onClick={(e) => {selectService(e, 'Student Banking')}}>Select</Button>
                        </Card.Body>
                </Card>

            </td>
        </tr>
      </tbody>
    </Table>
        
    <button className="continueBtn" key={service.name} onClick={(e) => {updateService(e, service.sname)}}>Continue</button>
    </div>
     );
}
    
export default Services;