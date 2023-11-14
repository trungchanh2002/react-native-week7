import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Product = ({ name, price }) => {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const calculatePrice = () => {
    return price * (quantity > 0 ? quantity : 1);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        // backgroundColor: "pink",
        alignItems: "center",
        padding: 5,
        marginBottom: 10,
        borderWidth: 1,
      }}
    >
      <Image
        style={{ width: 60, height: 60 }}
        source={require("./assets/coffee.png")}
      />
      <View style={{ flexDirection: "column", marginLeft: 10 }}>
        <Text>{name}</Text>
        <Text>${calculatePrice()}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: "50%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={decreaseQuantity}>
          <Image
            style={{ width: 20, height: 20, marginRight: 5 }}
            source={require("./assets/dautru.png")}
          />
        </TouchableOpacity>
        <Text>{quantity}</Text>
        <TouchableOpacity onPress={increaseQuantity}>
          <Image
            style={{ width: 20, height: 20, marginLeft: 5 }}
            source={require("./assets/daucong.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function Screen02() {
  return (
    <View>
      <Product name="Coffee 1" price={12} />
      <Product name="Coffee 2" price={25} />
      <Product name="Coffee 3" price={18} />
      <Product name="Coffee 4" price={20} />
      <Product name="Coffee 5" price={25} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
