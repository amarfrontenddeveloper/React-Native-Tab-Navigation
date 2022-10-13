import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';



const Flogin = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#1B2732'}}>
      <View>
        <Image
          source={require('../../image/assets/img/Logo.png')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.welcome}>Welcome back.</Text>
      <View>
        <TextInput
          placeholderTextColor="white"
          style={styles.flogin}
          placeholder="Email"
        />
        <TextInput
          placeholderTextColor="white"
          style={styles.flogin}
          placeholder="Password"
        />
      </View>
      <Text style={styles.pass}>Forgot your Password?</Text>
      <TouchableOpacity>
        <Text style={styles.lbtn}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.line}>
        <Text style={styles.dhaccount}>Don't have an account?</Text>
        <Text onPress={() => navigation.navigate('Create your account')} style={styles.signu}> Sign up</Text>
      </Text>
    </ScrollView>
  );
};

export default Flogin;

const styles = StyleSheet.create({
  logo: {
    width: 90,
    height: 110,
    marginTop: 180,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  welcome: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 22,
    color: '#00B386',
    marginTop: 10,
  },
  flogin: {
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: 30,
    borderRadius: 5,
    paddingLeft: 15,
    fontSize: 16,
    opacity:0.5,
  },
  pass: {
    color: 'white',
    marginLeft:195,
    marginTop:8,
    fontSize:15,
  },
  lbtn:{
    borderWidth:1.5,
    width:"75%",
    alignSelf:'center',
    height:45,
    textAlign:'center',
    padding:12,
    marginTop:15,
    borderRadius:5,
    borderColor:'white',
    fontWeight:'bold',
    fontSize:16,
    color:'white',
    backgroundColor:'#00B386'
  },
  line:{
    textAlign:'center',
    marginTop:10,
    fontSize:16,

  },
  dhaccount:{
    color:'white',
  },
  signu:{
    color:'#00b386',
    fontWeight:'bold',
  }

});
