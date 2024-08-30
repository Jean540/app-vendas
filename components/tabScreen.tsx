import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

type Props = {
  label: string;
  title: string;
  iconName: "home" | "address-card" | "user";
  iconSize: number;
};

export const TabScreen = ({ label, title, iconName, iconSize }: Props) => {
  return (
    <Tabs.Screen
      name={label}
      options={{
        title,
        tabBarIcon: ({ color }) => (
          <FontAwesome name={iconName} color={color} size={iconSize} />
        ),
      }}
    />
  );
};
