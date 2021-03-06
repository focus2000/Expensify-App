import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';



export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // id: Math.random(),
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toStringe() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),

      calendarFocused: false,
      error: ''
    }
  }



  onDescriptionChange = (e) => {

    const description = e.target.value;
    this.setState(() => ({ description }));




  }
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    try {

      this.setState(() => ({ calendarFocused: focused }))
    } catch (e) {

    }

  };


  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      //set error message
      this.setState(() => ({ error: 'Please Provide description and amount' }))

    } else {
      //clear error
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        //id: Math.random(),
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };


  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Description" value={this.state.description} onChange={this.onDescriptionChange} autoFocus />

          <input type="number" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />

          <SingleDatePicker date={this.state.createdAt} onDateChange={this.onDateChange} focused={this.state.calendarFocused} onFocusChange={this.onFocusChange} numberOfMonths={1} isOutsideRange={() => false} />

          <textarea placeholder="Add a note for expense (optional)" value={this.state.note} onChange={this.onNoteChange}>
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

//export default ExpenseForm;
