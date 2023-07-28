import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import {useState} from 'react';
import ListItem from './components/ListItem';
import Header from './components/Header';

function App() {
  
  const [todo,setTodo]=useState("");
  const [todoList,setTodoList]=useState([]);


  return (
    <div className="App">
      <Header/>
      <Todo todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}/>
      <ListItem todoList={todoList} setTodoList={setTodoList} />
     
    </div>
  );
}

export default App;
