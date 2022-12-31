import { AirbnbRating } from "@rneui/themed";
import { Dimensions } from "react-native";
import { View, Text, Image } from "react-native";
import { fakeMuseumResponse, fakePost, fakeRating } from "../../../../mock";
import {
  IEventResponse,
  IPostResponse,
  IRatingResponse,
} from "../../../../types";
import MuseumCard from "../../../elements/MuseumCard/MuseumCard";
import Card from "../../../organisms/Card/Card";

const ratings: IRatingResponse[] = Array.from(Array(3), () => {
  return fakeRating();
});

export const MuseumReviewsTab: React.FC<{ museumId: string }> = ({
  museumId,
}) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

  const Post: React.FC<{ item: IRatingResponse }> = ({ item }) => {
    return (
      <View style={{ marginBottom: 30, flexDirection: "row" }}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginTop: 15,
            marginRight: 20,
          }}
          resizeMode="cover"
          source={{ uri: item.thumbnailUrl }}
        />
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "Roboto_700Bold",
              fontSize: 18,
            }}
          >
            {item.userName}
          </Text>
          <Text
            style={{
              color: "#B5B5B5",
              fontFamily: "Roboto_400Regular",
            }}
          >
            {item.createdAt}
          </Text>
          <AirbnbRating
            showRating={false}
            defaultRating={item.rating}
            isDisabled
            size={14}
            ratingContainerStyle={{
              flexDirection: "row",
              margin: 0,
              padding: 0,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
            starContainerStyle={{
              margin: 0,
              padding: 0,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          />
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "Roboto_400Regular",
            }}
          >
            {item.content}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{ marginTop: 10 }}>
      {ratings.map((rating) => (
        <Post item={rating} key={rating.ratingId} />
      ))}
    </View>
  );
};

export default MuseumReviewsTab;
