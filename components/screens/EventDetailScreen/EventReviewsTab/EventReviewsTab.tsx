import { AirbnbRating } from "@rneui/themed";
import { Dimensions } from "react-native";
import { View, Text, Image } from "react-native";
import useMe from "../../../../hooks/me/useMe";
import useGetRatingsByEomId from "../../../../hooks/rating/useGetRatingsByEomId";
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

export const EventReviewsTab: React.FC<{ eventId: string }> = ({ eventId }) => {
  const { data: ratings } = useGetRatingsByEomId(eventId);
  const { data: user } = useMe();
  return (
    <View style={{ marginTop: 10 }}>
      {user && <RatingBox eomId={eventId} />}
      {ratings &&
        ratings
          .filter((rating) => rating.userId !== user.userId)
          .map((rating) => <Rating item={rating} key={rating.ratingId} />)}
    </View>
  );
};

export default EventReviewsTab;
