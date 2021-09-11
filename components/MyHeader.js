import * as React from 'react';
import { Image } from 'react-native';
import { Header } from 'react-native-elements';

const MyHeader = (props) => {
  return (
    <Header
      leftComponent={
        <Image
          source={require('../assets/Planetlogo.png')}
          style={{width : 150, height : 50, marginRight : 80, marginBottom: 10 }}
        />
      }
      centerComponent={{
        text : props.title,
        style: {color : '#f4b41a', fontSize : 20, fontWeight : "bold", marginLeft : 30, marginTop :10 }
      }}
    />
  );
};

export default MyHeader;
