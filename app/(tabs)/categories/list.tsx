import { FlatList, StyleSheet, Text, View } from "react-native";
import { getAllCategories } from "../../../services/category";
import { CategoryItem } from "../../../components/category-Item";
import { Stack } from "expo-router";

const List = () => {
  const categories = getAllCategories();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true }} />
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem data={item} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

export default List;

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
