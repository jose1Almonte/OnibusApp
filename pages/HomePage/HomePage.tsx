import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomePageScreen = () => {
  return (
    <View>
      <Text>HomePage Screen </Text>
    </View>
  );
};

const HomePage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePageScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default HomePage;
