import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { data } from "../../data";
import { TabScreen } from "../../components/tabScreen";

const TabsLayout = () => {
  return (
    <Tabs>
      {/* <Tabs.Screen name="" />
      <Tabs.Screen name="" /> */}
      <TabScreen label="(home)" title="Home" iconName="home" iconSize={30} />
      <TabScreen
        label="(categories)"
        title="Categorias"
        iconName="address-card"
        iconSize={30}
      />
      <TabScreen
        label="aboutMe"
        title="Sobre Mim"
        iconName="user"
        iconSize={30}
      />
    </Tabs>
  );
};

export default TabsLayout;
