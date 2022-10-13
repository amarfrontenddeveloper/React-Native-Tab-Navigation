import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';


export default function Signup({navigation}) {
  
  return (
    <View style={{flex: 1, backgroundColor: '#1B2732'}}>
      <View>
        <Image
          style={Lstyle.logo}
          source={require('../../image/assets/img/Logo.png')}
        />
      </View>
      <Text style={Lstyle.logint}>Create Account</Text>
      <View style={{opacity: 0.5}}>
        <TextInput
          placeholderTextColor="white"
          style={Lstyle.pinput}
          placeholder="Name"
        />
        <TextInput
          placeholderTextColor="white"
          style={Lstyle.pinput}
          placeholder="Email"
        />
        <TextInput
          placeholderTextColor="white"
          style={Lstyle.pinput}
          placeholder="Password"
        />
      </View>
      <TouchableOpacity>
        <Text  style={Lstyle.signup}>SIGN UP</Text>
      </TouchableOpacity>
      <Text style={Lstyle.lline}>
        <Text style={Lstyle.account}>Already have an account?</Text>
        <Text onPress={() => navigation.navigate('Please login here')} style={Lstyle.accountl}> Login</Text>
      </Text>
    </View>
  );
}

const Lstyle = StyleSheet.create({
  logo: {
    width: 90,
    height: 110,
    marginTop: 100,
    marginLeft: 155,
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
    backgroundColor: '#00B386',
    color: 'white',
    padding: 12,
  },
  pinput: {
    fontSize: 18,
    borderWidth: 1.5,
    borderColor: 'white',
    marginTop: 30,
    marginLeft: '10%',
    marginRight: '10%',
    borderRadius: 3,
    paddingLeft: 15,
    color: 'white',
  },
  account: {
    color: 'white',
    
  },
  accountl: {
    color: '#00B386',
    fontWeight: 'bold',
  },
  lline: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
});
