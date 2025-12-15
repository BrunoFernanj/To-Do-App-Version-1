// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("addTodoBtn");
    const input = document.getElementById("todoInput");

    if (button) {
        button.addEventListener("click", function () {
            const value = input.value;
            alert("You typed: " + value);
        });
    }
});
