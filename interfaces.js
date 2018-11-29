// function showTodo(todo: {title: string, text: string}){
//   console.log(`${todo.title}: ${todo.text}`)
// }
function showTodo(todo) {
    console.log(todo.title + ": " + todo.text);
}
var myTodo = { title: 11, text: 'Take out the rubbish' };
showTodo(myTodo);
