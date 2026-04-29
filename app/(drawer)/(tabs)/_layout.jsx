import { Tabs } from "expo-router";
import { colors } from "../../../constants/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function MainLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.PRIMARY,
        tabBarInactiveTintColor: colors.LIGHT,
        tabBarStyle: {
          backgroundColor: colors.DARK,
          height: 80,
          paddingTop: 12,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        },
        headerTintColor: colors.LIGHT,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: colors.DARK,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Acceuil",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Réglages",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "A propos",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="question" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
