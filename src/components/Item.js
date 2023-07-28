const Item=({item,todoList,setTodoList})=>
{
    const deleteItem=()=>
    {
        setTodoList(todoList.filter((itemf)=>itemf.id!==item.id));
       
       
        
    }
    return <div class="container mt-3">
        <div class="row">
            <div class="col">

            <h1 class="lead text-dark ">{item.name}</h1>

            </div>
            <div class="col">
            <button onClick={deleteItem} class="btn btn-success">Done</button>

            </div>

        </div>
       
       

    </div>
}
export default Item;