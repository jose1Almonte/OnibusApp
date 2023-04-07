import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';


interface MainProps {
  navigation: NavigationProp<Record<string, object | undefined>>;
}

const DriverProfile = ({navigation}: MainProps) => {
  return (
    <>
        <View>
        <Text>DriverProfile</Text>
        </View>

        <View>
            <Button title="Press me" onPress={() => navigation.navigate('RegisterScreen')} />
        </View>
    </>
  );
};

export default DriverProfile;

const styles = StyleSheet.create({

});
