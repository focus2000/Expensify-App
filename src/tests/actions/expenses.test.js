import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

//Testing the removeExpense action
test('should setup remove expense action object', () => {
  let action;
  action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });

});