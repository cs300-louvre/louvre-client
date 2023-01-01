import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import NotificationCard from "../../../elements/NotificationCard/NotificationCard";

const data = [
  {
    isRead: false,
    avatar:
      "https://extension.harvard.edu/wp-content/uploads/sites/8/2020/10/museum.jpg",
    name: "Fine Art Exhibition",
    description:
      "The event on Friday this week has been delayed. The reschedule will be announced later this day. Please stay tune with us and be patient!",
  },
  {
    isRead: true,
    avatar:
      "https://extension.harvard.edu/wp-content/uploads/sites/8/2020/10/museum.jpg",
    name: "Fine Art Exhibition",
    description: "The event on Wednesday this week has been delayed",
  },
];

export default function NotificationTab() {
  return (
    <ScrollView
      style={{ paddingTop: 60 }}
      contentContainerStyle={{ paddingBottom: 120, paddingHorizontal: 10 }}
    >
      <Text
        style={{
          fontFamily: "Roboto_400Regular",
          fontSize: 18,
          color: "#0085FF",
          marginLeft: "auto",
        }}
      >
        Mark as Read
      </Text>
      {data.map((item) => (
        <NotificationCard key={item.description} data={item} />
      ))}
    </ScrollView>
  );
}
