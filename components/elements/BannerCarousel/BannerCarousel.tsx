import React from "react";
import { View, FlatList, Image, Text, Dimensions } from "react-native";
import { Banner } from "../../organisms/Banner/Banner";

export const BannerCarousel: React.FC<{ bannerTexts: string[] }> = ({
  bannerTexts,
}) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  return (
    <View
      style={{
        width: windowWidth,
        height: 90,
        flex: 1,
      }}
    >
      <FlatList
        data={bannerTexts}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        renderItem={({ item }) => {
          return <Banner text={item} key={item} />;
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

export default BannerCarousel;
