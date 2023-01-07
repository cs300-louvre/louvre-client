import { View, Text, Image, RecyclerViewBackedScrollView } from "react-native";
import { AirbnbRating } from "@rneui/base";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { IGetMeResponse, IRatingCoreData } from "../../../types";
import { fakeGetMeResponse } from "../../../mock";
import { ScreenStackHeaderCenterView } from "react-native-screens";
import { CustomizedButton } from "../../organisms/Button/Button";
import usePostRating from "../../../hooks/rating/usePostRating";
import useMe from "../../../hooks/me/useMe";
import useGetRatingsByEomId from "../../../hooks/rating/useGetRatingsByEomId";
import Rating from "../Rating/Rating";

export const RatingBox: React.FC<{ eomId: string }> = ({ eomId }) => {
  const [rating, setRating] = useState<IRatingCoreData>({
    eomId: eomId,
    rating: null,
    content: "",
  });
  const [error, setError] = useState<{ rating?: string; content?: string }>({
    rating: null,
    content: null,
  });
  const { mutateAsync } = usePostRating();
  const { data: user } = useMe();
  const { data: ratings } = useGetRatingsByEomId(eomId);
  const handlePress = () => {
    let candidateError = null;
    if (!rating.rating) {
      candidateError = {
        ...candidateError,
        rating: "Please specify a rating!",
      };
    }
    if (!rating.content) {
      candidateError = {
        ...candidateError,
        content: "Your rating's content cannot be empty!",
      };
    }
    if (candidateError) {
      setError(candidateError);
      return;
    } else setError({});
    mutateAsync(rating);
  };

  if (ratings && ratings.find((rating) => rating.userId === user.userId))
    return (
      <Rating item={ratings.find((rating) => rating.userId === user.userId)} />
    );

  return (
    <View
      style={{
        width: "100%",
        marginTop: 10,
        marginBottom: 20,
        alignItems: "flex-start",
      }}
    >
      <Text
        style={{ color: "#FFFFFF", fontFamily: "Roboto_700Bold", fontSize: 18 }}
      >
        Share your experience!
      </Text>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <Image
          style={{ width: 30, height: 30, borderRadius: 15, marginRight: 10 }}
          source={{ uri: user.thumbnailUrl }}
        />
        <AirbnbRating
          defaultRating={0}
          showRating={false}
          size={20}
          onFinishRating={(num) => setRating({ ...rating, rating: num })}
        />
      </View>
      {error.rating && (
        <Text
          style={{
            color: "#FF3333",
            fontFamily: "Roboto_400Regular",
            marginBottom: 10,
            fontSize: 12,
          }}
        >
          {error.rating}
        </Text>
      )}
      <TextInput
        maxLength={200}
        style={{
          padding: 5,
          paddingHorizontal: 10,
          width: "100%",
          height: 100,
          marginBottom: 10,
          borderRadius: 5,
          fontSize: 14,
          fontFamily: "Roboto_400Regular",
          backgroundColor: "#B5B5B5",
          color: "#000000",
        }}
        onChangeText={(text) => setRating({ ...rating, content: text })}
        placeholderTextColor="#777777"
        placeholder="Tell us about it!"
        multiline
        textAlignVertical="top"
      />
      {error.content && (
        <Text
          style={{
            color: "#FF3333",
            fontFamily: "Roboto_400Regular",
            fontSize: 12,
            marginBottom: 10,
          }}
        >
          {error.content}
        </Text>
      )}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#B5B5B5",
            fontFamily: "Roboto_400Regular",
            fontSize: 14,
          }}
        >{`${
          rating.content ? 200 - rating.content.length : 200
        } character(s) left`}</Text>
        <CustomizedButton title="Submit" handlePress={handlePress} />
      </View>
    </View>
  );
};

export default RatingBox;
