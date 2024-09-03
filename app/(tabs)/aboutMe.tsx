import { Image, StyleSheet, Text, View } from "react-native";

const AboutMe = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "https://jean-araujo.com/_next/image?url=%2Fimages%2Fm3.jpeg&w=384&q=75",
        }}
        width={200}
        height={200}
      />
      <Text style={styles.text}>
        App feito por <Text style={{ fontWeight: "bold" }}>Jean Araújo</Text>
      </Text>
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
  img: {
    borderRadius: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
  },
});
