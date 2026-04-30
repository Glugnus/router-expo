import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../constants/colors";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur l'écran d'acceuil'</Text>
      <Link style={styles.link} href="/settings">
        <Text style={styles.text}>Aller sur les reglages</Text>
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
