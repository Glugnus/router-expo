import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../constants/colors";
import { articleStyles } from "../_layout";

export default function FavoritesPage() {
  const params = useLocalSearchParams();
  const ids = JSON.parse(params.ids);
  const router = useRouter();
  return (
    <View style={[styles.container, articleStyles.borderTopPage]}>
      <Text style={styles.title}>Les articles favoris</Text>
      {ids.map((id) => (
        <Text style={styles.idsText} key={id}>
          {id}
        </Text>
      ))}
      <TouchableOpacity style={styles.link} onPress={() => router.back()}>
        <Text style={styles.text}>Revenir à tous les articles</Text>
      </TouchableOpacity>
      <Link style={styles.link} href="/">
        <Text style={styles.text}>Revenir sur l'écran de Bienvenue</Text>
      </Link>
      <Link
        style={styles.link}
        href={{
          pathname: "/articles/[id]",
          params: { id: "4567", dismissCount: 2 },
        }}
      >
        <Text style={styles.text}>Lire l'article</Text>
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
    color: colors.LIGHT,
  },
  link: {
    padding: 16,
    backgroundColor: colors.PRIMARY,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  text: {
    color: colors.DARK,
    fontSize: 20,
  },
  idsText: {
    color: colors.LIGHT,
    fontSize: 18,
  },
});
