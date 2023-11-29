import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Screen01({ navigation }) {
  const [products, setProducts] = useState([]);

  const handleGetStarted = () => {
    navigation.navigate("Screen02");
  };
  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 40 }}>
        Welcome To Cafe World
      </Text>
      <FlatList
        data={products.slice(0, 3)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
          </View>
        )}
      />
      <TouchableOpacity onPress={handleGetStarted} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  productContainer: {
    marginBottom: 30,
  },
  productImage: {
    width: 347 - 20,
    height: 114 - 20,
    borderRadius: 10,
  },

  button: {
    backgroundColor: "#00CCFF",
    width: 347 - 20,
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 70,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
