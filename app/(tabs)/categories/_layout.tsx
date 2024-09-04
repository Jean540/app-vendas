import { Stack } from "expo-router";

const CategoryLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="list" options={{ title: "Categorias" }} />
      <Stack.Screen name="[id]" />
    </Stack>
  );
};

export default CategoryLayout;
