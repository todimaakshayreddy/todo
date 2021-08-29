import React from 'react'

const ToDo = (props) => {

    const CheckboxChange = () =>{
        if(props.e.done)
        return null;
        props.handleChange(props.e.id)
    }

    return (
        <div className="list">
            <input type="checkbox" checked={props.e.done} onChange={()=>CheckboxChange()}/>
            <span style={props.e.done?{textDecoration:"line-through"}:null}>{props.e.title}</span>
        </div>
    )
}

export default ToDo
