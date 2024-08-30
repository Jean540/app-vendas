import { StyleSheet, Text, View } from "react-native";

const AboutMe = () => {
  return (
    <View style={styles.container}>
      <Text>Tela About Me</Text>
    </View>
  );
};

export default AboutMe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
