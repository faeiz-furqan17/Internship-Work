console.log("A todo list program");
TodoList = {
    name: "TodoList",
    todos: [],
    addTodo: function (todo) {
        this.todos.push(todo);
    },
}
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter todo", (todo) => {
    if (todo.value !== 0){
        TodoList.addTodo(todo);
       

    }
    rl.close();
});

rl.on("close", () => {
    console.log(TodoList.todos);
});
