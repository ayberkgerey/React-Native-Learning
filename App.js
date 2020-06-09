import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);
  return (
    <React.Fragment>
      <View>
        <Text style={styles.heading}>Calculator</Text>

        <TextInput
          placeholder="Enter your Expression"
          textContentType="number"
        />
        <Button title="=" />
      </View>
      {/* <View style={styles.container}>
        <TextInput
          style={{ height: 90, width: 100 }}
          placeholder="Enter your name"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {text
            .split(" ")
            .map((word) => word && "🍕")
            .join(" ")}
        </Text>
        <Button title="submit" onPress={(count) => setCount(count + 1)} />
        <Text>{count}</Text>
      </View> */}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "skyblue",
    fontSize: 50,
    fontWeight: "bold",
    borderBottomColor: "black",
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginLeft: 100,
  },
});
