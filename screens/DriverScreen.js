import React, { Component } from 'react';
import {ScrollView, StyleSheet , View, Text, Image } from 'react-native';   
import {  createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import SchoolScreen from '../screens/SchoolScreen.js'; 
import { Button } from 'react-native-elements';

export default class DriverScreen extends Component{
        
        render(){
            const { navigate } = this.props.navigation;

            return (
                <ScrollView>
                    <View style = {DriverStyle.schoolsView}>
                        <Text style={DriverStyle.Image}> 
                            <Image style={DriverStyle.Image} source={require('../assets/images/mattuaMiddle.jpg')}/> 
                        </Text>
                        <Button 
                            title="Mattua Middle"
                            onPress={() => navigate('School')}
                        />
                    </View>
                    <View style = {DriverStyle.schoolsView}>
                        <Image style = {DriverStyle.Image} source={require('../assets/images/mattuaMiddle.jpg')} />
                        
                        <Button style = {DriverStyle.schoolButton}
                        title="Mattua Elementary"
                        />
                    </View>

                    <View style = {DriverStyle.schoolsView}>
                        <Image style = {DriverStyle.Image} source={require('../assets/images/school1.jpg')} />
                        <Button  style = {DriverStyle.schoolButton}
                            title="Lopez Elementary "
                        
                        />
                    </View>

                    <View style = {DriverStyle.schoolsView}>
                        <Image style = {DriverStyle.Image} source={require('../assets/images/school2.jpg')} />
                        <Button  style = {DriverStyle.schoolButton}
                            title="Lukov Middle "
                        
                        />
                    </View>

                    <View style = {DriverStyle.schoolsView}>
                        <Image style = {DriverStyle.Image} source={require('../assets/images/school3.jpg')} />
                        <Button  style = {DriverStyle.schoolButton}
                            title="Somerset Academy "
                        
                        />
                    </View>

                    <View style = {DriverStyle.schoolsView}>
                        <Image style = {DriverStyle.Image} source={require('../assets/images/school4.jpg')} />
                        <Button  style = {DriverStyle.schoolButton}
                            title="Pines Charter"
                        
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


        schoolsView: {
            flex: 1,
            flexDirection:'row',
            marginTop: 20,
            marginHorizontal: 10,
            borderRadius:20,
            
        },
    
        schoolButton:{
          justifyContent: 'center',
          padding:10,
          color:'red',
          textAlign: 'center',
          
        },
    
        textRegular: {
            marginTop: 10,
            fontSize: 13,
        },
    
    
        text:{
            fontSize:23,
        },
        
        view: {
            flex: 1,
            marginTop: 20,
        },
    
        viewInfo: {
            flex: 1,
            marginTop: 30,
            marginHorizontal: 10,
    
        },
        Image: {
            padding: 4,
            width: 80,
            height: 80,
            borderRadius: 40,
        },
    
    });
