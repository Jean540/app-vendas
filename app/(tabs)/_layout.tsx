import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { data } from "../../data";

const TabsLayout = () => {
  type Tab = {
    label: string;
    title: string;
    iconName: "home" | "user" | "archive";
  };

  const tabs: Tab[] = [
    { label: "home", title: "Home", iconName: "home" },
    { label: "category", title: "Categorias", iconName: "archive" },
    { label: "aboutMe", title: "Sobre Mim", iconName: "user" },
  ];

  return (
    <Tabs>
      {tabs.map((tab, key) => (
        <Tabs.Screen
          key={key}
          name={tab.label}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => (
              <FontAwesome name={tab.iconName} size={30} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
