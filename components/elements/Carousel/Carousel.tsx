import React from "react";
import { View, FlatList, Image, Text, Dimensions } from "react-native";
import { IEventResponse } from "../../../types";

export const Carousel: React.FC<{ items: IEventResponse[] }> = ({ items }) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

  const Slide: React.FC<{ item: IEventResponse }> = ({ item }) => {
    return (
      <View
        style={{
          width: 0.7 * windowWidth,
          height: "100%",
          marginHorizontal: 2,
        }}
      >
        <Image
          source={{ uri: item.coverUrl }}
          resizeMode="cover"
          style={{
            width: 0.7 * windowWidth,
            height: 150,
          }}
        />
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 14,
            fontFamily: "Roboto_400Regular",
            position: "absolute",
            bottom: 10,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        width: windowWidth,
        height: 130,
        flex: 1,
      }}
    >
      <FlatList
        data={items}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 5 }}
        renderItem={({ item }) => {
          return <Slide item={item} key={item.eventId} />;
        }}
        snapToAlignment="center"
        decelerationRate="fast"
        snapToInterval={Dimensions.get("window").width * 0.7 + 5}
        horizontal
        // keyExtractor={(item) => item.coverImage}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Carousel;
