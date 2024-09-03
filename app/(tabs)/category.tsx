import { StyleSheet, Text, View } from "react-native";

const Category = () => {
  return (
    <View style={styles.container}>
      <Text>Tela Categorias</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
