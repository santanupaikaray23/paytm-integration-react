import React from 'react';

const App = () => {
  const getData=(data)=>{
    return fetch('http://localhost:5000/api/payment',{
 method:"POST",
 headers:{
   Accept:"application/json",
   "Content-Type":"application/json"
 },
 body:JSON.stringify(data)     
    }).then(response=>response.json()).catch(err=>console.log(err))
  }
  const makePayment=()=>{
    getData({amount:500,email:'abc@gmailcom'}).then(response=>console.log(response))
  }
  return(
    <div>
      <button onClick={makePayment}>PAY USING PAYTM</button>
    </div>
  )
}
export default App;