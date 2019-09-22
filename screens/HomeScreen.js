import React, { Component } from 'react';
import { withFirebase } from '../components/Firebase/index';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

class HomeScreen extends Component {
  render() {
  return (
    <View>
      <ScrollView>
        <View>
          <Image
            source={
              __DEV__
                ? require('../assets/bananabus-normal-stroke.svg')
                : require('../assets/bananabus-normal-stroke.svg')
            }
          />
          <Text>Yucko</Text>
          <Text>Hello Mr. Henderson!</Text>
        </View>
      </ScrollView>
    </View>
  );
  }
}

export default HomeScreen;