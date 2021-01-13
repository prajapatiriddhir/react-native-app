import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
        }
    }

    // handleClick = (event) => {
    //     event.preventDefault();
    //     alert(`${this.state.name} ${this.state.email} ${this.state.password}`)
    // };



    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, password } = this.state;
        const sendData = {
            name,
            email,
            password
        }
        this.props.dispatch(authActions.login(sendData));
    }



    render() {

        return (
            <View>
                <TextInput
                    placeholder="Enter Name"
                    keyboardType="default"
                    value={this.state.name}
                    onChangeText={(name) => this.setState({ name })} />


                <TextInput placeholder="Enter Email"
                    keyboardType="email-address"
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                />

                <TextInput
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    keyboardType="numeric"
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                />

                <Button title="register" onPress={this.handleClick} />

            </View>


        )
    }
}




function mapStateToProps(state) {
    return state;
}
export const connectedRegisterComponent = connect(mapStateToProps)(Register);

