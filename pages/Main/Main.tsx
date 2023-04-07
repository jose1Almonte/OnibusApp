import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import LoginPage from '../LoginPage/LoginPage';



const Stack = createNativeStackNavigator();

const HomePageScreen = ({navigation}) => {

  return (
    <View style = {styles.backGround}>
      <LinearGradient
        colors={['#4FB0CE', 'rgba(79, 176, 206, 0.0422836)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      >
        <View style = {styles.titleBox}>
          <Text style = {styles.text}>HomePage Screen </Text>

        </View>

        <View style = {styles.inputBox}>
          <TextInput style = {styles.textInputEmail} placeholder="Email, please" />

          <TextInput style = {styles.textInputPassword} placeholder="Password, please" secureTextEntry />

          <View style = {styles.sendButton}>
            <Button title="Press me" onPress={() => navigation.navigate('ProfileScreen')} />
          </View>

        </View>

      </LinearGradient>
    </View>
  );
};

const ProfileScreen = ({navigation}) => {
  return (
    <View style = {styles.backGround}>
      <LinearGradient
        colors={['#4FB0CE', 'rgba(79, 176, 206, 0.0422836)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      >

        <Text>
          Hola
        </Text>
        <Button title="Press me" onPress={() => navigation.navigate('LoginPage')} />

      </LinearGradient>
    </View>
  );
};

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePageScreen" component={HomePageScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({
  backGround: {
    // backgroundColor: '#4FB0CE',
    // mixBlendMode: 'normal',
    // height: '100%',
    flex: 1,
  },

  gradient: {
    flex: 1,
  },

  titleBox:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    // backgroundColor: 'red',
  },

  inputBox: {
    flex: 3,
    alignItems: 'center',
    // marginHorizontal: 20,
    // backgroundColor: 'red',
  },

  textInputEmail:{
    marginVertical: '3%',
    width: '50%',
    textAlign: 'center',
    backgroundColor: '#FFFBED',
    borderRadius: 5,
    color: 'black',
  },

  textInputPassword:{
    marginVertical: '3%',
    width: '50%',
    textAlign: 'center',
    backgroundColor: '#FFFBED',
    borderRadius: 5,
    color: 'black',
  },

  sendButton:{
    marginVertical: '3%',
  },

});
