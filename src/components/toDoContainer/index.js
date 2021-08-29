import React, { useState, useEffect } from 'react'
import AddToDo from '../addToDo'
import ToDo from '../toDoList'
import Comp from '../completed'



const ToDoContainer = () => {

    let todoList;

    if (localStorage.getItem("todos") === null) {
        todoList = [];
    }
    else {
        todoList = JSON.parse(localStorage.getItem("todos"));
    }


    let listdo;

    if (localStorage.getItem("list") === null) {
        listdo = [];
    }
    else {
        listdo = JSON.parse(localStorage.getItem("list"));
    }

    //use for local storage





    //arranges the index - id of object array
    const arrangeID = (obj) => {

        obj.forEach((e, index) => {
            e.id = index + 1;
        })

    }

    const [list, setList] = useState(listdo);
    const [todos, setTods] = useState(todoList);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const handleAddList = (newToDo) => {
        const newToDoList = [...list, newToDo]
        arrangeID(newToDoList);
        setList(newToDoList);
    }


    const handleToDo = (newToDo) => {
        const newToDos = newToDo.filter((e) => e.done === true);
        const ToDo = [...todos, newToDos[0]];
        arrangeID(ToDo);
        setTods(ToDo);
    }



    const handleRemove = (id) => {

        const newList = list.filter((e) =>
            id !== e.id)
        setList(newList);

    }


    const clearComp = () => {
        setTods('');
    }


    const handleChange = (id) => {
        let newToDo = list.map(list => {
            if (list.id === id) {
                return { ...list, done: !list.done }
            }
            return list;
        })

        handleToDo(newToDo);

        newToDo = newToDo.filter((e) => {
            return (e.done !== true);
        })
        setList(newToDo);


    }




    return (
        <div className="container">
            <h4>To Do App</h4>

            <AddToDo addlist={handleAddList} list={list} />

            {list.length > 0 ? list.map((e) => {
                return <ToDo e={e} remove={handleRemove} key={e.id} handleChange={handleChange} />
            }) : <p>Add Task's</p>}


                <hr className="hr"/>


            {todos.length > 0 ? todos.map((e) => {
                return <Comp e={e} key={e.id} />
            }) : <p>All Task's Done</p>}

            {todos.length > 0 ? <span className="comp" onClick={() => clearComp()}>Clear Completed</span> : ''}

        </div>
    )
}

export default ToDoContainer
