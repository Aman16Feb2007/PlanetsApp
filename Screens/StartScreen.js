import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class StartScreen extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <MyHeader title="Planets App" />
        <View>
        <ImageBackground  
        source={require('../assets/iss_bg.jpg')}
        style={{ flex: 1, width : "100%", height : 544, resizeMode: "cover", justifyContent: "center" }}
        >
    
        <TouchableOpacity style={styles.StartButton}> <Text style={styles.StartButtonText}> START </Text> </TouchableOpacity>
        </ImageBackground>
        </View>
        </View>
       </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  StartButton : {
    flex: 1,
    width : 100,
    backgroundColor : "yellow",
    borderWidth : 2,
    borderRadius : 20,
    borderColor : "white",
    marginTop : 200,
    alignItems : "center",
    justifyContent : "center",
    padding : 10,
    alignSelf : "center"
  },

  StartButtonText :{
    textAlign : "center",
  },

});
