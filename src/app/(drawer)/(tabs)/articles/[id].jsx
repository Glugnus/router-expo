import {
  Link,
  Stack,
  useLocalSearchParams,
  useNavigation,
  useRouter,
} from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../constants/colors";
import { articleStyles } from "./_layout";
import { useEffect } from "react";

export default function ArticleDetailsPage() {
  const { id, dismissCount } = useLocalSearchParams();
  const router = useRouter();

  const navigation = useNavigation();
  useEffect(() => {
    navigation.getParent().setOptions({
      title: "Articles : " + id,
      tabBarLabel: "Articles",
    });
    return () => {
      navigation.getParent().setOptions({
        title: "Articles",
        tabBarLabel: "Articles",
      });
    };
  }, [navigation, id]);

  return (
    <View style={[styles.container, articleStyles.borderTopPage]}>
      <Stack.Screen options={{ title: "Article : " + id }} />
      <Text style={styles.title}>Id de l'article</Text>
      <Text style={styles.title}>{id}</Text>
      <TouchableOpacity
        style={styles.link}
        onPress={() => router.replace(dismissCount)}
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
