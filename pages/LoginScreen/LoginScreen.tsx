import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React from 'react';
import { LinearBackground } from '../../Layouts/LinearBackground';
import { NavigationProp } from '@react-navigation/native';

interface LoginProps {
    navigation: NavigationProp<Record<string, object | undefined>>;
  }

const LoginScreen = ({navigation}: LoginProps) => {
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

export default LoginScreen;

const styles = StyleSheet.create({
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
