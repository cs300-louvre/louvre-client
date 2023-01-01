import { AirbnbRating } from "@rneui/themed";
import { Dimensions } from "react-native";
import { View, Text, Image } from "react-native";
import {
  fakeGetMeResponse,
  fakeMuseumResponse,
  fakePost,
  fakeRating,
} from "../../../../mock";
import {
  IEventResponse,
  IGetMeResponse,
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
const me: IGetMeResponse = fakeGetMeResponse("user");

export const EventReviewsTab: React.FC<{ eventId: string }> = ({ eventId }) => {
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  return (
    <View style={{ marginTop: 10 }}>
      <RatingBox eomId={eventId} />
      {ratings.map((rating) => (
        <Rating item={rating} key={rating.ratingId} />
      ))}
    </View>
  );
};

export default EventReviewsTab;
