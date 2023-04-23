import React from "react";
import './expenseList.css';
import Expense from "./Expenses/Expense";
const ExpenseList = (props)=>{
    const data = (props.data);
    const arr = [1,2,4]
    console.log(arr)
    console.log(data[0])
    console.log(props.data,"\n",arr)
    return(
        <div className="list-wrapper">
            {
                data.map((x)=>
                    <Expense expenseData={
                        {  "Date":x.Date,
                           "Title":x.Title,
                            "Amount":x.Amount,
                        }
                    } 
                    key = {1}
                    />
                )
            }
        </div>
    )
}

export default ExpenseList;