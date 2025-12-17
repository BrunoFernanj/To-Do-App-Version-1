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

            this.todos.push({
                text: this.newTodo,
                completed: false
            });

            this.saveTodos();
            this.newTodo = "";
        },

        removeTodo(index) {
            this.todos.splice(index, 1);
            this.saveTodos();
        },

        saveTodos() {
            localStorage.setItem("todos", JSON.stringify(this.todos));
        }
    }

}).mount("#app");
