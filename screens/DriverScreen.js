import React, { Component } from 'react';
import {ScrollView, StyleSheet , View, Text, Image , Button} from 'react-native';   
import {  createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import SchoolScreen from '../screens/SchoolScreen.js'; 

export default class DriverScreen extends Component{
        
        render(){
            const { navigate } = this.props.navigation;

            return (
                <ScrollView>
                    <View style = {DriverStyle.view}>
                        <Text style={DriverStyle.text}> 
                            <Image style={DriverStyle.image} source={require('../assets/images/mattuaMiddle.jpg')}/> 
                        </Text>
                        <Button 
                            title="Mattua Middle"
                            onPress={() => navigate('School')}
                        />
                    </View>
                </ScrollView>
            );
        }
    }


DriverScreen.navigationOptions = {
    title: 'Schools',
};



const DriverStyle = StyleSheet.create ({
    title: {
        marginTop: 10,
        textAlign:'center',
        fontSize: 30,
    },
    line: {
    },

    text:{
        fontSize:23,
    },
    
    view: {
        backgroundColor:"#F5F5F5",
        flex: 1,
        flexDirection:'row',
        marginTop: 20,
        marginHorizontal: 10,
        borderRadius:20,
    },
    image: {
        padding: 4,
        width: 80,
        height: 80,
    },


});