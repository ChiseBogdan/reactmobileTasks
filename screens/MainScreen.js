import React from 'react';
import {View} from 'react-native'

import TaskStore from '../task_components/TaskStore';
import { TaskList } from '../task_components/TaskList';
import UpdateView from './UpdateView';

export default class MainView extends React.Component{

  update = () =>{
    console.log('HEREHRER')
  }

  componentDidMount(){
    
  }

  render(){
    return(

      <View>
        <TaskStore update={this.update}>
          <TaskList/>
        </TaskStore>
      </View>

    )
  }

}