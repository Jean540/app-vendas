import { Link, router } from "expo-router";
import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import { Button } from "../components/button";

const HomeScreen = () => {
  const handleStart = () => {
    router.replace("./home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      {/* <Link href={"./aboutMe"}>Tela sobre</Link> */}
      <Text style={styles.h1}>Loja do Jean</Text>
      <Text style={styles.h2}>Aqui você encontra tudo o que quiser.</Text>
      <Button title="Começar as compras" onPress={handleStart} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    resizeMode: "cover",
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  h1: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  h2: {
    fontSize: 16,
    marginBottom: 10,
  },
});
