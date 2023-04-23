import React from "react";
import "./Expense.css"
function Expense(props){
    console.log(props)
    var Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = props.expenseData.Date.split("-")
    console.log(date," ",typeof date)
    const amount = props.expenseData.Amount;
    const title = props.expenseData.Title;
    const month = Number.parseInt(date[1])-1;
    return (
        <div className="list-container">
            <div className="date-wrapper">
                <p className="year">{date[0]}</p>
                <p className="month">{Months[month]}</p>
                <p className="date">{date[2].slice(0,2)}</p>
            </div>
            <div className="title-wrapper">
                <p>{title}</p>
            </div>
            <div className="amount-wrapper">
                <p>{amount}</p>
            </div>
        </div>
    )
}

export default Expense;