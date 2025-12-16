const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodo: "",
            todos: JSON.parse(localStorage.getItem("todos")) || []
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo === "") return;

            this.todos.push(this.newTodo);
            localStorage.setItem("todos", JSON.stringify(this.todos));
            this.newTodo = "";
        }
    }
}).mount("#app");
