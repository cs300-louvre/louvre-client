import { AirbnbRating } from "@rneui/themed";
import { Dimensions } from "react-native";
import { View, Text, Image } from "react-native";
import useMe from "../../../../hooks/me/useMe";
import useGetRatingsByEomId from "../../../../hooks/rating/useGetRatingsByEomId";
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

export const MuseumReviewsTab: React.FC<{ museumId: string }> = ({
  museumId,
}) => {
  const { data: ratings } = useGetRatingsByEomId(museumId);
  const { data: user } = useMe();

  return (
    <View style={{ marginTop: 10 }}>
      {user && <RatingBox eomId={museumId} />}
      {ratings &&
        ratings
          .filter((rating) => (user ? rating.userId !== user.userId : true))
          .map((rating) => <Rating item={rating} key={rating.ratingId} />)}
    </View>
  );
};

export default MuseumReviewsTab;
