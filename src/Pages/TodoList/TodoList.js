import { useEffect, useRef, useState } from 'react';
import Button from '../../Components/button/Button';
import './todolist.scss'
import uuid from 'react-uuid';



const TodoList = () => {

    const inputTodoElement = useRef();
    const [todo, setTodo] = useState('');
    const [editTodo, setEditTodo] = useState('');
    const [editContent, setEditContent] = useState('')
    const [todoLists, setTodoLists] = useState('');
    
    const handleAddTodo = (todo) => {
        setEditTodo('');
        if(!todo) return;
        setTodoLists([...todoLists, {id: uuid(), name: todo}]);
        setTodo('');
        inputTodoElement.current.focus();
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("todoLists"));
        if (items) {
            setTodoLists(items);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todoLists", JSON.stringify(todoLists));
    }, [todoLists])

    const handleDeleteTodo = (id) => {
        const arr = todoLists.filter(todo => todo.id !== id);
        setTodoLists(arr)
    }

    const handleEditTodo = (todo) => {
        setEditTodo('');
        setEditTodo(todo.id);
        setEditContent(todo.name);
    }
    const handleUpdateTodo = (todo) => {
        const todoUpdate = todoLists[todoLists.findIndex(item => item.id === todo.id)];
        todoUpdate.name = editContent;
        setEditTodo('');
    }

    return (
        <div className="todo-container">
            <div className='add-todo'>
                <input type='text' value={todo} onFocus={() => setEditTodo('')}  onChange={(e) => setTodo(e.target.value)} ref={inputTodoElement}/>
                <Button className='button button1' onClick={() => {handleAddTodo(todo)}}>Add</Button>
            </div>
            <ul className="list-todo">
                {
                    todoLists && todoLists.length > 0 &&
                    todoLists.map((item, index) => {
                        return (
                            <li key={item.id} className='todo-item'>
                                {
                                    editTodo === item.id ? 
                                    <>
                                        <input type='text' value={editContent} onChange={(e) => setEditContent(e.target.value)}/>
                                        <Button className='button button2' onClick={() => handleUpdateTodo(item)}>Update</Button>
                                    </>
                                    :
                                    <>
                                        <p>{index + 1}. {item.name}</p>
                                        <div>
                                            <Button className='button button2' onClick={() => handleEditTodo(item)}>Edit</Button>
                                            <Button className='button button3' onClick={() => {handleDeleteTodo(item.id)}}>Delete</Button>
                                        </div>
                                    </>
                                }

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;