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
import Rating from "../../../elements/Rating/Rating";
import RatingBox from "../../../elements/RatingBox/RatingBox";
import Card from "../../../organisms/Card/Card";

const ratings: IRatingResponse[] = Array.from(Array(3), () => {
  return fakeRating();
});

export const MuseumReviewsTab: React.FC<{ museumId: string }> = ({
  museumId,
}) => {
  return (
    <View style={{ marginTop: 10 }}>
      <RatingBox eomId={museumId} />
      {ratings.map((rating) => (
        <Rating item={rating} key={rating.ratingId} />
      ))}
    </View>
  );
};

export default MuseumReviewsTab;
