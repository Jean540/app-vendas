import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Category } from "../types/category";
import { router } from "expo-router";

type Props = {
  data: Category;
};

export const CategoryItem = ({ data }: Props) => {
  const handlePress = () => {
    router.push(`/categories/${data.id}`);
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Image source={{ uri: data.cover }} style={styles.img} />
      <View style={styles.bg}></View>
      <View style={styles.box}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: "#333",
    borderRadius: 10,
  },
  bg: {
    backgroundColor: "black",
    height: 120,
    borderRadius: 10,
    opacity: 0.6,
  },
  img: {
    resizeMode: "cover",
    width: "100%",
    height: 120,
    borderRadius: 10,
    position: "absolute",
  },
  box: {
    position: "absolute",
    width: "100%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
