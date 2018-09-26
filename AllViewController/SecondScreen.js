import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class SecondScreen extends Component<Props> {
    render() {

        const { params } = this.props.navigation.state;
        console.log(JSON.stringify(params));

        const name = params && params.name;
        const age = params && params.age;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Second Screen</Text>

                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />

                <Text>Name:{name} Age: {age}</Text>

                 <Button
                    title="Go to Third"
                    onPress={() => this.props.navigation.navigate('Third')}
                />
            </View>

        );
    }
}

gotoThirdButton = () => {
    this.props.navigation.navigate('Second')
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});