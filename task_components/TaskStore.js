import { httpApiUrl } from '../core/api';
import React, {Component} from 'react';
import {Provider} from '../core/context';

export default class TaskStore extends Component {

    constructor(props){
        super(props)

        this.state = {

            tasks: null,
            issue: null,
            updateTask: null,
            shouldUpdate: false,
        }
    }
    
    shouldComponentUpdate(nextProps, nextState){
    
        if(nextState.shouldUpdate === true){
            this.setState({shouldUpdate: false})
            this.loadTasks()
        }

        return true
    }

    componentDidMount() {
        this.loadTasks();
        
        console.log("MOunTER")

    }

    _updateTask = async task => {
        const response = await fetch( httpApiUrl + '/tasks', {
          method: 'PUT',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(task),
        })
      
        if (response.ok) {

            this.setState({shouldUpdate: true})
            return 'OK'
        }

        const errMessage = await response.text()
        throw new Error(errMessage)
      
       
      }


    loadTasks = () => {
        

        fetch(`${httpApiUrl}/tasks`)
        .then(response => response.json())
        .then(tasks=>{
            this.setState({tasks: tasks, updateTask: this._updateTask}) 
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