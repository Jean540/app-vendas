import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" options={{ title: "Produtos" }} />
      <Stack.Screen name="product/[id]" />
    </Stack>
  );
};

export default RootLayout;
