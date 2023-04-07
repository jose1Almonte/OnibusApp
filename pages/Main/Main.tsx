import { View, Text, StyleSheet, TextInput, Button, ViewStyle } from 'react-native';
import React, {ReactNode} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationProp } from '@react-navigation/native';
import DriverProfile from '../DriverProfile/DriverProfile';


interface LinearBackgroundProps {
  children: ReactNode;
  colors: string[];
  start: { x: number; y: number };
  end: { x: number; y: number };
  style: any;
}

const LinearBackground = ({
  children,
  colors,
  start,
  end,
  style,
}: LinearBackgroundProps) => {
  return (
    <View style={[styles.gradient , style]}>
      <LinearGradient colors={colors} start={start} end={end} style={styles.gradient}>
        {children}
      </LinearGradient>
    </View>
  );
};

interface MainProps {
  navigation: NavigationProp<Record<string, object | undefined>>;
}

const Stack = createNativeStackNavigator();

const LoginScreen = ({navigation}: MainProps) => {

  return (
      <LinearBackground
      colors={['#4FB0CE', 'rgba(79, 176, 206, 0.0422836)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >

        <View style = {styles.titleBox}>
          <Text style = {styles.text}>Login Screen </Text>
        </View>

        <View style = {styles.inputBox}>

          <View style = {styles.textInputBox}>
            <Text>Email</Text>
          </View>

          <TextInput style = {styles.textInputEmail} placeholder="Email, please" />

          <View style = {styles.textInputBox}>
            <Text>Password</Text>
          </View>

          <TextInput style = {styles.textInputPassword} placeholder="Password, please" secureTextEntry />

          <View style = {styles.sendButton}>
            <Button title="Press me" onPress={() => navigation.navigate('RegisterScreen')} />
          </View>

        </View>
      </LinearBackground>
  );
};

const RegisterScreen = ({navigation}: MainProps) => {
  return (
    <LinearBackground
      colors={['#4FB0CE', 'rgba(79, 176, 206, 0.0422836)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
        <View>

          <Text> Hola </Text>

        </View>

        <Button title="Press me" onPress={() => navigation.navigate('LoginScreen')} />

    </LinearBackground>
  );
};

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="DriverProfile" component={DriverProfile} options={{ headerShown: false }}/>
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

  textInputBox:{
    width: '50%',
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
