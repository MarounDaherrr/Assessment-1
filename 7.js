var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
        this.currentId = 1;
    }
    TaskManager.prototype.addTask = function (name) {
        this.tasks.push({
            id: this.currentId,
            name: name,
            status: "Not Done"
        });
        this.currentId++;
    };
    TaskManager.prototype.completeTask = function (id) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === id) {
                this.tasks[i].status = "Completed";
                break;
            }
        }
    };
    TaskManager.prototype.displayTasks = function () {
        for (var i = 0; i < this.tasks.length; i++) {
            var task = this.tasks[i];
            console.log("Task ID: " + task.id +
                ", Name: \"" + task.name + "\"" +
                ", Status: " + task.status);
        }
    };
    return TaskManager;
}());
var taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.completeTask(1);
taskManager.displayTasks();
