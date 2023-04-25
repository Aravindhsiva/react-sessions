import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

class Todo extends React.Component {
    // State -> [], ""
    // Props

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            value: ""
        };
    }

    // State Lifting

    // Parent -> state
    // Comp 1 ->  PropsState
    // Comp 2 -> state

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="row">
                        <div className="col-6">
                            <input type="text" className="form-control" onChange={e => {
                                this.setState({
                                    value: e.target.value
                                })
                            }} />
                            <button className="btn btn-primary mt-2" onClick={e => {

                                const { list, value } = this.state;
                                list.push(value);
                                this.setState({
                                    list: list
                                }, () => {
                                    console.log(this.state.list)
                                });
                            }}>Create</button>
                        </div>
                        <div className="col-6 shadow rounded">
                            <strong>Todo List App</strong>
                            <ul>
                                {this.state.list.map((item, index) => {
                                    return (<li key={index}>{item}</li>)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todo;
