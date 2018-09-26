import React, {Component} from 'react';
import { StyleSheet, Text, ImageBackground, View } from 'react-native'
import { Actions } from 'react-native-router-flux'


export default class ThirdScreen extends Component<Props> {
    render() {

        return (
            <ImageBackground style={styles.backgroundContainer} source={require('../assets/stars.jpg')} >
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.headerContainer}>Sleep While Baby Sleeps</Text>
            <Text style={styles.subtextContainer}>Sleep While Baby Sleep sends you alerts when your Nest baby monitoring camera delects certain levels of noise and motion – so that you can sleep as long as baby does, without spending a restless night next to a monitor.</Text>
          </View>
         
        </View>
      </ImageBackground>

        );
    }
}

gotoThirdButton = () => {
    this.props.navigation.navigate('Second')
}
const styles = StyleSheet.create({
    backgroundContainer: {
      
      flexDirection: 'row',
      alignItems: 'center'
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: (40, 40, 0, 0),
    },
    alltextContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'baseline'
    },
    headerContainer: {
      backgroundColor: (0, 0, 0, 0),
      color: '#FFFFFF',
      fontSize: 30,
      position: 'relative',
      padding: 15,
      flex:1
    },
    subtextContainer: {
      backgroundColor: (0, 0, 0, 0),
      color: '#FFFFFF',
      fontSize: 10,
      paddingLeft: 15,
      paddingRight: 15,
      flex: 4,
      
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'center'
    }
  });