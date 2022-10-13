import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
       <Text style={styles.home}>Welcome in Home page!!!</Text>
      <View>
        <Image style={styles.himg} source={require('../../image/assets/img/home.png')}/>
      </View>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    home:{
        fontSize:30,
        textAlign:'center',
        color:'red',
        marginTop:50,
        marginBottom:50,
    },
    himg:
    {
        alignSelf:'center',
        borderRadius:50,
        marginBottom:50,

    }
})