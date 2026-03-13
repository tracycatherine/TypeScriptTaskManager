"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskManager {
    tasks = [];
    addTask(title) {
        const newTask = {
            id: this.tasks.length + 1,
            title: title,
            completed: false
        };
        this.tasks.push(newTask);
        console.log(`Task added: ${title}`);
    }
    viewTasks() {
        console.log("\nTask List:");
        if (this.tasks.length === 0) {
            console.log("No tasks available.");
            return;
        }
        this.tasks.forEach(task => {
            const status = task.completed ? "✅ Completed" : "❌ Not Completed";
            console.log(`${task.id}. ${task.title} - ${status}`);
        });
    }
    completeTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
            console.log(`Task ${id} marked as completed.`);
        }
        else {
            console.log("Task not found.");
        }
    }
    deleteTask(id) {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log(`Task ${id} deleted.`);
        }
        else {
            console.log("Task not found.");
        }
    }
}
// Create manager object
const manager = new TaskManager();
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
//# sourceMappingURL=taskManager.js.map