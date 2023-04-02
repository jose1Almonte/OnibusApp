import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});

type GreetingProps = {
  name: string;
};

const Greeting = (props: GreetingProps) => {
  return (
    <View style={styles.center}>
      <Text>Hello World, I'm {props.name}!</Text>
    </View>
  );
};

const App = () => {
  return (
    <View>
      <Greeting name="Jose" />
    </View>
  );
};

export default App;
