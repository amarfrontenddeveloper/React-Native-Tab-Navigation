import { StyleSheet, Text, View , Button, Image} from 'react-native'
import React from 'react'

const About = ({navigation}) => {
  return (
    <View>
      <Text style={styles.about}>Hello This is About page!!!</Text>
      <View>
        <Image style={styles.aimg} source={require('../../image/assets/img/about.jpg')}/>
      </View>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    about:{
        fontSize:30,
        textAlign:'center',
        color:'blue',
        marginTop:50,
        marginBottom:50,
    },
    aimg:
    {
        alignSelf:'center',
        borderRadius:50,
        marginBottom:50,

    }
})