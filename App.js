import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,button } from 'react-native';

export default function App() {

const [count,setCount] = useState(0);
const onPress = () => setCount(prevCount => prevCount + 1);

function increment() {
  setCount(count + 1);
}

return (
  <View style={styles.container}>
    <View style={styles.countContainer}>
      <Text>Count: {count}</Text>
    </View>
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text>Press Here</Text>
    </TouchableOpacity>
  </View>
);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#bd177a",
    borderRadius: 5,
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});