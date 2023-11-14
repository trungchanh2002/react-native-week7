import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Screen04 = ({ route }) => {
  const { selectedProducts } = route.params;
  const total = selectedProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  return (
    <View>
      <View style={{ margin: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "pink",
            borderRadius: 5,
          }}
        >
          <View style={{ padding: 10 }}>
            <Text style={{ marginBottom: 20 }}>CAFE DELIVERY</Text>
            <Text>Order #18</Text>
          </View>
          <Text style={{ marginLeft: 200 }}>${total}</Text>
        </View>
      </View>
      <View style={{ margin: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "blue",
            borderRadius: 5,
          }}
        >
          <View style={{ padding: 10 }}>
            <Text style={{ marginBottom: 20 }}>CAFE</Text>
            <Text>Order #18</Text>
          </View>
          <Text style={{ marginLeft: 235 }}>$5</Text>
        </View>
      </View>

      {selectedProducts.map((product) => (
        <View key={product.name}>
          <View
            style={{
              flexDirection: "row",
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
              <Text>{product.name}</Text>
              <Text>${product.price * product.quantity}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: "50%",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 20, height: 20, marginRight: 5 }}
                source={require("./assets/dautru.png")}
              />
              <Text>{product.quantity}</Text>
              <Image
                style={{ width: 20, height: 20, marginLeft: 5 }}
                source={require("./assets/daucong.png")}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Screen04;
