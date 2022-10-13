import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity,Pressable} from 'react-native';
import Signup from './Signup';


const Login = ({navigation}) => {
  
  return (
    <View style={{flex: 1, backgroundColor: '#1B2732'}}>

      <View>
        <Image style={Lstyle.logo} source={require('../../image/Logo.png')} />
      </View>
      <Text style={Lstyle.logint}>Login Template</Text>
      <Text style={Lstyle.fline}>
        The easiest way to start with your amazing application.
      </Text>

      <TouchableOpacity>
        <Text onPress={() => navigation.navigate('Please login here')} style={Lstyle.login}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate('Create your account')} style={Lstyle.signup}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text onPress={()=> navigation.navigate('Welcome in Winlancer')} style={[Lstyle.login, Lstyle.win]} >GO TO WINLANCER PAGE</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Login;

const Lstyle = StyleSheet.create({
  logo: {
    width: 90,
    height: 110,
    marginTop: 180,
    alignSelf:'center',
    marginBottom: 20,
  },
  logint: {
    fontSize: 24,
    textAlign: 'center',
    color: '#039F79',
    fontWeight: 'bold',
  },
  fline: {
    color: 'white',
    margin: 15,
    fontSize: 16,
    textAlign: 'center',
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
    marginTop: 10,
  },
  signup: {
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 50,
    marginRight: 60,
    width: 300,
    height: 50,
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#414542',
    backgroundColor: '#1B2732',
    color: '#00B386',
    padding: 12,
  },
  win:{
    marginTop:15,
    backgroundColor:'purple',
  }
});
