import { fakeRating } from "../../../../mock";
import { ScrollView, View } from "react-native";
import Rating from "../../../elements/Rating/Rating";
import useGetMyRatings from "../../../../hooks/me/useGetMyRatings";

export const RatingTab = () => {
  const { data: ratings } = useGetMyRatings();
  return (
    <View>
      <ScrollView
        style={{
          width: "100%",
          paddingHorizontal: 10,
        }}
        contentContainerStyle={{ paddingBottom: 80, paddingTop: 10 }}
      >
        {ratings &&
          ratings.map((rating) => (
            <Rating item={rating} key={rating.ratingId} />
          ))}
      </ScrollView>
    </View>
  );
};

export default RatingTab;
