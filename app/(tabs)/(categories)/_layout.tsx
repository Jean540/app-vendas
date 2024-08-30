import { Stack } from "expo-router";

const CategoryLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="category" />
    </Stack>
  );
};

export default CategoryLayout;
