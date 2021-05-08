import './AddNewExpense.css'

import React from 'react'

const AddNewExpense = ({ changedisplay }) => {
    return (
        <div className="addnew__container">
            <button className="addnew__button" onClick={changedisplay}>Add Expense</button>

        </div>
    )
}
export default AddNewExpense;
