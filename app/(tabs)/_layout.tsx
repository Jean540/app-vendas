import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { data } from "../../data";

const TabsLayout = () => {
  type Tab = {
    label: string;
    title: string;
    iconName: "home" | "user" | "archive";
    headerShow: boolean;
  };

  const tabs: Tab[] = [
    { label: "home", title: "Home", iconName: "home", headerShow: true },
    {
      label: "categories",
      title: "Categorias",
      iconName: "archive",
      headerShow: false,
    },
    {
      label: "aboutMe",
      title: "Sobre Mim",
      iconName: "user",
      headerShow: true,
    },
  ];

  return (
    <Tabs>
      {tabs.map((tab, key) => (
        <Tabs.Screen
          key={key}
          name={tab.label}
          options={{
            headerShown: tab.headerShow,
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
