import React from 'react'
import {View, Button, StyleSheet, TextInput} from 'react-native'

export default class LoginScreen extends React.Component{

    state = {
        username: '',
        password: '',

    }

    handleUsernameUpdate = username =>{

        this.setState({username})
    }

    handlePasswordUpdate= password =>{
        
        this.setState({password})
    }

    onLoginButtonPress = () =>{
        this.props.navigation.push('Main')
    }

    render(){

        return (

            <View style={styles.container}>
                <TextInput
                    placeholder = 'Usename'
                    value = {this.state.username}
                    onChangeText = {this.handleUsernameUpdate}
                    autoCapitalize = 'none'
                />
                <TextInput 
                placeholder = 'Password'
                value = {this.state.password}
                onChangeText = {this.handlePasswordUpdate}
                secureTextEntry
                />
                
                <Button 
                title = 'Log in'
                onPress = {this.onLoginButtonPress}
                />

            </View>

        )

    }

}

const styles = StyleSheet.create({

    container:{
        justifyContent: 'center',
        flex: 1,
    }

})