import { View, Image, Text } from "react-native";
import { AirbnbRating } from "@rneui/base";

export default function Card({ children }) {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
}

Card.Image = ({ image, style }) => {
  return <Image style={style} resizeMode="cover" source={{ uri: image }} />;
};

Card.Body = ({ children }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        marginLeft: 6,
      }}
    >
      {children}
    </View>
  );
};

Card.Name = ({ children, containerStyle = {} }) => {
  return (
    <Text
      numberOfLines={1}
      style={{
        fontFamily: "Roboto_700Bold",
        fontSize: 16,
        color: "#FFFFFF",
        width: "60%",
        marginBottom: 1,
        ...containerStyle,
      }}
    >
      {children}
    </Text>
  );
};

Card.Text = ({ children }) => {
  return (
    <Text
      numberOfLines={1}
      style={{
        fontFamily: "Roboto_700Bold",
        fontSize: 16,
        color: "#FFFFFF",
        marginVertical: 1,
      }}
    >
      {children}
    </Text>
  );
};

Card.Rating = ({ rating, numReviews, size = 16, fontSize = 16 }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 2,
      }}
    >
      <AirbnbRating
        showRating={false}
        defaultRating={rating}
        isDisabled
        size={size}
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
        numberOfLines={1}
        style={{
          fontFamily: "Roboto_700",
          fontSize: fontSize,
          color: "#FFFFFF",
        }}
      >
        ({numReviews} reviews)
      </Text>
    </View>
  );
};
