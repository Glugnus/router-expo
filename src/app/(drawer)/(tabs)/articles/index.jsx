import { Link, useNavigation } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../../constants/colors";
import { articleStyles } from "./_layout";
import { useEffect } from "react";

export default function ArticlesPage() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.getParent().setOptions({
      title: "Articles",
      tabBarLabel: "Articles",
    });
  }, [navigation]);
  return (
    <View style={[styles.container, articleStyles.borderTopPage]}>
      <Text style={styles.title}>Tous les articles</Text>
      <Link
        style={styles.link}
        href={{
          pathname: "articles/favorites/[ids]",
          params: { ids: JSON.stringify(["1234", "4567", "8910"]) },
        }}
      >
        <Text style={styles.text}>Allez aux articles favoris</Text>
      </Link>
      <Link style={styles.link} href="/">
        <Text style={styles.text}>Revenir sur l'écran de Bienvenue</Text>
      </Link>
      <Link style={styles.link} href="/articles/1234">
        <Text style={styles.text}>Aller sur le détail d'un article</Text>
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
});
