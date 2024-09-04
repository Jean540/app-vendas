import { router, Stack, useLocalSearchParams } from "expo-router";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getCategoryById } from "../../services/category";
import { Button } from "../../components/button";
import { getProductById } from "../../services/products";

const Product = () => {
  const { id } = useLocalSearchParams();
  const product = getProductById(Number(id));
  if (!product) router.back();

  const handleBuyButton = () => {
    alert(`Você clicou no item ${product?.title.toUpperCase()}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: "" }} />
      <ScrollView style={styles.area}>
        <Image style={styles.img} source={{ uri: product?.image }} />
        <Text style={styles.title}>{product?.title}</Text>
        <Text style={styles.description}>{product?.description}</Text>
        <View style={styles.priceArea}>
          <Text style={styles.price}>R$ {product?.price.toFixed(2)}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonArea}>
        <Button title="Comprar Agora" onPress={handleBuyButton} />
      </View>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  area: {
    flex: 1,
    padding: 10,
  },
  img: {
    resizeMode: "cover",
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: "#555",
    marginBottom: 20,
  },
  priceArea: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#CCC",
  },
  price: {
    fontSize: 22,
    textAlign: "center",
  },
  buttonArea: {
    padding: 10,
  },
});
