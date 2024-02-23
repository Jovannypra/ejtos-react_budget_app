import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span style={{ color: "darkred", fontWeight:"bold" }}>Gastos: $ {totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;