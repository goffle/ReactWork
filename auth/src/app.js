import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'
class App extends Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyAoukR3ls_pu2bnI0mm8AIRPj248tQ0sGg",
            authDomain: "auth-4f7e5.firebaseapp.com",
            databaseURL: "https://auth-4f7e5.firebaseio.com",
            projectId: "auth-4f7e5",
            storageBucket: "auth-4f7e5.appspot.com",
            messagingSenderId: "706647785504"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <View>
                <Header title='HELLOOOOO' />
                <LoginForm />
            </View>
        )
    }
}

export default App;