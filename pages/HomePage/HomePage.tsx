import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';


const Stack = createNativeStackNavigator();

const HomePageScreen = () => {
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

          <TextInput style = {styles.textInputPassword} placeholder="Password, please" />

        </View>

      </LinearGradient>
    </View>
  );
};

const HomePage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePageScreen" component={HomePageScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  backGround: {
    // backgroundColor: '#4FB0CE',
    // backgroundColor: 'conic-gradient(from 228.68deg at 49.87% 47.01%, rgba(79, 176, 206, 0) 0deg, #4FB0CE 177.94deg, rgba(79, 176, 206, 0.0422836) 331.84deg, rgba(79, 176, 206, 0) 360deg)',
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
  },

  textInputEmail:{
    backgroundColor: 'green',
    width: '50%',
    textAlign: 'center',
  },

  textInputPassword:{
    width: '50%',
    textAlign: 'center',
    backgroundColor: 'yellow',
  },
});
