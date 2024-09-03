import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "../types/product";
import { Link } from "expo-router";

type Props = {
  data: Product;
};

export const ProductItem = ({ data }: Props) => {
  return (
    <Link href={`/product/${data.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: data.image }} style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
          <Text style={styles.price}>{data.price.toFixed(2)}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
  },
  img: {
    resizeMode: "cover",
    borderRadius: 10,
    width: 100,
    height: 100,
    backgroundColor: `#CCC`,
    marginRight: 20,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    color: "#555",
    marginBottom: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right",
  },
});
