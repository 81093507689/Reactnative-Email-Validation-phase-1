/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SafeAreaView
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import HomeScreen from './AllViewController/HomeScreen';
import Second from './AllViewController/SecondScreen';
import Third from './AllViewController/ThirdScreen';

const RootStack = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Second: {
        screen: Second
    },

    Third:{
      screen: Third
    }


},
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    });

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
