import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Product = ({ name, price, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    onQuantityChange(name, quantity + 1, price);
  };

  const calculatePrice = () => {
    return price * (quantity > 0 ? quantity : 1);
  };

  return (
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

export default function Screen03({ navigation }) {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddToCard = () => {
    // Lọc ra những sản phẩm có số lượng lớn hơn 0
    const selected = selectedProducts.filter((product) => product.quantity > 0);
    // Truyền danh sách sản phẩm đã chọn sang Screen04
    navigation.navigate("Screen04", { selectedProducts: selected });
  };

  const handleQuantityChange = (name, quantity, price) => {
    // Cập nhật danh sách sản phẩm đã chọn khi có sự thay đổi số lượng
    const updatedProducts = selectedProducts.map((product) => {
      if (product.name === name) {
        return { ...product, quantity: quantity, price: price };
      }
      return product;
    });
    // Nếu sản phẩm chưa có trong danh sách, thêm vào
    if (
      !updatedProducts.some(
        (product) => product.name === name && product.quantity === quantity
      )
    ) {
      updatedProducts.push({ name: name, quantity: quantity, price: price });
    }

    setSelectedProducts(updatedProducts);
  };

  return (
    <View style={styles.container}>
      <View>
        <Product
          name="Coffee 1"
          price={12}
          onQuantityChange={(name, quantity, price) =>
            handleQuantityChange(name, quantity, price)
          }
        />
        <Product
          name="Coffee 2"
          price={25}
          onQuantityChange={(name, quantity, price) =>
            handleQuantityChange(name, quantity, price)
          }
        />
        <Product
          name="Coffee 3"
          price={18}
          onQuantityChange={(name, quantity, price) =>
            handleQuantityChange(name, quantity, price)
          }
        />
        <Product
          name="Coffee 4"
          price={20}
          onQuantityChange={(name, quantity, price) =>
            handleQuantityChange(name, quantity, price)
          }
        />
        <Product
          name="Coffee 5"
          price={25}
          onQuantityChange={(name, quantity, price) =>
            handleQuantityChange(name, quantity, price)
          }
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#00CCFF",
            width: 347 - 20,
            height: 40,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
            color: "white",
            fontSize: 18,
          }}
          onPress={handleAddToCard}
        >
          Add To Card
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
