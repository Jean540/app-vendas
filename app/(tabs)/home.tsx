import { FlatList, StyleSheet, Text, View } from "react-native";
import { getAllProducts } from "../../services/products";
import { ProductItem } from "../../components/product-Item";

const Home = () => {
  const products = getAllProducts();

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem data={item} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
});
