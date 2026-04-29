import { Drawer } from "expo-router/drawer";
import { colors } from "../../constants/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        drawerStyle: {
          backgroundColor: colors.LIGHT,
        },
        drawerActiveBackgroundColor: colors.PRIMARY,
        drawerInactiveBackgroundColor: colors.LIGHT,
        drawerActiveTintColor: colors.DARK,
        drawerInactiveTintColor: colors.DARK,
        drawerItemStyle: {
          marginBottom: 12,
        },
        headerStyle: {
          backgroundColor: colors.DARK,
        },
        headerTitleStyle: {
          color: colors.LIGHT,
        },
        headerTitleAlign: "center",
        overlayColor: colors.DARK,
        headerLeft: () => (
          <FontAwesome
            name="align-justify"
            size={24}
            color={colors.LIGHT}
            style={{ marginLeft: 16 }}
            onPress={() => navigation.openDrawer()}
          />
        ),
      })}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Acceuil",
          drawerLabel: "Acceuil",
          drawerIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="notifications"
        options={{
          title: "Notifications",
          drawerLabel: "Notifications",
          drawerIcon: ({ color }) => (
            <FontAwesome name="bell" size={24} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Déconnexion"
        onPress={() => console.log("Logout")}
        inactiveTintColor={colors.DARK}
        activeTintColor={colors.PRIMARY}
        icon={({ color }) => (
          <FontAwesome name="sign-out" size={24} color={color} />
        )}
      />
    </DrawerContentScrollView>
  );
}
