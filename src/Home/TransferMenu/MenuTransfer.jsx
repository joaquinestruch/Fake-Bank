import React, { useState } from "react";


import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MenuTransfer() {

  const [errorMessage, setErrorMessage] = useState(null);
  const [succesFullTrans, setSuccesFullTrans] = useState(null);
  const  sendTransaccions = async (bankIdSendder, bankIdReciber, amountSender) => {
    

    const reqOptionsSubstracMoney = {
      method: "PUT",
      body: JSON.stringify({
        "amount": amountSender
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const changeSenderTranscaccions = {
      method: "PUT",
      body: JSON.stringify({
        transaccions: {
          "transactionId": uuidv4(),
          "amount": amountSender, 
          "type": "send"
        }

      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const changeReciberTranscaccions = {
      method: "PUT",
      body: JSON.stringify({

        transaccions: {
          "transactionId": uuidv4(),
          "amount": amountSender, 
          "type": "received"
        }


      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const moneyUser = JSON.parse(sessionStorage.getItem("userData")); 

    if(amountSender > moneyUser.money ){
      setErrorMessage('Insufficient balance.');
      
      setTimeout(() => {
        setErrorMessage(null)
      }, 2000);

      return
    }

    if(bankIdSendder == bankIdReciber){
      setErrorMessage('You cannot make transfers to yourself.');
      
      setTimeout(() => {
        setErrorMessage(null)
      }, 2000);

      return
    }

    try{

      const res = await fetch(`https://fake-bank-server-production.up.railway.app/api/users/${bankIdReciber}/add`, reqOptionsSubstracMoney).catch(error => {
        return
      })
      const data = await res.json(); 

      if(data.error != undefined){
        setErrorMessage('Incorrect Bank Id');
      
        setTimeout(() => {
          setErrorMessage(null)
        }, 2000);
  
        return
      }

      try{
        
        const res = await fetch(`https://fake-bank-server-production.up.railway.app/api/users/${bankIdSendder}/subtract`, reqOptionsSubstracMoney).catch(error => {return})
        const data = await res.json(); 

        if(data.error != undefined){

          return  
        }

        try{

          const res = await fetch(`https://fake-bank-server-production.up.railway.app/api/users/${bankIdSendder}`, changeSenderTranscaccions).catch(error => {return})
          const data = await res.json(); 

          console.log("cambio en las trasnacciones del sendder")

          try{

            const res = await fetch(`https://fake-bank-server-production.up.railway.app/api/users/${bankIdReciber}`, changeReciberTranscaccions).catch(error => {return})
            const data = await res.json(); 
            
            setSuccesFullTrans("Transfer completed successfully")

            setTimeout(() => {
              setSuccesFullTrans(null)
            }, 2000);

          }catch(error){
            
            console.log(error)
            return
          }

        }catch(error){
          console.log(error)
          return
        }



      }catch(error){
        console.log(error)
        return
      }



    }catch(error){
      console.log(error)
      return
    }


  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new window.FormData(event.target);
    const bankIdReciber = data.get("BankId");
    const amountSender = data.get("amount");

    const bankIdSendder = sessionStorage.getItem("userId");

    sendTransaccions(bankIdSendder, bankIdReciber, amountSender);


  };

  return (
    <div className="menu-transfer-send">

      <button className="button-copy-bank-id-example" onClick={(e) => {
        e.preventDefault()
        navigator.clipboard.writeText("6443c5db6bb872c98b71703d")
      }}>Example Bank Id</button>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="BankId">Bank Id</label>
        <input  required type="text" name="BankId" placeholder="123213515135" />

        <label htmlFor="amount">Amount</label>
        <input required type="number" name="amount" placeholder="1000" />

        <button type="submit">Send</button>
      </form>
      {
        errorMessage != null ? (
          <div className="error-transaccion-div">
            <p>{errorMessage}</p>
          </div>
        )
        : ""
          
        
      }
      {
        succesFullTrans != null ? (
          <div className="success-transaccion-div">
          <p>{succesFullTrans}</p>
        </div>
        )
        : ""
      }
    </div>
  );
}

export default MenuTransfer;
