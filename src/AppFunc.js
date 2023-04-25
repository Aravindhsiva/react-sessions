import './App.css';
import React, { useState } from 'react';

// State -> [], ""
// Props

// this.state = {
//     list: [],
//     value: ""
// };

const AppFunc = () => {

    const [value, setValue] = useState("");
    let [list, setList] = useState([]);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="row">
                    <div className="col-6">
                        <input type="text" className="form-control" onChange={e => {
                            setValue(e.target.value);
                        }} />
                        <button className="btn btn-primary mt-2" onClick={e => {
                            list = [...list];
                            list.push(value);
                            setList(list);
                        }}>Create</button>
                    </div>
                    <div className="col-6 shadow rounded">
                        <strong>Todo List App</strong>
                        <ul>
                            {list.map((item, index) => {
                                return (<li key={index}>{item}</li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default AppFunc;
