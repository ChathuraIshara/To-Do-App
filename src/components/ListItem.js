import {useState} from 'react';
import Item from './Item';

function ListItem({todo,setTodo,todoList,setTodoList})
{
    return(
        <div class="container mt-5">
           
                    {todoList.map((item)=>(<Item item={item}  todoList={todoList} setTodoList={setTodoList}/>))}
                
            
        </div>
    );
}

export default ListItem;
