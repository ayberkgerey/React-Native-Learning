import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function Counter() {
  const [num, setNum] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>Counter : {num}</Text>
      <View>
        <Button
          title="Addition"
          color="green"
          onPress={() => setNum(num + 1)}
        />
      </View>
      <View style={styles.subtractionContainer}>
        <Button
          title="Subtraction"
          color="orange"
          onPress={() => setNum(num - 1)}
        />
      </View>
      <View style={styles.resetContainer}>
        <Button title="Reset" color="red" onPress={() => setNum(0)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  subtractionContainer: {
    marginTop: 20,
  },
  resetContainer: {
    marginTop: 20,
  },
  titleContainer: {
    justifyContent: 'center',
    fontSize: 30,
    marginBottom: 150,
    fontWeight: 'bold',
    color: 'darkblue',
  },
});
