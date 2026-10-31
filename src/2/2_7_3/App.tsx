import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

export type Todo = { id: number; title: string; done: boolean };
let nextId = 3;
const initialTodos: Todo[] = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);
  function handleAddTodo(title: string) {
    setTodos(items => [...items, { id: nextId++, title, done: false }]);
  }
  function handleChangeTodo(nextTodo: Todo) {
    setTodos(items => items.map(item => item.id === nextTodo.id ? nextTodo : item));
  }
  function handleDeleteTodo(todoId: number) {
    setTodos(items => items.filter(item => item.id !== todoId));
  }
  return <><AddTodo onAddTodo={handleAddTodo} />
    <TaskList todos={todos} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo} />
  </>;
}
