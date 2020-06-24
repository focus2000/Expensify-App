import { createStore } from 'redux';

//Action generators these are functions/function that returns action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})



//Reducers
const countReducers = (state = { count: 0 }, action) => {
  switch (action.type) {


    case 'INCREMENT':

      return {
        count: state.count + action.incrementBy
      };

    case 'DECREMENT':

      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      }

    case 'RESET':
      return {
        count: 0
      };




    default:
      return state;
  }

  //Make a store
  const store = createStore((state = { count: 0 }, action) => {





  });


}
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());

})





//Actions = they are objects that gets sent to the state

//Increament of the count in the state

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch({
  type: 'INCREMENT'
});


store.dispatch(resetCount())

store.dispatch(decrementCount());


store.dispatch(decrementCount({ decrementBy: 10 }));



store.dispatch(setCount({ count: 101 }))

