class TaskManager {
    private tasks: { id: number; name: string; status: string }[] = [];
    private currentId: number = 1;
  
    addTask(name: string): void {
      this.tasks.push({
        id: this.currentId,
        name: name,
        status: "Not Done"
      });
      this.currentId++;
    }
  
    completeTask(id: number): void {
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id === id) {
          this.tasks[i].status = "Completed";
          break;
        }
      }
    }
  
    displayTasks(): void {
      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
        console.log(
          "Task ID: " + task.id +
          ", Name: \"" + task.name + "\"" +
          ", Status: " + task.status
        );
      }
    }
  }

const taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.completeTask(1);
taskManager.displayTasks();