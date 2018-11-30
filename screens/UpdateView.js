import React from 'react'
import {Text, Button, StyleSheet, View} from 'react-native'



export default class UpdateView extends React.Component{

    constructor(props){
        super(props);
    }

   onUpdateButtonPressed = () =>{

        console.log('id')
        console.log("BUTTON PRESSED")
    }

    render(){
        return (
        <View style={styles.container}>            
            <Text>Priority: </Text>
            <Text>Description:</Text>
            <Button 
                title = 'Update'
                onPress={() => this.onUpdateButtonPressed}
            />
    
        </View>
        )
    }

    


}

const styles = StyleSheet.create({

    container:{
        padding:20,
    },

})