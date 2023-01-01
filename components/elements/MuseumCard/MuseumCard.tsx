import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import Card from "../../organisms/Card/Card";
import { IMuseumResponse } from "../../../types";
import { useNavigation } from "@react-navigation/native";

export const MuseumCard: React.FC<{
  item: IMuseumResponse;
  handlePress: () => any;
}> = ({ item, handlePress }) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  return (
    <TouchableOpacity
      style={{
        width: windowWidth - 40,
        paddingVertical: 10,
        overflow: "hidden",
      }}
      onPress={handlePress}
    >
      <View
        style={{
          width: 0.7 * windowWidth,
        }}
      >
        <Card>
          <Card.Image
            image={item.thumbnailUrl}
            style={{ width: 100, height: 100, borderRadius: 5 }}
          />
          <Card.Body>
            <Card.Name>{item.name}</Card.Name>
            <Card.Rating rating={item.rating} numReviews={item.numOfReviews} />
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "Roboto_700",
                fontSize: 14,
                color: "#FFFFFF",
              }}
            >
              {item.location}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "Roboto_700",
                fontWeight: "700",
                fontSize: 13,
                color: "#B5B5B5",
                marginVertical: 5,
                textTransform: "capitalize",
              }}
            >
              {item.genre}
            </Text>
          </Card.Body>
        </Card>
      </View>
    </TouchableOpacity>
  );
};

export default MuseumCard;
