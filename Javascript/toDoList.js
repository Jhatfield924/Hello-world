window.setTimeout(function() {
  var todos = ["2", "10", "15"];

  var input = prompt("What would you like to do?");

  while (input !== "quit") {
    if (input === "list") {
      console.log("*****************");
      todos.forEach(function(todo, i) {
        console.log(i + ": " + todo);
        console.log("*****************");
      });
    } else if (input === "new") {
      var newTodo = prompt("Enter new todo");
      todos.push(newTodo);
    } else if (input === "delete") {
      var deleteTodo = prompt("Delete a todo");
      var removed = todos.splice(parseInt(deleteTodo, 10), 1);
      console.log(removed);
    }

    input = prompt("What would you like to do?");
  }
  console.log("OK, you quit the app!");
}, 500);
