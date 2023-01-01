import { fakeRating } from "../../../../mock";
import { ScrollView, View } from "react-native";
import Rating from "../../../elements/Rating/Rating";

const ratings = Array.from(Array(10), () => {
  return fakeRating();
});

export const RatingTab = () => {
  return (
    <View>
      <ScrollView
        style={{
          width: "100%",
          paddingHorizontal: 10,
        }}
        contentContainerStyle={{ paddingBottom: 80, paddingTop: 10 }}
      >
        {ratings.map((rating) => (
          <Rating item={rating} key={rating.ratingId} />
        ))}
      </ScrollView>
    </View>
  );
};

export default RatingTab;
