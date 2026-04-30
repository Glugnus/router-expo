import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfilePage from ".";
import SettingPage from "./setting";
import { withLayoutContext } from "expo-router";
import { colors } from "../../../../constants/colors";

const Tab = createMaterialTopTabNavigator().Navigator;

export const TopTabs = withLayoutContext(Tab);

export default function TopTabsLayout() {
  return (
    <TopTabs
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: colors.PRIMARY },
      }}
    >
      <TopTabs.Screen name="index" options={{ title: "Informations" }} />
      <TopTabs.Screen name="setting" options={{ title: "Réglages" }} />
    </TopTabs>
  );
}
