import React from 'react'
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({
  expense: { id, charge, amount }
}) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div>
        <button className="edit-btn">
          <MdEdit />
        </button>
        <button className="clear-btn">
          <MdDelete />
        </button>
      </div>
    </li>
  )
}

export default ExpenseItem
