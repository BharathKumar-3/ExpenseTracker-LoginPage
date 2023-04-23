import React from "react";
import './ExpenseForm.css';
import { useState } from "react";
function ExpenseForm(props){
    const[title,setTitle] = useState("")
    const[amount,setAmount]=useState("")
    const[date,setDate]=useState("");
    const onDateChange =(event)=>{
        setDate(event.target.value)
    }
    const onAmountChange =(event)=>{
        setAmount(event.target.value)
    }
    const onTitleChange =(event)=>{
        setTitle(event.target.value)
    }
    const formSubmit = (event)=>{
        event.preventDefault();
        const formatedDate = new Date(date)
        let day = formatedDate.getDate();
        let month = formatedDate.getMonth();
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        const year = formatedDate.getFullYear();
        console.log([year,month,day].join("-"))
        props.update({
            Title:title,
            Amount:amount,
            Date:[year,month,day].join("-")
        });
        console.log(title+" "+amount+" "+date);
    }
    return(
        <div className="form-wrapper">
            <form onSubmit={formSubmit} className="expense-form">
                <div className="expense-input-wrapper">
                    <label htmlFor="">Title</label>
                    <input type="text" required value={title} placeholder="Enter the title"
                    onChange={onTitleChange}/>
                </div>
                <div className="expense-input-wrapper">
                    <label htmlFor="">Amount</label>
                    <input type="number" required value={amount} placeholder="Enter the amount"
                    onChange={onAmountChange}/>
                </div>
                <div className="expense-input-wrapper">
                    <label htmlFor="">Date</label>
                    <input type="Date" required value={date} onChange={onDateChange}/>
                </div>
                <button type="submit" className="add-expense">
                    Add expense
                </button>
            </form>
            
        </div>
    )
}

export default ExpenseForm;