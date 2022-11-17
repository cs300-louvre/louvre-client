import { Dimensions, View, Image, Text } from "react-native";

export default function NotificationCard({ data }) {
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  return (
    <View
      style={{
        width: windowWidth,
        height: 70,
        paddingHorizontal: 10,
        display: "flex",
        flexDirection: "row",
        marginBottom: 20,
      }}
    >
      <Image
        source={{ uri: data.avatar }}
        style={{ width: 70, height: 70, borderRadius: 35 }}
        resizeMode="cover"
      />
      <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 5 }}>
        <Text
          numberOfLines={1}
          style={{
            fontFamily: "Roboto_700Bold",
            fontSize: 16,
            color: "#FFFFFF",
          }}
        >
          {data.name}
        </Text>
        <Text
          numberOfLines={2}
          style={{
            fontFamily: data.isRead ? "Roboto_400Regular" : "Roboto_700Bold",
            fontSize: 14,
            color: "#FFFFFF",
          }}
        >
          {data.description}
        </Text>
      </View>
    </View>
  );
}
