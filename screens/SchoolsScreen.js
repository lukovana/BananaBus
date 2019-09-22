import React from 'react';
import {ScrollView, StyleSheet , View, Text, Image , ExpoLinksView, Button} from 'react-native';


const SchoolScreen = () => {
    return (
        <ScrollView >
            <View style = {SchoolStyle.view}>
                <Image style = {SchoolStyle.Image} source={require('../assets/images/mattuaMiddle.jpg')} />
                <Button
                  title="Mattua Elementary"

                />
            </View>
        </ScrollView>
    )
};

SchoolScreen.navigationOptions = {
    title: 'Schools',
};


const SchoolStyle = StyleSheet.create ({
    title: {
        marginTop: 10,
        fontSize: 20,

    },

    schoolButton:{
      justifyContent: 'center',
      backgroundColor: '#ccc',
      padding: '20'

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
    Image: {
        padding: 4,
        width: 80,
        height: 80,
        borderRadius: 40,
    },


});

export default SchoolScreen;