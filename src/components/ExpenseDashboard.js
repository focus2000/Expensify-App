import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';


const ExpenseDashboard = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />

  </div>
);


export default ExpenseDashboard