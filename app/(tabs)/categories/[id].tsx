import { FlatList, StyleSheet, Text, View } from "react-native";
import { getProductsByCategory } from "../../../services/products";
import { ProductItem } from "../../../components/product-Item";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { getCategoryById } from "../../../services/category";

const Category = () => {
  const { id } = useLocalSearchParams();

  const products = getProductsByCategory(Number(id));
  if (!products) router.back();
  const category = getCategoryById(Number(id));

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: category?.title }} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem data={item} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

export default Category;

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
