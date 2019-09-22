import React, { Component } from 'react';
import {ScrollView, StyleSheet , View, Text, Image , ExpoLinksView} from 'react-native';
import { Button } from 'react-native-elements';


export default class SchoolsScreen extends Component{
        
    render(){
        const { navigate } = this.props.navigation;

        return (
            <ScrollView >
            <View style = {SchoolStyle.schoolsView}>
                <Image style = {SchoolStyle.Image} source={require('../assets/images/mattuaMiddle.jpg')} />
                
                <Button style = {SchoolStyle.schoolButton}
                  title="Mattua Elementary"
                />
            </View>

            <View style = {SchoolStyle.schoolsView}>
                <Image style = {SchoolStyle.Image} source={require('../assets/images/school1.jpg')} />
                <Button  style = {SchoolStyle.schoolButton}
                    title="Lopez Elementary "
                   
                />
            </View>

            <View style = {SchoolStyle.schoolsView}>
                <Image style = {SchoolStyle.Image} source={require('../assets/images/school2.jpg')} />
                <Button  style = {SchoolStyle.schoolButton}
                    title="Lukov Middle "
                   
                />
            </View>

            <View style = {SchoolStyle.schoolsView}>
                <Image style = {SchoolStyle.Image} source={require('../assets/images/school3.jpg')} />
                <Button  style = {SchoolStyle.schoolButton}
                    title="Somerset Academy "
                   
                />
            </View>

            <View style = {SchoolStyle.schoolsView}>
                <Image style = {SchoolStyle.Image} source={require('../assets/images/school4.jpg')} />
                <Button  style = {SchoolStyle.schoolButton}
                    title="Pines Charter"
                   
                />
            </View>
        </ScrollView>
        );
    }
}


SchoolsScreen.navigationOptions = {
    title: 'List of Schools',
};





const SchoolStyle = StyleSheet.create ({


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

