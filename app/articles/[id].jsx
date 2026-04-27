import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../constants/colors";
import { articleStyles } from "./_layout";

export default function ArticleDetailsPage() {
  const { id, dismissCount } = useLocalSearchParams();
  const router = useRouter();
  return (
    <View style={[styles.container, articleStyles.borderTopPage]}>
      <Stack.Screen options={{ title: "Article : " + id }} />
      <Text style={styles.title}>Id de l'article</Text>
      <Text style={styles.title}>{id}</Text>
      <TouchableOpacity
        style={styles.link}
        onPress={() => router.dismiss(dismissCount)}
      >
        <Text style={styles.text}>Revenir à tous les articles</Text>
      </TouchableOpacity>
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
