import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap';
import {Route} from 'react-router-dom';
import Header from './components/Header'
import SaveForm from './pages/user/SaveForm';
import Home from './pages/book/Home';
import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';
import UpdateForm from './pages/user/UpdateForm';
import Detail from './pages/book/Detail';
import AptmntNavbar from './components/AptmntNavbar';
import Locations from './pages/aptmnt/Locations';
import { useEffect, useState } from 'react';
import Times from './pages/aptmnt/Times';
import Details from './pages/aptmnt/Details';
import Services from './pages/aptmnt/Services';
import Info from './pages/aptmnt/Info';

function App() {


  useEffect(()=>{
    setAptmnt(aptmnt)
  },[])

  const appointment = {
    service: "",
    location:"",
    time:"",
    fname:"",
    lname:"",
    email:"",
    phone:"",
  };  

  const [aptmnt, setAptmnt] = useState(appointment);
  const [status, setStatus] = useState(0);

  const updateState=(e, state)=>{
  
    e.preventDefault();
    setAptmnt(state);
    console.log("service : " + state);
    setStatus(state);

 }


  const updateService=(e, data)=>{
  
    // e.preventDefault();
    setAptmnt({...aptmnt,  service:data});

    console.log("service : " + data);
    console.log("1 appointment =>")
    console.log(aptmnt);
    setStatus(1);


 }


  const updateLocation=(e, data)=>{
  
     e.preventDefault();
     setAptmnt({...aptmnt,  location:data});
     console.log("location : " + data);
     setStatus(2);

     console.log("2 appointment =>")
     console.log(aptmnt);
  }

  const updateTime=(e, data)=>{
  
    e.preventDefault();
    setAptmnt({...aptmnt,  time:data});
    console.log("time : " + data);
    setStatus(3);


    console.log("3 appointment =>")
    console.log(aptmnt);
 }

 const updateUser=(e, data)=>{
  
  e.preventDefault();
  setAptmnt({...aptmnt,  fname:data});
  console.log("fname : " + data);
  setStatus(3);


  console.log("4 appointment =>")
  console.log(aptmnt);
}

  return (
    <div>
      <AptmntNavbar updateState={updateState}/>
      {(status===0)&&<Services updateService = {updateService}/>}
      {(status===1)&&<Locations updateLocation = {updateLocation}/>}
      {(status===2)&&<Times updateTime ={updateTime}/>}
      {(status===3)&&<Details updateUser ={updateUser}/>}
      {(status===4)&&<Info/>}
      


      {/* <Container>
        <Route path="/locations" exact={true} component={Locations}/>
        <Route path="/" exact={true} component={Home}/>  
        <Route path="/save" exact={true} component={SaveForm}/>
        <Route path="/book/:id" exact={true} component={Detail}/>
        <Route path="/login" exact={true} component={LoginForm}/>
        <Route path="/join" exact={true} component={JoinForm}/>
        <Route path="/update/:id" exact={true} component={UpdateForm}/>
      </Container>     */}
    </div>
  );
}

export default App;
