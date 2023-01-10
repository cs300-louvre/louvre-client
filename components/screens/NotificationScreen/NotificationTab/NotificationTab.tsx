import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import useGetConversationPreviews from "../../../../hooks/chat/useGetConversationPreviews";
import { fakeNotificationResponse } from "../../../../mock";
import { INotificationResponse, INotificationType } from "../../../../types";
import NotificationCard from "../../../elements/NotificationCard/NotificationCard";

export const NotificationTab: React.FC<{ type: INotificationType }> = ({
  type,
}) => {
  const { data: previews } = useGetConversationPreviews();
  const navigation = useNavigation<any>();
  // const resolveNavigationFunc = (notification: INotificationResponse) => {
  //   if (notification.type === "system") return null;
  //   if (notification.type === "event")
  //     return () =>
  //       navigation.navigate("Notification", {
  //         screen: "EventDetail",
  //         params: {
  //           eventId: notification.sourceId,
  //           navigationRoot: "Notification",
  //         },
  //       });
  //   if (notification.type === "museum")
  //     return () =>
  //       navigation.navigate("Notification", {
  //         screen: "MuseumDetail",
  //         params: {
  //           museumId: notification.sourceId,
  //           navigationRoot: "Notification",
  //         },
  //       });
  //   if (notification.type === "message")
  //     return () =>
  //       navigation.navigate("Notification", {
  //         screen: "ConversationDetail",
  //         params: {
  //           userId: notification.sourceId,
  //           navigationRoot: "Notification",
  //         },
  //       });
  // };
  return (
    <ScrollView
      style={{ paddingTop: 60 }}
      contentContainerStyle={{ paddingBottom: 120, paddingHorizontal: 10 }}
    >
      {previews &&
        previews.map((preview) => (
          <NotificationCard
            key={preview.conversationId}
            item={preview}
            handlePress={() =>
              navigation.navigate("Notification", {
                screen: "ConversationDetail",
                params: {
                  userId: preview.userId,
                  navigationRoot: "Notification",
                },
              })
            }
          />
        ))}
    </ScrollView>
  );
};

export default NotificationTab;
