import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Tela Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
