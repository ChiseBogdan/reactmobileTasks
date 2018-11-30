import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default class TaskView extends React.Component{

    state = {
        id: '',
    }

    handleTaskOnPress(){
        console.log(this.props)
    }

    render(){
        return(
            <TouchableOpacity onPress={this.handleTaskOnPress.bind(this)} style={styles.row}>            
                <Text>Priority: {this.props.priority}</Text>
                <Text>Description: {this.props.description}</Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({

    row:{
        padding:20,
    },

})

