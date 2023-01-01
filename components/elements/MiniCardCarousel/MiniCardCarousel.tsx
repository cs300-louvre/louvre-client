import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, FlatList, Image, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IEventResponse, IMuseumResponse } from "../../../types";
import { MiniCard } from "../MiniCard/MiniCard";

export const MiniCardCarousel: React.FC<{
  items: IMuseumResponse[] | IEventResponse[];
  handlePressFactory: (item: any) => () => void;
}> = ({ items, handlePressFactory }) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

  return (
    <View
      style={{
        width: windowWidth,
        height: 150,
        flex: 1,
      }}
    >
      <FlatList
        data={items as any}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        renderItem={({ item }) => {
          return (
            <MiniCard item={item} handlePress={handlePressFactory(item)} />
          );
        }}
        snapToAlignment="center"
        decelerationRate="fast"
        horizontal
        // keyExtractor={(item) => item.coverImage}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MiniCardCarousel;
