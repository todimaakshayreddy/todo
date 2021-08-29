import React from 'react'

function Comp(props) {
    return (
        <div className="list">
            <input type="checkbox" checked={true} onChange={()=>null}/>
            <span style={props.e.done?{textDecoration:"line-through"}:null}>{props.e.title}</span>
        </div>
    )
}

export default Comp
