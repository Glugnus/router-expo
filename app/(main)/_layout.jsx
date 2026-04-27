import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants/colors";

export default function MainLayout() {
  return (
    <SafeAreaView style={styles.layoutContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Expo Router</Text>
      </View>
      <Slot />
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    backgroundColor: colors.LIGHT,
    alignItems: "center",
  },
  titleContainer: {
    width: "100%",
    alignItems: "center",
    padding: 16,
    marginTop: 12,
    borderBottomWidth: 1,
    borderColor: colors.DARK,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    color: colors.DARK,
  },
});
