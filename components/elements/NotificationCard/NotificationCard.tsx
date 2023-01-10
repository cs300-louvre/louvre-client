import { Dimensions, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  IConversationPreviewResponse,
  INotificationResponse,
} from "../../../types";

export const NotificationCard: React.FC<{
  item: IConversationPreviewResponse;
  handlePress?: () => void;
}> = ({ item, handlePress }) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  return (
    <TouchableOpacity onPress={handlePress}>
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
          source={{ uri: item.thumbnailUrl }}
          style={{ width: 70, height: 70, borderRadius: 5 }}
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
            {item.name}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              fontFamily: "Roboto_400Regular",
              fontSize: 14,
              color: "#FFFFFF",
            }}
          >
            {item.content}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;
