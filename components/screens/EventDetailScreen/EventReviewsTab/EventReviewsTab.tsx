import { View, Text, Image } from "react-native";
import useMe from "../../../../hooks/me/useMe";
import useGetRatingsByEomId from "../../../../hooks/rating/useGetRatingsByEomId";
import Rating from "../../../elements/Rating/Rating";
import RatingBox from "../../../elements/RatingBox/RatingBox";

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
