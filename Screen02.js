import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Screen02({ navigation }) {
  const [products, setProducts] = useState([]);
  const handleImagePress = () => {
    navigation.navigate("Screen03");
  };
  useEffect(() => {
    fetch("https://6540990c45bedb25bfc22490.mockapi.io/api/demo7/user")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <TouchableOpacity onPress={handleImagePress}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
            </TouchableOpacity>

            <View style={styles.image_row}>
              <Image
                source={{ uri: item.image1 }}
                style={styles.productImage1}
              />
              <Image
                source={{ uri: item.image2 }}
                style={styles.productImage2}
              />
              <Image
                source={{ uri: item.image3 }}
                style={styles.productImage3}
              />
            </View>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {item.name}
            </Text>
            <Text>{item.address}</Text>
          </View>
        )}
      />
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
    marginBottom: 10,
  },
  productImage: {
    width: 347,
    height: 114,
    borderRadius: 10,
  },
  productImage1: {
    width: 182,
    height: 30,
    marginRight: 6,
  },
  productImage2: {
    width: 141,
    height: 30,
    marginRight: 6,
  },
  productImage3: {
    width: 14,
    height: 18,
    marginRight: 6,
  },
  image_row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
