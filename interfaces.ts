// function showTodo(todo: {title: string, text: string}){
//   console.log(`${todo.title}: ${todo.text}`)
// }

// let myTodo = {title: 'Rubbish', text: 'Take out the rubbish'};

// showTodo(myTodo);

// an interface is kind of like a custom type that we can call on
interface Todo{
  title: string;
  text: string;
}

function showTodo(todo: Todo) {
  console.log(`${todo.title}: ${todo.text}`)
}
let myTodo = {title: 'Rubbish', text: 'Take out the rubbish'};
showTodo(myTodo);

interface MyObj {
  x: number,
  y: number,
  z?: number
}

const obj1: MyObj = {
  x: 3.52,
  y: -37,
}

const obj2: MyObj = {
  x: 9999999999999,
  y: 123,
  z: -0.928382742842
}