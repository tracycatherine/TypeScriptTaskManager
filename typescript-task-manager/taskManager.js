var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (title) {
        var newTask = {
            id: this.tasks.length + 1,
            title: title,
            completed: false
        };
        this.tasks.push(newTask);
        console.log("Task added: ".concat(title));
    };
    TaskManager.prototype.viewTasks = function () {
        console.log("\nTask List:");
        if (this.tasks.length === 0) {
            console.log("No tasks available.");
            return;
        }
        this.tasks.forEach(function (task) {
            var status = task.completed ? "✅ Completed" : "❌ Not Completed";
            console.log("".concat(task.id, ". ").concat(task.title, " - ").concat(status));
        });
    };
    TaskManager.prototype.completeTask = function (id) {
        var task = this.tasks.find(function (t) { return t.id === id; });
        if (task) {
            task.completed = true;
            console.log("Task ".concat(id, " marked as completed."));
        }
        else {
            console.log("Task not found.");
        }
    };
    TaskManager.prototype.deleteTask = function (id) {
        var index = this.tasks.findIndex(function (t) { return t.id === id; });
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log("Task ".concat(id, " deleted."));
        }
        else {
            console.log("Task not found.");
        }
    };
    return TaskManager;
}());
// Create manager object
var manager = new TaskManager();
// Demonstration
console.log("=== TypeScript Task Manager Demo ===");
manager.addTask("Learn TypeScript");
manager.addTask("Build a Task Manager Project");
manager.addTask("Record module demo video");
manager.viewTasks();
console.log("\nCompleting task 1...");
manager.completeTask(1);
manager.viewTasks();
console.log("\nDeleting task 2...");
manager.deleteTask(2);
manager.viewTasks();
