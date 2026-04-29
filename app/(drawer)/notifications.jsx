import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import Drawer from "expo-router/drawer";

export default function NotificationsPage() {
  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          headerTitleStyle: { color: colors.PRIMARY },
          title: "Notifications Push",
        }}
      />
      <Text style={styles.title}>Vos notifications</Text>
      <Link style={styles.link} href="/">
        <Text style={styles.text}>Revenir à l'écran d'acceuil</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  link: {
    padding: 16,
    backgroundColor: colors.DARK,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  text: {
    color: colors.LIGHT,
    fontSize: 20,
  },
});
