import { IMessageResponse } from "../../../types";
import { View, Text, Image } from "react-native";
import { memo } from "react";

export const Message: React.FC<{ item: IMessageResponse }> = ({ item }) => {
  const isUserMessage = !!Math.round(Math.random());

  if (isUserMessage) {
    return (
      <View
        style={{
          maxWidth: "80%",
          borderRadius: 5,
          alignSelf: "flex-end",
          flexDirection: "row",
          alignItems: "flex-start",
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontFamily: "Roboto_400Regular",
            backgroundColor: "#0085FF",
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
        >
          {item.content}
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        width: "80%",
        borderRadius: 5,
        alignSelf: "flex-start",
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 10,
      }}
    >
      <Image
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          marginRight: 10,
          marginTop: 10,
        }}
        source={{ uri: item.thumbnailUrl }}
      />
      <View style={{ width: "100%" }}>
        <Text style={{ color: "#B5B5B5", fontFamily: "Roboto_400Regular" }}>
          {item.userName}
        </Text>
        <Text
          style={{
            color: "#FFFFFF",
            fontFamily: "Roboto_400Regular",
            backgroundColor: "#B5B5B5",
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
        >
          {item.content}
        </Text>
      </View>
    </View>
  );
};

export default memo(Message);
