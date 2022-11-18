import {selectedLocation} from '../pages/Locations' //Receive selected location from locations page


//GET request
export async function getAllUsers() {
    try{
        const response = await fetch('http://localhost:8080/appointment');
        console.log(response);
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

//POST request
export async function createUser(data) {
    const response = await fetch(`http://localhost:8080/appointment`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}