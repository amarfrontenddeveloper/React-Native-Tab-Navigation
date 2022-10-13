import {StyleSheet, Text, View, TouchableOpacity, Image,Pressable} from 'react-native';
import React from 'react';

const Winlancer = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'orange'}}>
        <View style={{flexDirection:'row'}}>
      <Pressable onPress={() => navigation.navigate('Welcome User')}>
        <Text style={styles.nav}>Home</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Please login here')}>
        <Text style={styles.nav}>Login</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Create your account')}>
        <Text style={styles.nav}>Sign up</Text>
      </Pressable>
      </View>
      <View>
        <Image
          style={styles.winlogo}
          source={require('../../image/assets/img/winlancer.png')}
        />
      </View>
      <Text style={styles.fline}>Welcome in Winlancer</Text>

      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate('Welcome User')}
          style={styles.login}>
          GO TO LOGIN PAGE
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate('Win')} style={styles.login}>
          Test Page
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Winlancer;

const styles = StyleSheet.create({
  fline: {
    fontSize: 30,
    marginTop: 30,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'purple',
    fontWeight: 'bold',
  },
  login: {
    marginLeft: 50,
    marginRight: 60,
    width: 300,
    height: 50,
    backgroundColor: '#00B386',
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 3,
    color: 'white',
    padding: 12,
    fontWeight: 'bold',
    marginTop: 60,
  },
  winlogo: {
    width: 200,
    height: 200,
    marginTop: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  nav:{
    fontSize:20,
    marginLeft:50,
    marginTop:10,
    fontWeight:'bold',
    textTransform:'uppercase',
    color:'grey',
  }
});
