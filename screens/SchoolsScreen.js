import React, { Component } from 'react';
import {ScrollView, StyleSheet , View, Text, Image , ExpoLinksView} from 'react-native';
import { Button } from 'react-native-elements';


export default class SchoolsScreen extends Component{
        
    render(){
        const { navigate } = this.props.navigation;

        return (
            <ScrollView >
            <View style = {SchoolStyle.schoolsView}>
                <Image style = {SchoolStyle.Image} source={require('../assets/images/icon2.png')} />
                
                <Button style = {SchoolStyle.schoolButton}
                  title="Heavy Traffic. Pick up delayed 2 minutes"
                />
            </View>

            <View style = {SchoolStyle.schoolsView}>
                <Image style = {SchoolStyle.Image} source={require('../assets/images/icon2.png')} />
                <Button  style = {SchoolStyle.schoolButton}
                    title="Timmy has been picked up from school"
                   
                />
            </View>

            <View style = {SchoolStyle.schoolsView}>
                <Image style = {SchoolStyle.Image} source={require('../assets/images/icon2.png')} />
                <Button  style = {SchoolStyle.schoolButton}
                    title="Timmy was dropped off at the house "
                   
                />
            </View>

        </ScrollView>
        );
    }
}
SchoolsScreen.navigationOptions = {
    title: 'Notifications',
};

const SchoolStyle = StyleSheet.create ({

    schoolsView: {
      
    
        marginTop: 40,
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

