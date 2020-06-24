import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => (
  <header>
    <h1>Expensify</h1>

    <NavLink to="/" activClassName="is-active" exact={true}>Dashboard</NavLink>

    <NavLink to="/create" activClassName="is-active" exact={true}>Create Expense</NavLink>



    <NavLink to="/help" activClassName="is-active" exact={true}>Help</NavLink>


  </header>
);

export default Header;