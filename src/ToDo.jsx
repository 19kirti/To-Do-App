import React, {useState} from 'react'

/*ToDo list Component*/

export default function ToDo(props) {

    const[todo, setTodo] = useState([]);
    const[input, setInput] = useState("");
    const[isEditing, setIsEditing] = useState(false);
    const[currentTodoIndex, setCurrentTodoIndex] = useState(null);
 
    const addingOrEditing = () => {                                 /*function for adding the ToDo*/
        if(input.trim()===""){
            props.showAlert("Please enter some ToDo!", "warning")
            return;
        }
        if(isEditing){
        const updatedTodo = [...todo];
        updatedTodo[currentTodoIndex] = input;
        setTodo(updatedTodo);
        setIsEditing(false);
        setCurrentTodoIndex(null);
        props.showAlert("ToDo edited successfully!", "info")
    }
    else{
        setTodo([...todo, input]);
        props.showAlert("ToDo added successfully!", "success")
    }
    setInput("");
}

    const handleOnChange = (event) => {                          /* Change handled*/
        setInput(event.target.value);
    }

    const editing = (index) => {                                 /*function for editing ToDo*/
        setInput(todo[index]);
        setIsEditing(true);
        setCurrentTodoIndex(index);
    }

    const removing = (index) => {                                 /*function for removing ToDo*/
        const newTodos = [...todo];  
        newTodos.splice(index, 1);  
        setTodo(newTodos); 
        props.showAlert("ToDo removed!", "danger")

    };
    
  return (
    <div class="container my-2">

    <div class="container d-flex align-items-center flex-nowrap mx-4" >
  <input type="text" class="form-control form-control-lg" value={input} onChange={handleOnChange} placeholder="Enter your ToDos here" aria-label="Username" aria-describedby="addon-wrapping" style={{backgroundColor:props.mode==='light'? 'white' : 'black', color: props.mode==='light'? 'black':'white'}}/>
  <button type="button" onClick={addingOrEditing} class="btn btn-success my-5 mx-5 btn-lg">ADD</button>
</div>

    <ul class="mx-5 list-group" style={{color: props.mode==='light'? 'black': 'white'}}>
    {todo.map((todos, index) => (
        <li key={index} class="d-flex justify-content-between">
         {todos}
        <div class="d-flex justify-content-between">
        <button class="btn btn-secondary my-3 mx-5 btn-lg" onClick={() => editing(index)}>Edit</button>
        <button class="btn btn-warning my-3 mx-5 btn-lg" onClick={() => removing(index)}>Remove</button>
        </div>
        </li>
        ))}

    </ul>
  </div>
  )
}
