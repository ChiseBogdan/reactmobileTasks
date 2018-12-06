import { httpApiUrl } from '../core/api';
import React, {Component} from 'react';
import {Provider} from '../core/context';

export default class TaskStore extends Component {

    state = {
        tasks: null,
        issue: null,
    }

    componentDidMount() {
        this.loadTasks();

    }

    udpateTask = () =>{

        console.log("UPDATE SHOUULD BE MADE")

        // console.log(task)
        // console.log(task.id)
        

        // fetch(`${httpApiUrl}/tasks`)
        // .then(response => response.json())
        // .then(tasks=>{
        //     this.setState({tasks: tasks}) 
        // })
        // .catch(error => this.setState({ issue: error }));



    }

    loadTasks = () => {
        

        fetch(`${httpApiUrl}/tasks`)
        .then(response => response.json())
        .then(tasks=>{
            this.setState({tasks: tasks}) 
        })
        .catch(error => this.setState({ issue: error }));
        
    };

    render() {
        return (
        <Provider value={this.state}>
            {this.props.children}
        </Provider>
        );
    }
}