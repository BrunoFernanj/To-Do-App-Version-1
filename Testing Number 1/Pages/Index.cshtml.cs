using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Testing_Number_1.Models;
using System.Collections.Generic;


namespace Testing_Number_1.Pages
{
    public class IndexModel : PageModel
    {
        public List<TodoItem> TodoItems { get; set; } = new();

        public void OnGet()
        {
            TodoItems = new List<TodoItem>
{
    new TodoItem { Id = 1, Title = "Learn ASP.NET", IsCompleted = false },
    new TodoItem { Id = 2, Title = "Build ToDo App", IsCompleted = false }
};

        }
    }
}
