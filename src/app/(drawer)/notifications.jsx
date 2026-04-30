import { colors } from "../../constants/colors";
import Drawer from "expo-router/drawer";
import CustomView from "../../components/CustomView";
import Title from "../../components/Title";
import { CustomLink } from "../../components/CustomButton";

export default function NotificationsPage() {
  return (
    <CustomView>
      <Drawer.Screen
        options={{
          headerTitleStyle: { color: colors.PRIMARY },
          title: "Notifications Push",
        }}
      />
      <Title text="Vos notifications" />
      <CustomLink
        href="/articles/new-67"
        text="De nouveaux articles sont disponibles"
      />
    </CustomView>
  );
}
