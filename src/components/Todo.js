import {useState} from 'react';
import ListItem from './ListItem';
import shortid from 'shortid';

function Todo({todo,setTodo,todoList,setTodoList})
{
    const handleTodo=(event)=>
    {
        setTodo(event.target.value);
    }
    const handleSubmit=(event)=>
    {
        event.preventDefault();
        setTodoList([...todoList,{name:todo,id:shortid.generate()}]);
        console.log(todoList);
        setTodo("");
    }
    return<div class="container">
       
        <form onSubmit={handleSubmit} class="mt-5">
            <div class="row">
            <div class="col-10">
            <input type="text" class="form-control " onChange={handleTodo} value={todo} placeholder="Add todo Item" />
            </div>
            <div class="col-1">

            <input type="submit" value="Add" class="btn btn-primary"/>

            </div>
          
           

            </div>
           
        </form>
      
             
        </div>
}

export default Todo;