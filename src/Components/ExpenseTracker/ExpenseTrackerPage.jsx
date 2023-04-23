import React from "react";
import './ExpenseTrackerPage.css'
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseList from "./Expenselist/expenseList";
import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
function ExpenseTrackerPage()
{
    const [ExpenseData,setExpense] = useState([])
    let params = useParams();
    console.log(params)
    let id = params.id;
    console.log(id)
    const updateExpense = async (updatedData)=>{
        let data_send = {...updatedData,userId:id}
        console.log(data_send)
        try{
            await fetch("https://expense-tracker-login.onrender.com/api/addExpense",{
                method:"PUT",
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data_send)
            }).then(response=>response.json()).then(res=>{
                console.log(res)
            }).catch(error=>{
                console.log(error)
            })
            console.log(updatedData)
            setExpense([updatedData,...ExpenseData])
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        try{
                    fetch("https://expense-tracker-login.onrender.com/api/getExpense",{
                    method:"POST",
                    mode: 'cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({userId:id})
                        }
                    ).then(respone=>respone.json()).then(res=>{
                        console.log(res.data)
                        setExpense(res.data)
                    })
        }
        catch(error){
            console.log(error)
        }
    },[id])
    
    return(
        <div className="Wrapper">
            <ExpenseForm update = {updateExpense}/>
            <ExpenseList data = {ExpenseData}/>
        </div>
    )
}

export default ExpenseTrackerPage;