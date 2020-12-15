import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import image from './assets/image.png'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#888", fontSize: 18 }}>Hello world</Text>
      <Image source={{uri: "https://picsum.photos/200/200"}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100
  }
});

export default App;
