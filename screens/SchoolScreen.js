import React from 'react';
import {ScrollView, StyleSheet , View, Text, Image , ExpoLinksView} from 'react-native';


const SchoolScreen = () => {
    return (
        <ScrollView >
            <View style = {SchoolStyle.view}>
                <Text style = {SchoolStyle.title}>Henderson High School </Text>
                <Text style = {SchoolStyle.textRegular}> 7:30AM - 2:30PM</Text>
                <Text style = {SchoolStyle.textRegular}> 301 Main St</Text>
                <View style = {SchoolStyle.viewInfo}>
                    <Text style = {SchoolStyle.textRegular}> Students</Text>
                    <Text style = {SchoolStyle.textRegular}> Route 1503</Text>
                </View>
                <View style={SchoolStyle.line} ></View>

                <View style = {SchoolStyle.viewInfo}>
                    <Text style = {SchoolStyle.textRegular}> Timmy Turner</Text>
                    <Text style = {SchoolStyle.textRegular}> 003215</Text>
                </View>
            </View>
        </ScrollView>
    )
};

SchoolScreen.navigationOptions = {
    title: 'School Info',
};


const SchoolStyle = StyleSheet.create ({
    title: {
        marginTop: 10,
        fontSize: 20,
    },
    textRegular: {
        marginTop: 10,
        fontSize: 13,
    },
    line : {
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 4,
        marginTop: 4,
        marginLeft:10,
        marginRight:10,
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
    image: {
        padding: 4,
        width: 80,
        height: 80,
    },


});

export default SchoolScreen;