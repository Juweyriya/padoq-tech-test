## EXPLANATION

From what i can see this Todo has been made in react and it uses class components. Initially all the components were located in app.js however i then separated the components into separate files.

The Todos(TodoList ) class component (i changed the name as it highted it as an error on my laptop) shows the list of todos and it uses methods from the other two components (Todo & AddTodo).

- HandleDelete, HandleDone and addNewTodo are attributes of the Todolist component which are passed down.

similarly, the Todo components uses its own methods such as fooDoneDone & fooDelete and it is responsible for showing single todos in the list. This

Lastly, from what i understand the AddTodo class component uses the handleChange method to update the state.
