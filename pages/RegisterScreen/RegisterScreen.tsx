import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { LinearBackground } from '../../Layouts/LinearBackground';
import { NavigationProp } from '@react-navigation/native';

interface RegisterProps {
    navigation: NavigationProp<Record<string, object | undefined>>;
  }

const RegisterScreen = ({navigation}: RegisterProps) => {
  return (
    <LinearBackground
      colors={['#4FB0CE', 'rgba(79, 176, 206, 0.0422836)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
        <View style = {styles.titleBox}>

          <Text> Hi! Select what type of user you are, please </Text>

        </View>

        <View style = {styles.selectionUserType}>
            {/* <Text>Selection User Type Content</Text> */}

            <View style = {styles.selectionUserTypeButton}>
                <Button title="button1" />
            </View>

            <View style = {styles.selectionUserTypeButton}>
                <Button title="button2" />
            </View>
        </View>

        <View style = {styles.inputsBox}>
            <Text>inputContent</Text>
        </View>

        <Button title="Press me" onPress={() => navigation.navigate('LoginScreen')} />

    </LinearBackground>
  );
};

export default RegisterScreen;

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

    titleBox: {
        // backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputsBox: {
        flex: 5,
    },

    selectionUserType: {
        flex: 0.5,
        backgroundColor: 'orange',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    selectionUserTypeButton: {
        width: '40%',
    },

});
