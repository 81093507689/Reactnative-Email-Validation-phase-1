import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,ImageBackground,TextInput,
    Alert
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class HomeScreen extends Component<Props> {

    constructor(props) {
        super(props);
        this.gotoSecondButton = this.gotoSecondButton.bind(this);
    }

    gotoSecondButton() {
       // const { email, pass } = this.state;
       if(this.state.email.length > 0)
       {
                if(this.state.password.length > 0)
                {
                        
                }else 
                {
                fn_errorAlert("Please enter password")
                }
       }else 
       {
        this.fn_errorAlert("Please enter email address")
       }
        
       // this.fn_showalert(this.state.email,this.state.password)

        // this.props.navigation.navigate('Second', {
        //     name: 'John',
        //     age: 12,
        // })
    }

    state = {
        email: "",
        password: ""
     }

     handleEmail = (text) => {
        this.setState({ email: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }
     fn_showalert = (email, pass) => {
        
      alert('email: ' + email + ' password: ' + pass)
   }

   fn_errorAlert = (message) => {
    
    //alert(message,"sdf")
    Alert.alert(
        'OOPS!',
        message,
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
 }
   GetValueFunction_email = (ValueHolder) =>{
      
    var Value = ValueHolder.length.toString() ;

    this.setState({email : Value}) ;
  
   }
    render() {
        return (
            <ImageBackground style={styles.backgroundContainer} source={require('../assets/stars.jpg')} >
            
            <View style={{  alignItems: 'center',width:'100%' }}>
            
            <Text>Home Screen</Text>    
                <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               color = "#ffffff"
               onChangeText = {(text) => this.handleEmail(text)}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               color = "#ffffff"
               onChangeText = {this.handlePassword}/>

                <Button
                    title="Go to Details"
                    // onPress={() => this.props.navigation.navigate('Second', {
                    //     name: 'John',
                    //     age: 12,
                    // })}
                     onPress={this.gotoSecondButton}
                />
            </View>
            </ImageBackground>
        );
    }
}



const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        marginTop: 20,
        height: 50,
        width: 250,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    normalText: {
        color: '#000',
        fontSize: 15
    },input: {
        margin: 15,
        height: 40,
        
        paddingLeft: 15,
        paddingRight: 15,
        borderColor: '#7a42f4',
        borderWidth: 1
     },
});