import { Stack, useRouter } from "expo-router";
import { colors } from "../../../../constants/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: colors.DARK,
        },
        headerTintColor: colors.PRIMARY,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: colors.DARK,
        },
        headerLeft: () => (
          <FontAwesome
            name="step-backward"
            size={24}
            color={colors.PRIMARY}
            onPress={() => router.back()}
          />
        ),
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Articles",
        }}
      />
      <Stack.Screen
        name="favorites/[ids]"
        options={{ title: "Articles favoris" }}
      />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}

export const articleStyles = StyleSheet.create({
  borderTopPage: {
    borderTopWidth: 1,
    borderTopColor: colors.PRIMARY,
  },
});
