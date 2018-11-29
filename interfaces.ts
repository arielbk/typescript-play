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
let myTodo = {title: 11, text: 'Take out the rubbish'};
showTodo(myTodo);