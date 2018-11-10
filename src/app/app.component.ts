import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'Todos';
  placeholderText = 'What needs to be done???';
  background = 'yellow';

  todos = [];

  todoValue;

  newTodo(inputElement) {
    // 使用樣版變數
    // this.todos.push(inputElement.value);
    // inputElement.value = '';

    // 使用 ngModel 的值
    this.todos.push({
      label: this.todoValue,
      isCompleted: false
    });
    this.todoValue = '';
  }

  toggleComplete(todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  completeAll() {
    this.todos.forEach(todo => (todo.isCompleted = true));
  }
}
