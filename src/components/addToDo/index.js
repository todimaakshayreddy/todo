import React, { useState } from 'react'

function AddToDo({ addlist, list }) {

    const [title, setTitle] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        let id;

        if (list.length > 0) {
            id = list[list.length - 1].id + 1;
        }
        else {
            id = 0;
        }
        const newToDo = {
            id: id,
            title: title,
            done: false
        };
        addlist(newToDo);
        setTitle("")
    }
    return (
        <div className="formDiv">
            <form onSubmit={handleSubmit}>
               
                    <input type="text" placeholder="Enter Task" required value={title} onChange={(e) => setTitle(e.target.value)} />
                    <button type='submit'><span>+</span></button>
         
            </form>
        </div>
    )
}

export default AddToDo

