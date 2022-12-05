import { View, Image, Text, Dimensions } from "react-native";
import { AirbnbRating } from "@rneui/base";

export default function Card({ children }) {
  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
}

Card.Image = ({ image }) => {
  return (
    <Image
      style={{ width: 100, height: 100, borderRadius: 5 }}
      resizeMode="cover"
      source={{ uri: image }}
    />
  );
};

Card.Body = ({ children }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        marginLeft: 6,
      }}>
      {children}
    </View>
  )
}

Card.Name = ({ children }) => {
  return (
    <Text
      numberOfLines={1}
      style={{
        fontFamily: "Roboto_700Bold",
        fontSize: 16,
        color: "#FFFFFF",
        marginBottom: 1,
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
        marginVertial: 1,
      }}
    >
      {children}
    </Text>
  );
};

Card.Rating = ({ rating }) => {
  return (
    <AirbnbRating
      showRating={false}
      defaultRating={rating}
      isDisabled
      size={20}
      ratingContainerStyle={{
        flexDirection: "row",
        marginVertical: 2,
        padding: 0,
        alignItems: "flex-start",
        justifyContent: "flex-start"
      }}
      starContainerStyle={{
        margin: 0,
        padding: 0,
        alignItems: "flex-start",
        justifyContent: "flex-start"
      }}
    />
  )
}