import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { fakeNotificationResponse } from "../../../../mock";
import { INotificationResponse, INotificationType } from "../../../../types";
import NotificationCard from "../../../elements/NotificationCard/NotificationCard";

export const NotificationTab: React.FC<{ type: INotificationType }> = ({
  type,
}) => {
  const notifications: INotificationResponse[] = Array.from(Array(10), () => {
    return fakeNotificationResponse(type);
  });
  const navigation = useNavigation<any>();
  const resolveNavigationFunc = (notification: INotificationResponse) => {
    if (notification.type === "system") return null;
    if (notification.type === "event")
      return () =>
        navigation.navigate("Notification", {
          screen: "EventDetail",
          params: {
            eventId: notification.sourceId,
            navigationRoot: "Notification",
          },
        });
    if (notification.type === "museum")
      return () =>
        navigation.navigate("Notification", {
          screen: "MuseumDetail",
          params: {
            museumId: notification.sourceId,
            navigationRoot: "Notification",
          },
        });
    if (notification.type === "message")
      return () =>
        navigation.navigate("Notification", {
          screen: "ConversationDetail",
          params: {
            userId: notification.sourceId,
            navigationRoot: "Notification",
          },
        });
  };
  return (
    <ScrollView
      style={{ paddingTop: 60 }}
      contentContainerStyle={{ paddingBottom: 120, paddingHorizontal: 10 }}
    >
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.notificationId}
          item={notification}
          handlePress={resolveNavigationFunc(notification)}
        />
      ))}
    </ScrollView>
  );
};

export default NotificationTab;
