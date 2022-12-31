import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Image, Text } from "react-native";
import { IEventResponse, IMuseumResponse } from "../../../types";

export const MiniCard: React.FC<{
  item: IMuseumResponse & IEventResponse;
  type: "event" | "museum";
}> = ({ item, type }) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(type === "event" ? "Event" : "Museum", {
          screen: type === "event" ? "EventDetail" : "MuseumDetail",
          params: {
            [type === "event" ? "eventId" : "museumId"]:
              type === "event" ? item.eventId : item.museumId,
          },
        });
      }}
    >
      <View style={{ width: 100, marginRight: 10 }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 5 }}
          source={{ uri: item.thumbnailUrl }}
        />
        <Text
          style={{
            width: 100,
            marginVertical: 10,
            color: "#FFFFFF",
            fontFamily: "Roboto_400Regular",
            textAlign: "center",
          }}
          numberOfLines={2}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
