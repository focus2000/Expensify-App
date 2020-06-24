// const person ={
//   name: 'kenneth',
//   age:27,
//   location:{
//     city:'kado',
//     temp:30
//   }
// };


//Object Destructuring

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Moliday',
  publisher: {
    //name: 'Penguin'
  }
};

const { name: publisherName = 'self-published' } = book.publisher;

console.log(publisherName);


//Array Destructuring

const item = ['coffee (hot)', '$2.00', '$2.60', '$2.76'];
const [tea, , amount] = item

console.log(`A medium ${tea}costs ${amount}`);