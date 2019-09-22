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

const styles = StyleSheet.create({
  greeting: {
    color: '#FAD02E',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    margin: 20
  },
  buttonStyle: {
    backgroundColor: '#DAE0E2',
    fontSize: 20,
    textAlign: 'center',
    color: '#2C3335',
    paddingVertical: 10,
    margin: 20,
    
  }
 
});

class HomeScreen extends Component {
  render() {
  return (
    <View>
      <ScrollView>
        <View>
          <Image
            source={require('../assets/bananabus-normal-stroke.svg')

            }
          />
          <Text style={styles.greeting}>Hello Mr. Henderson</Text>
          <TouchableOpacity>
              <Text style={styles.buttonStyle}>Begin AM Route</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={styles.buttonStyle}>Begin PM Route</Text>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
    </View>
  );
  }
}

export default HomeScreen;