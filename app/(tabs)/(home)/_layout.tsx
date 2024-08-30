import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default HomeLayout;
