import { httpApiUrl } from '../core/api';
import React, {Component} from 'react';
import {Provider} from '../core/context';
import {AsyncStorage} from 'react-native'

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
    }

    

    _updateTask = task => {

        this._retrieveAuthorizationToken().then(auth =>{

            fetch(`${httpApiUrl}/tasks/update`,{
                method: 'PUT',
                headers: {'content-type': 'application/json', 'Authorization': auth},
                body: JSON.stringify(task),
            })
            .then(response => {
                
                const {status} = response
                if(status == 200){  
                    this.setState({shouldUpdate: true})
                }
            
            })
            .catch(error => this.setState({ issue: error }));

        })       
    }

    _retrieveAuthorizationToken = async () => {
        try {
          const value = await AsyncStorage.getItem('authorization');
          if (value !== null) {
                return value
            }
        } catch (error) {
           console.log(error)
        }
    }


    loadTasks = () => {
        
        this._retrieveAuthorizationToken().then(auth =>{

            fetch(`${httpApiUrl}/tasks`,{
                method: 'GET',
                headers: {'content-type': 'application/json', 'Authorization': auth},
            })
            .then(response => response.json())
            .then(tasks=>{
                this.setState({tasks: tasks, updateTask: this._updateTask}) 
            })
            .catch(error => this.setState({ issue: error }));

        })

        
        
    };

    render() {
        return (
        <Provider value={this.state}>
            {this.props.children}
        </Provider>
        );
    }
}